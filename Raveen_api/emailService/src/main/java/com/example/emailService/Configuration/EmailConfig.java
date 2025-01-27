package com.example.emailService.Configuration;

import com.example.emailService.Service.randomGenarate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfig {
    @Bean
    public randomGenarate userBean() {
        return new randomGenarate();
    }
}
