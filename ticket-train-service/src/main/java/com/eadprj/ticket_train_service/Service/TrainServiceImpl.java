package com.eadprj.ticket_train_service.Service;

import com.eadprj.ticket_train_service.model.TicketTrain;
import com.eadprj.ticket_train_service.model.TicketTrainRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrainServiceImpl implements TrainService{

    @Autowired
    private TicketTrainRepository ticketTrainRepository;

    @Override
    public TicketTrain addTrain(TicketTrain ticketTrain){
        return ticketTrainRepository.save(ticketTrain);
    }

    @Override
    public List<TicketTrain> getAllTrains() {
        return ticketTrainRepository.findAll();
    }

    @Override
    public TicketTrain getTrainById(Long id) {
        return ticketTrainRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Train not found"));

    }

    @Override
    public TicketTrain updateTrain(Long id, TicketTrain updaTicketTrain) {
        // Retrieve the train by id
        TicketTrain ticketTrain = getTrainById(id);

        // Print original ticket train details
        System.out.println("Original Train Details: ");
        System.out.println("Train Number: " + ticketTrain.getTrainNumber());
        System.out.println("Route: " + ticketTrain.getRoute());
        System.out.println("Schedule: " + ticketTrain.getSchedule());
        System.out.println("Available Seats: " + ticketTrain.getAvailableSeats());

        // Print the updated train details
        System.out.println("Updated Train Details: ");
        System.out.println("Train Number: " + updaTicketTrain.getTrainNumber());
        System.out.println("Route: " + updaTicketTrain.getRoute());
        System.out.println("Schedule: " + updaTicketTrain.getSchedule());
        System.out.println("Available Seats: " + updaTicketTrain.getAvailableSeats());

        // Update the ticketTrain with new values
        ticketTrain.setTrainNumber(updaTicketTrain.getTrainNumber());
        ticketTrain.setRoute(updaTicketTrain.getRoute());
        ticketTrain.setSchedule(updaTicketTrain.getSchedule());
        ticketTrain.setAvailableSeats(updaTicketTrain.getAvailableSeats());

        // Save the updated ticket train and return
        return ticketTrainRepository.save(ticketTrain);
    }



    public TicketTrain updateTrainByTrainNumber(Long id, TicketTrain updatedTicketTrain) {
        // Find the existing train by id
        TicketTrain ticketTrain = ticketTrainRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Train with id " + id + " not found."));

        ticketTrain.setRoute(updatedTicketTrain.getRoute());
        ticketTrain.setSchedule(updatedTicketTrain.getSchedule());
        ticketTrain.setAvailableSeats(updatedTicketTrain.getAvailableSeats());

        // Save and return the updated train
        return ticketTrainRepository.save(ticketTrain);
    }


    @Override
    public void deleteTrain(Long id) {
        ticketTrainRepository.deleteById(id);
    }
}
