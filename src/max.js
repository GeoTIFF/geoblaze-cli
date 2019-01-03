const { loadBoth } = require("./loader.js");
const {
  log
} = require('./logger.js');
const geoblaze = require('geoblaze');

function logResult(result) {
  if (Array.isArray(result)) {
    if (result.length === 1) {
      log(`Highest Pixel Value (Max) is ${result.toLocaleString()}`);
    } else {
      log(`Highest Pixel Value (Max) for each Band is ${result}`);
    }
  } else {
    log(`Unable to calculate the Highest Pixel Value (Max)`);
  };
}

module.exports = async (rasterPath, vectorInput) => {
  try {

    const [ georaster, geovector ] = await loadBoth(rasterPath, vectorInput);
    const result = geoblaze.max(georaster, geovector);
    logResult(result);
  } catch (error) {
    console.error(error);
  }
}