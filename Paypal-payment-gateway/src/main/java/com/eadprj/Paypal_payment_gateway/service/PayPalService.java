package com.eadprj.Paypal_payment_gateway.service;

import com.paypal.base.rest.APIContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class PayPalService {
    @Value("${paypal.client.id}")
    private String clientId;

    @Value("${paypal.client.secret}")
    private String clientSecret;

    @Value("${paypal.mode}")
    private String mode;

    public APIContext getAPIContext() {
        return new APIContext(clientId, clientSecret, mode);
    }
}

