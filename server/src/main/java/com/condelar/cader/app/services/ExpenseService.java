package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumExpenseOrigin;
import com.condelar.cader.app.constants.enuns.EnumExpenseStatus;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.dto.lotofexpense.ItemLotOfExpenseDTO;
import com.condelar.cader.app.entiti.CardInvoice;
import com.condelar.cader.app.entiti.Expense;
import com.condelar.cader.app.entiti.ItemLotOfExpense;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.condelar.cader.tool.util.Tools.isPositive;

@Service
@RequiredArgsConstructor
public class ExpenseService extends BaseService<Expense, ExpenseDTO, ExpenseFilterDTO, ExpenseListDTO, ExpenseRepository, ExpenseValid> {

    private final WalletService walletService;
    private final PaymentTypeService paymentTypeService;


    private final ExpenseCategoryService expenseCategoryService;

    private final PersonService personService;

    @Override
    public Expense instance() {
        return new Expense();
    }

    @Override
    public Expense toEntity(Expense expense, ExpenseDTO dto) {
        if (!isPositive(expense.getId())) {
            expense.setPayments(new ArrayList<>());
            expense.setOrigin(EnumExpenseOrigin.MANUAL.getValue());
        }
        ToolEntity.cloneAttributes(dto, expense);
        expense.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        expense.setWallet(walletService.findById(dto.getWallet().getId()));
        expense.setExpenseCategory(expenseCategoryService.findById(dto.getExpenseCategory().getId()));
        expense.setPerson(personService.findById(dto.getPerson().getId()));
        expense.setUser(getUser());
        expense.setUpdate(LocalDateTime.now());
        expense.setRegister(LocalDate.now());
        return expense;
    }

    @Override
    public ExpenseDTO toDTO(Expense ob) {
        return new ExpenseDTO(ob);
    }

    @Override
    public List<Expense> filter(ExpenseFilterDTO filter) {
        return getRepo().getFilter(
                filter.getDueDateStart(),
                filter.getDueDateEnd(),
                DescriptionId.getIdShort(filter.getStatus()),
                DescriptionId.getIdLong(filter.getWallet()),
                DescriptionId.getIdLong(filter.getPaymentType()),
                DescriptionId.getIdLong(filter.getPerson()),
                DescriptionId.getIdLong(filter.getExpenseCategory()),
                getUser().getId()
        );
    }

    @Override
    public ExpenseListDTO toListItem(Expense ob) {
        return new ExpenseListDTO(ob);
    }


    public Expense findByIdPayment(Long idPayment) {
        User user = getUser();
        Optional<Expense> op = getRepo().findByIdPaymentAndUser(idPayment, user.getId());
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + idPayment + "'"));
    }


    @Override
    public Expense beforeSave(Expense ob) {
        ob.getPayments().forEach(payment -> payment.setExpense(ob));
        Double payValue = ob.getPayments().stream().mapToDouble(v -> v.getValue()).sum();
        if (ob.getValue() - payValue <= 0) {
            ob.setStatus(EnumExpenseStatus.LIQUIDADO.getValue());
        } else if (payValue > 0) {
            ob.setStatus(EnumExpenseStatus.PARCIAL.getValue());
        } else {
            ob.setStatus(EnumExpenseStatus.ABERTO.getValue());
        }
        return super.beforeSave(ob);
    }

    @Override
    public ExpenseValid getValid() {
        return new ExpenseValid();
    }

    public Expense buildExpenseByCardInvoice(CardInvoice invoice) {
        Expense expense;
        if (invoice.getExpense() == null) {
            expense = instance();
            expense.setUser(getUser());
            expense.setRegister(LocalDate.now());
        } else
            expense = invoice.getExpense();

        expense.setDescription("Invoice " + invoice.getCard().getName());
        expense.setDueDate(invoice.getDueDate());
        expense.setOrigin(EnumExpenseOrigin.FATURA_CARTAO.getValue());

        expense.setPaymentType(invoice.getCard().getPaymentTypeExpense());
        expense.setWallet(invoice.getCard().getWalletExpense());
        expense.setExpenseCategory(invoice.getCard().getExpenseCategoryBuyCard());
        expense.setPerson(invoice.getCard().getPersonExpense());
        expense.setUser(getUser());
        expense.setUpdate(LocalDateTime.now());
        expense.setRegister(LocalDate.now());
        expense.setValue(invoice.getValue());
        return beforeSave(expense);
    }


    public void createExpense(ItemLotOfExpense itemOb, ItemLotOfExpenseDTO item) {
        Expense expense = itemOb.getExpense();
        expense.setValue(item.getValue());
        expense.setDueDate(item.getDueDate());
        expense.setOrigin(EnumExpenseOrigin.LOTE_DESPESA.getValue());
        expense.setDescription(itemOb.getLot().getDescription());
        expense.setPerson(itemOb.getLot().getPerson());
        expense.setExpenseCategory(itemOb.getLot().getCategory());
        expense.setPaymentType(itemOb.getLot().getPaymentType());
        expense.setWallet(itemOb.getLot().getWallet());
        expense.setRegister(itemOb.getRegister());
        expense.setUpdate(itemOb.getUpdate());
        expense.setUser(itemOb.getUser());
        itemOb.setExpense(beforeSave(expense));
    }
}
