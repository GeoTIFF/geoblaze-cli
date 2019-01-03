const { loadBoth } = require("./loader.js");
const {
  log
} = require('./logger.js');
const geoblaze = require('geoblaze');

function logMinResult(result) {
  if (Array.isArray(result)) {
    if (result.length === 1) {
      log(`Lowest Pixel Value (Min) is ${result.toLocaleString()}`);
    } else {
      log(`Lowest Pixel Value (Min) for each Band is ${result}`);
    }
  } else {
    log(`Unable to calculate the Lowest Pixel Value (Min)`);
  };
}

module.exports = async (rasterPath, vectorInput) => {
  try {

    const [ georaster, geovector ] = await loadBoth(rasterPath, vectorInput);
    const result = geoblaze.min(georaster, geovector);
    logMinResult(result);
  } catch (error) {
    console.error(error);
  }
}