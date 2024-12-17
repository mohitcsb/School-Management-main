package com.mohit.SMS.With.Maven.repository;

import com.mohit.SMS.With.Maven.model.PaymentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepo extends JpaRepository<PaymentModel,Long> {


}
