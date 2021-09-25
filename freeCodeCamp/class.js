// Only change code below this line
class Thermostat {
  constructor(F) {
    const C = (5 / 9) * (F - 32);
    this._temperature = C;
  }
  // getter
  get temperature() {
    return this._temperature;
  }
  // setter
  set temperature(temperature) {
    this._temperature = temperature;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
