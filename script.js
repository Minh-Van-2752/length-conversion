const textBox = document.getElementById("textBox");
const toMeter = document.getElementById("toMeter");
const toFeet3 = document.getElementById("toFeet3");
const toKilometer = document.getElementById("toKilometer");
const toMile3 = document.getElementById("toMile3");
const toFeet = document.getElementById("toFeet");
const toYard = document.getElementById("toYard");
const toMile = document.getElementById("toMile");
const toFeet1 = document.getElementById("toFeet1");
const toMile1 = document.getElementById("toMile1");
const toYard1 = document.getElementById("toYard1");
const toInch = document.getElementById("toInch");
const toFeet2 = document.getElementById("toFeet2");
const toInch1 = document.getElementById("toInch1");
const toYard2 = document.getElementById("toYard2");
const toInch2 = document.getElementById("toInch2");
const toMile2 = document.getElementById("toMile2");
let toCentimeter = document.getElementById("toCentimeter");
const resultElement = document.getElementById("result");
let length;

function convert(){
  if(toCentimeter.selected){
    length = Number(textBox.value);
    length = length * 1 / 0.393700787; 
    resultElement.textContent = length.toFixed(3) + (" ft");
  }
  if(toMeter.selected){
    length = Number(textBox.value);
    length = length * 1 / 0.3048;
    resultElement.textContent = length.toFixed(3) + (" ft");
  }
  else if(toFeet3.selected){
    length = Number(textBox.value);
    length = length * 1 * 0.3048;
    resultElement.textContent = length.toFixed(3) + (" m");
  }
  else if(toKilometer.selected){
    length = Number(textBox.value);
    length = length * 1 * 1.609344;
    resultElement.textContent = length.toFixed(3) + (" mi");
  }
  else if(toMile3.selected){
    length = Number(textBox.value);
    length = length * 1 / 1.609344;
    resultElement.textContent = length.toFixed(3) + (" km");
  }
  else if(toFeet.selected){
    length = Number(textBox.value);
    length = length * 1 / 3;
    resultElement.textContent = length.toFixed(1) + (" yd");
  }
  else if(toYard.selected){
    length = Number(textBox.value);
    length = length * 1 * 3;
    resultElement.textContent = length.toFixed(1) + (" ft");
  }
  else if(toMile.selected){
    length = Number(textBox.value);
    length = length * 1 * 5280;
    resultElement.textContent = length.toFixed(1) + (" ft");
  }
  else if(toFeet1.selected){
    length = Number(textBox.value);
    length = length * 1 / 5280;
    resultElement.textContent = length.toFixed(10) + (" mi");
  }
  else if(toMile1.selected){
    length = Number(textBox.value);
    length = length * 1 * 1.760;
    resultElement.textContent = length.toFixed(3) + (" yd");
  }
  else if(toYard1.selected){
    length = Number(textBox.value);
    length = length * 1 / 1.760;
    resultElement.textContent = length.toFixed(3) + (" mi");
  }
  else if(toInch.selected){
    length = Number(textBox.value);
    length = length * 1 / 12;
    resultElement.textContent = length.toFixed(3) + (" ft");
  }
  else if(toFeet2.selected){
    length = Number(textBox.value);
    length = length * 1 * 12;
    resultElement.textContent = length.toFixed(1) + (" in");
  }
  else if(toInch1.selected){
    length = Number(textBox.value);
    length = length * 1 / 36;
    resultElement.textContent = length.toFixed(3) + (" yd");
  }
  else if(toYard2.selected){
    length = Number(textBox.value);
    length = length * 1 * 36;
    resultElement.textContent = length.toFixed(1) + (" in");
  }
  else if(toInch2.selected){
    length = Number(textBox.value);
    length = length * 1 / 63360;
    resultElement.textContent = length.toFixed(6) + (" mi");
  }
  else if(toMile2.selected){
    length = Number(textBox.value);
    length = length * 1 * 63360;
    resultElement.textContent = length.toFixed(1) + (" in");
  }

  const text = resultElement.textContent;
  resultElement.textContent = "";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      resultElement.textContent += text[index];
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
}

// 1 mile = 1.609344km
