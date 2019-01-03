const { loadBoth } = require("./loader.js");
const {
  logAggregateResult,
} = require('./logger.js');
const geoblaze = require('geoblaze');

module.exports = async (rasterPath, vectorInput) => {
  try {
    const [ georaster, geovector ] = await loadBoth(rasterPath, vectorInput);
    const result = geoblaze.median(georaster, geovector);
    logAggregateResult('Median', result);
  } catch (error) {
    console.error(error);
  }
}