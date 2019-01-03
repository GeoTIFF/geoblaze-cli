const { loadBoth } = require("./loader.js");
const {
  log,
  logAggregateResult,
  logResult
} = require('./logger.js');
const geoblaze = require('geoblaze');

module.exports = async (rasterPath, vectorInput) => {
  try {

    const [ georaster, geovector ] = await loadBoth(rasterPath, vectorInput);
    const result = geoblaze.mean(georaster, geovector);
    logAggregateResult('Mean', result);
  } catch (error) {
    console.error(error);
  }
}