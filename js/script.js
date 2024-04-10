// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Calista.E
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function convert Fahrenheit to Celsius.
 */
function calculateFahrenheitToCelsius() {
  // input
  const fahrenheitOfTemperature = parseFloat(document.getElementById('fahrenheit-of-temperature').value)

  // process
  const fahrenheitToCelsius = ( fahrenheitOfTemperature - 32 ) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'Celsius is: ' + celsius.toFixed(3) + ' °C'
}