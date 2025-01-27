package com.eadprj.Paypal_payment_gateway.controller;

import com.eadprj.Paypal_payment_gateway.Entity.PaymentEntity;
import com.eadprj.Paypal_payment_gateway.Entity.PaymentEntityRepository;
import com.eadprj.Paypal_payment_gateway.service.PayPalService;
import com.paypal.api.payments.*;
import com.paypal.base.rest.APIContext;
import com.paypal.base.rest.PayPalRESTException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @Autowired
    private PayPalService payPalService;

    @Autowired
    private PaymentEntityRepository paymentRepository;

    @PostMapping("/create")
    public ResponseEntity<?> createPayment(@RequestBody Map<String, Object> payload) {
        try {
            Double amount = Double.valueOf(payload.get("amount").toString());
            String currency = payload.get("currency").toString();

            // Create payment logic remains unchanged
            Amount amt = new Amount();
            amt.setCurrency(currency);
            amt.setTotal(String.format("%.2f", amount));

            Transaction transaction = new Transaction();
            transaction.setAmount(amt);
            transaction.setDescription("Payment for goods or services");

            Payer payer = new Payer();
            payer.setPaymentMethod("paypal");

            RedirectUrls redirectUrls = new RedirectUrls();
            redirectUrls.setCancelUrl("http://localhost:8092/api/payments/cancel");
            redirectUrls.setReturnUrl("http://localhost:8092/api/payments/success");

            Payment payment = new Payment();
            payment.setIntent("sale");
            payment.setPayer(payer);
            payment.setTransactions(Collections.singletonList(transaction));
            payment.setRedirectUrls(redirectUrls);

            APIContext apiContext = payPalService.getAPIContext();
            Payment createdPayment = payment.create(apiContext);

            for (Links link : createdPayment.getLinks()) {
                if (link.getRel().equalsIgnoreCase("approval_url")) {
                    return ResponseEntity.ok(Collections.singletonMap("approval_url", link.getHref()));
                }
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Approval URL not found");

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }


    @GetMapping("/success")
    public ResponseEntity<?> executePayment(@RequestParam String paymentId, @RequestParam String PayerID) {
        try {
            // Get the PayPal API context
            APIContext apiContext = payPalService.getAPIContext();

            // Execute the payment
            Payment payment = new Payment().setId(paymentId)
                    .execute(apiContext, new PaymentExecution().setPayerId(PayerID));

            // Check if the payment is approved
            if ("approved".equals(payment.getState())) {
                // Create and populate the PaymentEntity
                PaymentEntity dbPayment = new PaymentEntity();
                dbPayment.setTransactionId(payment.getId());
                dbPayment.setAmount(Double.valueOf(payment.getTransactions().get(0).getAmount().getTotal()));
                dbPayment.setCurrency(payment.getTransactions().get(0).getAmount().getCurrency());
                dbPayment.setStatus(payment.getState());

                // Save to the database
                paymentRepository.save(dbPayment);

                return ResponseEntity.ok("Payment Successful");
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Payment not approved");
            }
        } catch (PayPalRESTException e) {
            // Handle exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

}

