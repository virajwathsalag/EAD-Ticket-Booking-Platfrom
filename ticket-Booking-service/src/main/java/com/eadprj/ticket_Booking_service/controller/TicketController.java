package com.eadprj.ticket_Booking_service.controller;

import com.eadprj.ticket_Booking_service.Entity.Ticket;
import com.eadprj.ticket_Booking_service.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    private final TicketService ticketService;

    @Autowired
    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    // Book a new ticket
    @PostMapping
    public ResponseEntity<Ticket> bookTicket(@RequestBody Ticket ticket) {
        Ticket bookedTicket = ticketService.bookTicket(ticket);
        return ResponseEntity.status(201).body(bookedTicket); // Returning 201 Created status
    }

    // Get ticket by ID
    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicket(@PathVariable Long id) {
        return ticketService.getTicketById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build()); // Returning 404 if not found
    }

    // Get all tickets for a specific user by email
    @GetMapping("/user/{email}")
    public ResponseEntity<List<Ticket>> getTicketsByUser(@PathVariable String email) {
        List<Ticket> tickets = ticketService.getTicketsByUser(email);
        if (tickets.isEmpty()) {
            return ResponseEntity.noContent().build(); // Returning 204 No Content if no tickets found
        }
        return ResponseEntity.ok(tickets);
    }

    // Update ticket details
    @PutMapping("/{id}")
    public ResponseEntity<Ticket> updateTicket(@PathVariable Long id, @RequestBody Ticket ticket) {
        Ticket updatedTicket = ticketService.updateTicket(id, ticket);
        return ResponseEntity.ok(updatedTicket); // Returning 200 OK with updated ticket
    }

    // Cancel a ticket
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> cancelTicket(@PathVariable Long id) {
        ticketService.cancelTicket(id);
        return ResponseEntity.noContent().build(); // Returning 204 No Content after successful deletion
    }
}
