const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://us1.locationiq.com/v1/search?key=pk.fe88be08628c14e9cf86adcafd4f7099&q=" +
    address +
    "&format=json&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.length === 0) {
      callback("Unable to find location , Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body[0].lat,
        longitude: body[0].lon,
        location: body[0].display_name,
      });
    }
  });
};

module.exports = geocode;
