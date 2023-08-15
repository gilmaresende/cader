package com.condelar.cader.app.repositories;

import com.condelar.cader.app.domain.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentTypeRepository extends JpaRepository<PaymentType, Long> {


}
