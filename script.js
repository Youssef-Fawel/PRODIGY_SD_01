function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');
    const celsiusOutput = document.getElementById('celsiusOutput');
    const kelvinOutput = document.getElementById('kelvinOutput');
    const errorMessage = document.getElementById('error-message');

    fahrenheitOutput.textContent = '';
    celsiusOutput.textContent = '';
    kelvinOutput.textContent = '';
    errorMessage.textContent = '';

    if (tempInput === '') {
        errorMessage.textContent = 'Please enter a temperature value.';
        return; 
    }

    let celsius, fahrenheit, kelvin;

    if (unitInput === 'C') {
        celsius = parseFloat(tempInput);
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (unitInput === 'F') {
        fahrenheit = parseFloat(tempInput);
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (unitInput === 'K') {
        kelvin = parseFloat(tempInput);
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    displayTemperature(fahrenheitOutput, fahrenheit, 'F');
    displayTemperature(celsiusOutput, celsius, 'C');
    displayTemperature(kelvinOutput, kelvin, 'K');
}

function displayTemperature(element, temperature, unit) {
    element.textContent = `${temperature.toFixed(2)}° ${unit}`;
    if (temperature < 10) {
        element.className = 'output cold';
    } else if (temperature > 30) {
        element.className = 'output hot';
    } else {
        element.className = 'output';
    }
}

function resetFields() {
    location.reload();
}
