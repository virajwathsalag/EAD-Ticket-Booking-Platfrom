package com.eadprj.ticket_train_service.Controller;

import com.eadprj.ticket_train_service.Service.TrainService;
import com.eadprj.ticket_train_service.Service.TrainServiceImpl;
import com.eadprj.ticket_train_service.model.TicketTrain;
import com.eadprj.ticket_train_service.model.TicketTrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/trains")
public class TrainController {

    @Autowired
    private TrainService trainService;

    @Autowired
    private TicketTrainRepository ticketTrainRepository;

    @PostMapping
    public ResponseEntity<TicketTrain> addTrain(@RequestBody TicketTrain train) {
        return ResponseEntity.ok(trainService.addTrain(train));
    }

    @GetMapping
    public ResponseEntity<List<TicketTrain>> getAllTrains() {
        return ResponseEntity.ok(trainService.getAllTrains());
    }

    // Get by Train ID
    @GetMapping("/{id}")
    public ResponseEntity<TicketTrain> getTrainById(@PathVariable Long id) {
        return ResponseEntity.ok(trainService.getTrainById(id));
    }

    // Get by Train Number
    @GetMapping("/number/{trainNumber}")
    public ResponseEntity<TicketTrain> getTrainByNumber(@PathVariable Long trainNumber) {
        return ResponseEntity.ok(trainService.getTrainById(trainNumber));
    }

    @PutMapping("/number/{trainNumber}")
    public ResponseEntity<TicketTrain> updateTrain(@PathVariable Long trainNumber, @RequestBody TicketTrain train) {
        // Print received request details
        System.out.println("Received Request Body: " + train);
        System.out.println("Received trainNumber from path: " + trainNumber);



        // Update train using the train number from the path and updated details from the body
        TicketTrain updatedTrain = trainService.updateTrainByTrainNumber(trainNumber, train);

        // Return updated train details in the response
        return ResponseEntity.ok(updatedTrain);
    }






    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrain(@PathVariable Long id) {
        trainService.deleteTrain(id);
        return ResponseEntity.noContent().build();
    }
}
