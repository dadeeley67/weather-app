const chalk = require("chalk");
const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const address = process.argv[2];

geocode(address, (error, { location, longitude, latitude } = {}) => {
  if (error) {
    return console.log(chalk.red.inverse(error));
  }
  console.log(
    chalk.green.inverse(
      "The longitude and latitude for " +
        location +
        " is " +
        longitude +
        ", " +
        latitude +
        "."
    )
  );
  forecast(
    location,
    (error, { weather_descriptions, temperature, precip } = {}) => {
      if (error) {
        return console.log(chalk.red.inverse(error));
      } else {
        console.log(
          chalk.green.inverse(
            weather_descriptions[0] +
              ". It is currently " +
              temperature +
              " degrees outsides. There is a " +
              precip * 100 +
              "% chance of rain."
          )
        );
      }
    }
  );
});
