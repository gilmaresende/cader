package com.condelar.cader.app.services;

import com.condelar.cader.app.constants.enuns.EnumExpenseOrigin;
import com.condelar.cader.app.constants.enuns.EnumExpenseStatus;
import com.condelar.cader.app.dto.lotofexpense.ItemLotOfExpenseDTO;
import com.condelar.cader.app.entiti.*;
import com.condelar.cader.app.dto.expense.ExpenseDTO;
import com.condelar.cader.app.dto.expense.ExpenseFilterDTO;
import com.condelar.cader.app.dto.expense.ExpenseListDTO;
import com.condelar.cader.app.dto.expense.ExpensePaymentDTO;
import com.condelar.cader.app.repositories.ExpenseRepository;
import com.condelar.cader.app.valid.ExpenseValid;
import com.condelar.cader.core.domain.User;
import com.condelar.cader.core.errors.exceptions.ObjectNotFoundException;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import com.condelar.cader.tool.entity.ToolEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    private final MovementService movementService;

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

    public ExpensePayment predictPayment(Expense expense) {
        ExpensePayment expensePayment = new ExpensePayment();
        expensePayment.setExpense(expense);
        expensePayment.setPaymentType(expense.getPaymentType());
        expensePayment.setPayDay(LocalDate.now());
        expensePayment.setWallet(expense.getWallet());
        expensePayment.setValue(expense.getValue() - expense.getPayments().stream().mapToDouble(m -> m.getValue()).sum());
        return expensePayment;
    }

    public ExpensePayment getPaymentById(Long idPayment) {
        User user = getUser();
        Optional<ExpensePayment> op = getRepo().findPaymentByIdAndUser(idPayment, user.getId());
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + idPayment + "'"));
    }

    public Expense findByIdPayment(Long idPayment) {
        User user = getUser();
        Optional<Expense> op = getRepo().findByIdPaymentAndUser(idPayment, user.getId());
        return op.orElseThrow(() -> new ObjectNotFoundException("Data not found to object of type '" + instance().getClass().getName() + "' with id '" + idPayment + "'"));
    }

    @Transactional
    public Expense deletePayment(Long id) {
        Expense expense = findByIdPayment(id);
        expense.getPayments().removeIf(f -> f.getId().equals(id));
        expense = save(expense);
        return expense;
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

    @Transactional
    public Expense newPayment(ExpensePaymentDTO dto) {
        Expense expense = findById((dto.getIdExpense()));
        ExpensePayment payment = new ExpensePayment();
        payment.setExpense(expense);
        payment = updateExpenseByDTO(payment, dto);
        expense.getPayments().add(payment);
        payment.setExpense(expense);
        return expense;
    }

    public Expense updatePayment(ExpensePaymentDTO data) {
        Expense expense = findById(data.getIdExpense());
        ExpensePayment payment = expense.getPayments().stream().filter(f -> f.getId().equals(data.getId())).findFirst().orElseThrow();
        updateExpenseByDTO(payment, data);
        return expense;
    }

    private ExpensePayment updateExpenseByDTO(ExpensePayment payment, ExpensePaymentDTO dto) {
        ToolEntity.cloneAttributes(dto, payment);
        payment.setPaymentType(paymentTypeService.findById(dto.getPaymentType().getId()));
        payment.setWallet(walletService.findById(dto.getWallet().getId()));
        payment.setUser(getUser());
        payment.setUpdate(LocalDateTime.now());
        payment.setRegister(LocalDate.now());
        Movement movement = movementService.newMovement(payment);
        payment.setMovement(movement);
        return payment;
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
