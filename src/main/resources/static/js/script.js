async function calculate() {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    if (!num1 || !num2) {
        document.getElementById("result").innerText = "Result: Please enter both numbers";
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:8080/${operation}?num1=${num1}&num2=${num2}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.text();

        document.getElementById("result").innerText = "Result: " + result;
    } catch (error) {
        document.getElementById("result").innerText = "Result: Error - " + error.message;
    }
}

// Allow Enter key to calculate
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("num2").addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
            calculate();
        }
    });
});
