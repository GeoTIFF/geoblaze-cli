const { loadBoth } = require("./loader.js");
const { log } = require('./logger.js');
const geoblaze = require('geoblaze');

module.exports = async (rasterPath, vectorInput) => {
  try {
    const [ georaster, geovector ] = await loadBoth(rasterPath, vectorInput);
    const result = geoblaze.median(georaster, geovector);
    log('Median Pixel Value is ' + result);
  } catch (error) {
    console.error(error);
  }
}