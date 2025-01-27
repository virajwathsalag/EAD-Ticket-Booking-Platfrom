document.getElementById('payment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    // Validate amount (should be a positive number)
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    // Validate currency (should be a valid currency code)
    const validCurrencies = ['USD', 'EUR', 'GBP']; // Example list of supported currencies
    if (!validCurrencies.includes(currency)) {
        alert('Please select a valid currency.');
        return;
    }

    try {
        const response = await fetch('http://localhost:8092/api/payments/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: amount.toFixed(2), // Ensure amount is in the correct format
                currency: currency,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Payment created:', data);
            if (data.approval_url) {
                window.location.href = data.approval_url; // Redirect to approval page
            }
        } else {
            const error = await response.json();
            console.error('Error response:', error);
            alert('Payment creation failed: ' + error.message);
        }
    } catch (err) {
        console.error('Request error:', err);
        alert('An unexpected error occurred.');
    }
});
