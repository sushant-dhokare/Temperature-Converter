document.addEventListener("DOMContentLoaded", function () {
    const convertButton = document.getElementById("convertButton");
    const conversionResult = document.getElementById("conversionResult");

    convertButton.addEventListener("click", function () {
        const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
        const conversionUnit = document.getElementById("conversionUnit").value;

        let convertedTemperature;
        switch (conversionUnit) {
            case "fahrenheit":
                convertedTemperature = (temperatureInput * 9 / 5) + 32;
                break;
            case "kelvin":
                convertedTemperature = temperatureInput + 273.15;
                break;
            case "rankine":
                convertedTemperature = (temperatureInput + 273.15) * 9 / 5;
                break;
            default:
                convertedTemperature = temperatureInput;
        }

        conversionResult.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${conversionUnit}`;
    });
});
