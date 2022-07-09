const request = require("postman-request");

const forecast = (location, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8f5a0e3433517e9ae13d61a63317a4eb&query=" +
    encodeURIComponent(location) +
    "&units=f";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback(error, undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
      const currentWeatherInfo = body.current;
      callback(undefined, currentWeatherInfo);
    }
  });
};

module.exports = forecast;
