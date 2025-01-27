package com.example.emailService.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class emailService {
    @Autowired
    private JavaMailSender mailSender;
    public void sendEmail(String toEmail,String subject,String body) throws Exception{
       try{
           SimpleMailMessage message = new SimpleMailMessage();
           message.setFrom("saliyaautocare52@gmail.com");
           message.setTo(toEmail);
           message.setText(body);
           message.setSubject(subject);
           mailSender.send(message);
           System.out.println("Email sent!!");
       }catch (Exception ee){
           System.err.println("Failed to send email: " + ee.getMessage());
           throw ee;
       }
    }
}
