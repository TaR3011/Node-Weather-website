const request = require("request");

const forecast = (lat, lon, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=6b635f0135c7fe1fc4db40088fc796b4&query=" +
    lat +
    "," +
    lon +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to weather service", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const current = body.current;
      callback(
        undefined,
        `${current.weather_descriptions[0]} , It is current ${current.temperature} degress out , It feels like ${current.feelslike} degress out.`
      );
    }
  });
};

module.exports = forecast;
