package com.eadprj.ticket_Booking_service.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class TrainService {

    private static final Logger logger = LoggerFactory.getLogger(TrainService.class);

    @Value("${ticket.train.service.url}")
    private String trainServiceUrl;

    private final RestTemplate restTemplate;

    public TrainService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Map<String, Object>> getAvailableTrains() {
        logger.info("Fetching available trains from {}", trainServiceUrl);

        try {
            ResponseEntity<List> response = restTemplate.getForEntity(trainServiceUrl, List.class);

            if (response.getStatusCode().is2xxSuccessful()) {
                logger.info("Successfully retrieved train data: {}", response.getBody());
                return response.getBody();
            } else {
                logger.warn("Received non-2xx status code: {} while fetching train data", response.getStatusCode());
                return List.of(); // Return an empty list if response is unsuccessful
            }
        } catch (Exception e) {
            logger.error("Error while fetching available trains from {}: {}", trainServiceUrl, e.getMessage(), e);
            throw new RuntimeException("Failed to fetch available trains", e);
        }
    }
}
