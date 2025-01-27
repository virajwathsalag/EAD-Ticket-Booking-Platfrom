package com.eadprj.ticket_Booking_service.service;

import com.eadprj.ticket_Booking_service.Entity.Ticket;
import com.eadprj.ticket_Booking_service.Entity.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public Ticket bookTicket(Ticket ticket) {
        return ticketRepository.save(ticket);

    }

    public List<Ticket> getTicketsByUser(String email) {
        return ticketRepository.findByUserEmail(email);
    }

    public Optional<Ticket> getTicketById(Long id) {
        return ticketRepository.findById(id);
    }

    public Ticket updateTicket(Long id, Ticket updatedTicket) {
        return ticketRepository.findById(id)
                .map(ticket -> {
                    ticket.setPassengerName(updatedTicket.getPassengerName());
                    ticket.setTravelDate(updatedTicket.getTravelDate());
                    return ticketRepository.save(ticket);
                })
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
    }

    public void cancelTicket(Long id) {
        ticketRepository.deleteById(id);
    }
}
