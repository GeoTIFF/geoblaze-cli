const { readFileSync } = require('fs');
const {get } = require('axios');
const { join } = require('path');
const geoblaze = require('geoblaze');
const parseGeoRaster = require('georaster');
const { log } = require('./logger');

async function loadGeoRaster(path) {
  try {
    if (path.startsWith('http')) {
      if (process.env.GEOBLAZE_CLI_DEBUG) log("georaster: " + path);
      return await geoblaze.load(path);
    } else {
      const cwd = process.cwd();
      let abspath;
      if (path.startsWith('/')) {
        abspath = path;
      } else {
        abspath = join(cwd, path);
      }
      const file = readFileSync(abspath);
      if (process.env.GEOBLAZE_CLI_DEBUG) log("georaster: " + abspath);
      const arrayBuffer = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
      const georaster = await parseGeoRaster(arrayBuffer, null, false);
      return georaster;
    }
  } catch (error) {
    console.error(error);
  }
}

async function loadGeoVector(geovector) {
  if (geovector) {
    if (typeof geovector === 'string') {
      if (geovector.startsWith('http')) {
        if (process.env.GEOBLAZE_CLI_DEBUG) log("geovector: " + geovector);
        return get(geovector).then(response => response.data);
      } else if (geovector.match(/^ ?\d+,\d+ ?$/)) {
        const result = geovector.trim().split(',').map(Number);
        if (process.env.GEOBLAZE_CLI_DEBUG) log("geovector: " + result);
        return result;
      } else {
        throw new Error("Failed to parse geovector");
      }
    }
  }
}

async function loadBoth(georasterInput, geovectorInput) {
  const georaster = georasterInput ? await loadGeoRaster(georasterInput) : undefined;
  const geovector = geovectorInput ? await loadGeoVector(geovectorInput) : undefined;
  return [georaster, geovector];
}

module.exports = {
  loadBoth,
  loadGeoRaster,
  loadGeoVector
}