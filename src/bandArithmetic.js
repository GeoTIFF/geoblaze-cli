const { loadGeoRaster } = require("./loader.js");
const { log } = require('./logger.js');
const geoblaze = require('geoblaze');

module.exports = async (rasterPath, arithmetic) => {
  try {

    const georaster = await loadGeoRaster(rasterPath);
    console.log("loaded georaster:", georaster);
    const result = geoblaze.bandArithmetic(georaster, arithmetic);
    log('Math result is ', result);
  } catch (error) {
    console.error(error);
  }
}