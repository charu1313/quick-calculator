const API_URL = 'http://localhost:8080/api/calculator/calculate';

async function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        resultText.textContent = 'Error: Please enter valid numbers';
        resultDiv.classList.remove('success');
        resultDiv.classList.add('error', 'active');
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                num1: num1,
                num2: num2,
                operation: operation
            })
        });

        const data = await response.json();

        if (data.message === 'Success') {
            resultText.textContent = `Result: ${num1} ${getOperationSymbol(operation)} ${num2} = ${data.result}`;
            resultDiv.classList.add('success');
            resultDiv.classList.remove('error');
        } else {
            resultText.textContent = data.message;
            resultDiv.classList.add('error');
            resultDiv.classList.remove('success');
        }

        resultDiv.classList.add('active');
    } catch (error) {
        resultText.textContent = 'Error: Unable to connect to server. Make sure backend is running on http://localhost:8080';
        resultDiv.classList.add('error', 'active');
        resultDiv.classList.remove('success');
        console.error('Error:', error);
    }
}

function getOperationSymbol(operation) {
    const symbols = {
        'add': '+',
        'subtract': '-',
        'multiply': '*',
        'divide': '/'
    };
    return symbols[operation] || operation;
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('num1').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculate();
    });
    document.getElementById('num2').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') calculate();
    });
});
