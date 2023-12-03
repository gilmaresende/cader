package com.condelar.cader.app.services;

import com.condelar.cader.app.dto.lotofexpense.ItemLotOfExpenseDTO;
import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseDTO;
import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseFilterDTO;
import com.condelar.cader.app.dto.lotofexpense.LotOfExpenseListDTO;
import com.condelar.cader.app.entiti.ItemLotOfExpense;
import com.condelar.cader.app.entiti.LotOfExpense;
import com.condelar.cader.app.repositories.LotOfExpenseRepository;
import com.condelar.cader.app.valid.LotOfExpenseValid;
import com.condelar.cader.core.otherdto.DescriptionId;
import com.condelar.cader.core.structure.BaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.condelar.cader.tool.util.ToolDate.getDayInNextMonth;

@Service
@RequiredArgsConstructor
public class LotOfExpenseService extends BaseService<LotOfExpense, LotOfExpenseDTO, LotOfExpenseFilterDTO, LotOfExpenseListDTO, LotOfExpenseRepository, LotOfExpenseValid> {

    private final WalletService walletService;

    private final PaymentTypeService paymentTypeService;

    private final ExpenseCategoryService expenseCategoryService;

    private final PersonService personService;

    private final ExpenseService expenseService;

    @Override
    public LotOfExpense instance() {
        return new LotOfExpense();
    }

    @Override
    public LotOfExpense toEntity(LotOfExpense ob, LotOfExpenseDTO dto) {
        ob.setDescription(dto.getDescription());
        ob.setAmount(ob.getAmount());
        ob.setFirstDue(ob.getFirstDue());
        ob.setLastDue(ob.getFirstDue());
        ob.setValueBase(ob.getValueBase());

        ob.setPerson(personService.getById(dto.getPerson().getId()));
        ob.setCategory(expenseCategoryService.getById(dto.getCategory().getId()));
        ob.setWallet(walletService.getById(dto.getWallet().getId()));
        ob.setPaymentType(paymentTypeService.getById(dto.getPaymentType().getId()));
        dto.getNoPayments().forEach(item -> {
            Optional<ItemLotOfExpense> op = ob.getItems().stream().filter(f -> f.getId() != null && f.getId().equals(item.getId())).findFirst();
            ItemLotOfExpense itemOb;
            if (op.isPresent()) {
                itemOb = op.get();
            } else {
                itemOb = new ItemLotOfExpense();
                itemOb.setRegister(LocalDate.now());
                itemOb.setExpense(expenseService.instance());
                ob.getItems().add(itemOb);
            }
            itemOb.setUser(getUser());
            itemOb.setUpdate(LocalDateTime.now());
            itemOb.setNumber(item.getNumber());
            itemOb.setLot(ob);
            expenseService.createExpense(itemOb, item);
            if (itemOb.getExpense().getDueDate().isAfter(ob.getLastDue())) {
                ob.setLastDue(itemOb.getExpense().getDueDate());
            }
        });
        return ob;
    }

    @Override
    public LotOfExpenseDTO toDTO(LotOfExpense ob) {
        return new LotOfExpenseDTO(ob);
    }

    @Override
    public List<LotOfExpense> filter(LotOfExpenseFilterDTO filter) {
        return getRepo().getFilter(filter.getDueDateStart(), filter.getDueDateEnd(), getUser().getId(), DescriptionId.getIdLong(filter.getWallet()), DescriptionId.getIdLong(filter.getPaymentType()), DescriptionId.getIdLong(filter.getPerson()), DescriptionId.getIdLong(filter.getExpenseCategory()));
    }

    @Override
    public LotOfExpenseListDTO toListItem(LotOfExpense ob) {
        return new LotOfExpenseListDTO(ob);
    }

    public void previewExpenses(LotOfExpenseDTO lotOfExpenseDTO) {
        LocalDate dueDate = lotOfExpenseDTO.getFirstDue();
        int dayDueDate = dueDate.getDayOfMonth();
        for (int i = 0; i < lotOfExpenseDTO.getAmount(); i++) {
            ItemLotOfExpenseDTO item = new ItemLotOfExpenseDTO();
            item.setNumber(i + 1);
            item.setValue(lotOfExpenseDTO.getValueBase());
            item.setDueDate(dueDate);
            lotOfExpenseDTO.getNoPayments().add(item);
            dueDate = getDayInNextMonth(dueDate, dayDueDate);
        }
    }
}

