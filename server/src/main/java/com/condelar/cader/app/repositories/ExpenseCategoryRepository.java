package com.condelar.cader.app.repositories;

import com.condelar.cader.app.domain.ExpenseCategory;
import com.condelar.cader.app.domain.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseCategoryRepository extends JpaRepository<ExpenseCategory, Long> {


}
