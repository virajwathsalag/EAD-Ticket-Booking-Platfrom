package com.eadprj.ticket_train_service.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketTrainRepository extends JpaRepository<TicketTrain, Long> {

}
