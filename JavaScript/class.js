// simple class programming

class Greet {
  constructor(v) {
    this.v = v;
  }
}

const greet = new Greet("Hi");
console.log(greet.v);

// 2nd Class Example
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }
  // getter
  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }
  // setter
  set temperature(updatedTemp) {
    return (this._temperature = (updatedTemp * 9.0) / 5 + 32);
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp, "1st");
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp, "2nd");
