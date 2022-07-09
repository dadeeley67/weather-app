const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZGFkZWVsZXk2NyIsImEiOiJjbDViZjE3bmQwNzBoM2RtcGllanA2b3U1In0.v2wZhfR1iQZgDmGCjJ-78w&limit";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("There was an error.", undefined);
    } else if (body.features.length === 0) {
      callback(
        "Location entered was not valid. Please enter valid location.",
        undefined
      );
    } else {
      const longitude = body.features[0].center[0];
      const latitude = body.features[0].center[1];
      const location = body.features[0].place_name;
      callback(undefined, {
        longitude: longitude,
        latitude: latitude,
        location: location,
      });
    }
  });
};

module.exports = geocode;
