const { readFileSync } = require("fs");
const {
  loadGeoRaster,
  loadGeoVector
} = require("./loader.js");
const geoblaze = require('geoblaze');
const {
  log,
  logAggregateResult,
  logResult,
  getPointMessage,
} = require('./logger.js');


module.exports = async (rasterPath, vectorInput) => {
  try {

    const georaster = await loadGeoRaster(rasterPath);
      if (process.env.GEOBLAZE_CLI_DEBUG) log("Object.keys(georaster): " + Object.keys(georaster));
    const geovector = await loadGeoVector(vectorInput);
    if (process.env.GEOBLAZE_CLI_DEBUG) log("typeof geovector: " + typeof geovector);
    const result = geoblaze.identify(georaster, geovector);

    if (Array.isArray(result)) {
      const point = getPointMessage(geovector);
      if (result.length === 1) {
        log(`Pixel value${(point ? ` at ${point}` : '')} is ${result[0]}`);
      } else {
        log("Pixel value for bands are " + result);
      }
    } else {

      if (process.env.GEOBLAZE_CLI_DEBUG) log("result: " + result);
      log("Unable to identify");
    };
  } catch (error) {
    console.error(error);
  }
}