const { readFileSync } = require("fs");
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
    const result = geoblaze.sum(georaster, geovector);
    logAggregateResult('Sum', result);
  } catch (error) {
    console.error(error);
  }
}