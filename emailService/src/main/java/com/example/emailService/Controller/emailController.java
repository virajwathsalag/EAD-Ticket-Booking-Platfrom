package com.example.emailService.Controller;

import com.example.emailService.Entity.randomNumbers;
import com.example.emailService.Service.emailService;
import com.example.emailService.Service.randomGenarate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class emailController {
    @Autowired
    private emailService em1;

    @Autowired
    private randomGenarate rg;

    String GlobalVerificationID;

    @GetMapping("/user/sendVerificationMail/{toMail}/{id}")
    public ResponseEntity<String> sendMail(@PathVariable("toMail") String mailTo, @PathVariable("id") int id) {
        try {
            randomNumbers nowRandomObj = rg.getNumber();
            int newRand = nowRandomObj.getRandomNumber();
            String bodyCon = "Your email verification code is : " + newRand + id;
            GlobalVerificationID = String.valueOf(newRand) + String.valueOf(id);
            em1.sendEmail(mailTo, "Email Verification", bodyCon);
            return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
        } catch (Exception ee) {
            return new ResponseEntity<>("Failed to send email: " + ee.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/user/getVerificationToFront")
    public String getVerification(){
        return GlobalVerificationID;
    }
}
