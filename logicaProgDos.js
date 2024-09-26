function convertirTemperatura() {
    let celsius = document.getElementById("dato").value;
    celsius = parseFloat(celsius);
    if (isNaN(celsius)) {
        document.getElementById("error").textContent = "Error: Ingresa un valor numérico válido.";
        document.getElementById("resultadosFahrenheit").textContent = "";
        document.getElementById("resultadosKelvin").textContent = "";
    } else {
        document.getElementById("error").textContent = "";
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        document.getElementById("resultadosFahrenheit").textContent = `Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
        document.getElementById("resultadosKelvin").textContent = `Temperatura en Kelvin: ${kelvin.toFixed(2)} K`;
    }
}