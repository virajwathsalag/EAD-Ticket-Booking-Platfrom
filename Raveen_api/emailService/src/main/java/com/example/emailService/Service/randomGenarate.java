package com.example.emailService.Service;
import com.example.emailService.Entity.randomNumbers;

import java.util.Random;

public class randomGenarate {
    public randomNumbers getNumber(){
        randomNumbers rad1 = new randomNumbers();
        Random rand = new Random();
        int rand_int1 = rand.nextInt(400);
        rad1.setRandomNumber(rand_int1);
        return rad1;
    }
}
