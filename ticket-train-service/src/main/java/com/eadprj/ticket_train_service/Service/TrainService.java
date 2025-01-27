package com.eadprj.ticket_train_service.Service;

import com.eadprj.ticket_train_service.model.TicketTrain;

import java.util.List;

public interface TrainService {
    TicketTrain addTrain(TicketTrain ticketTrain);
    List<TicketTrain> getAllTrains();
    TicketTrain getTrainById(Long id);
    TicketTrain updateTrain(Long id, TicketTrain updaTicketTrain);
    void deleteTrain(Long id);

    TicketTrain updateTrainByTrainNumber(Long id, TicketTrain train);

}

