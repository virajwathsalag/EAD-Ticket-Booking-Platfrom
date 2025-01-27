package com.eadprj.Paypal_payment_gateway.Entity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentEntityRepository extends JpaRepository<PaymentEntity, Long> {
}
