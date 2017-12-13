class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = Record.getId();
            this.temperature = Number(temperature);
            this.humidity = Number(humidity);
            this.pressure = Number(pressure);
            this.windSpeed = Number(windSpeed);
        }

        static getId() {
            if (Record.nextId === undefined)
                Record.nextId = 0;
            return Record.nextId++;
        }


        toString() {
            let weather = 'Not stormy';
            if (this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25) {
                weather = 'Stormy';
            }

            let result = `Reading ID: ${this.id}\n`;
            result += `Temperature: ${this.temperature}*C\n`;
            result += `Relative Humidity: ${this.humidity}%\n`;
            result += `Pressure: ${this.pressure}hpa\n`;
            result += `Wind Speed: ${this.windSpeed}m/s\n`;
            result += `Weather: ${weather}`;
            return result;
        }
    }
   
