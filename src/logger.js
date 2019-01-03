function log(message) {
  console.log("[geoblaze-cli]", message);
}

function logResult(message) {
  log('result:' + JSON.stringify(message));
}

function getPointMessage(geovector) {
  /*
  if (Array.isArray(geovector) && geovector.length === 2) {
    const [ lon, lat ] = geovector;
    return `${lon}${(lon >= 0 ? 'E' : 'W')}, ${lat}${(lat >= 0 ? 'N' : 'S')}`;
  }
  */
}

function logAggregateResult(type, result) {
  if (Array.isArray(result)) {
    if (result.length === 1) {
      log(`${type} of Pixel Values is ${result.toLocaleString()}`);
    } else {
      log(`${type} of Pixel Values for each Band are ${result}`);
    }
  } else {
    log(`Unable to calculate ${type}`);
  };
}

module.exports = {
  getPointMessage, log, logAggregateResult, logResult
};