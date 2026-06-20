async function calculate() {

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;

    const response = await fetch(
        `http://localhost:8080/${operation}?num1=${num1}&num2=${num2}`
    );

    const result = await response.text();

    document.getElementById("result").innerText = "Result: " + result;
}