"use strict";
// Q.28. Develop a function that converts an array of Fahrenheit
//  temperatures to Celsius and logs the new temperatures.
Object.defineProperty(exports, "__esModule", { value: true });
function fahrenheigtToCelsius(fahrenheit) {
    let celsius = [];
    for (let i = 0; i < fahrenheit.length; i++) {
        const celsiusTemp = (fahrenheit[i] - 32) * (5 / 9);
        celsius.push(celsiusTemp);
    }
    // Log the new Celsius temperatures
    console.log("     Celsius Temperatures:   ");
    console.log(celsius);
}
let fahrenheit = [34, 55, 88, 100];
fahrenheigtToCelsius(fahrenheit);
