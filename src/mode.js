const { loadBoth } = require("./loader.js");
const {
  log
} = require('./logger.js');
const geoblaze = require('geoblaze');

function logModeResult(result) {
  if (Array.isArray(result)) {
    if (result.length === 1) {
      log(`Most Common Pixel Value (Mode) is ${result.toLocaleString()}`);
    } else {
      log(`Most Common Pixel Value (Mode) for each Band is ${result}`);
    }
  } else {
    log(`Unable to calculate the Mode`);
  };
}

module.exports = async (rasterPath, vectorInput) => {
  try {

    const [ georaster, geovector ] = await loadBoth(rasterPath, vectorInput);
    const result = geoblaze.mode(georaster, geovector);
    logModeResult(result);
  } catch (error) {
    console.error(error);
  }
}