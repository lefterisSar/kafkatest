package com.kafkatest.demo.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {
    @KafkaListener(topics = "order-events", groupId = "order-group")
    public void listen(String message) {
        System.out.println("Received message: " + message);
    }
}