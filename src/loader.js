const { get } = require('axios');
const parseGeoraster = require('georaster');
const fetch = require('node-fetch');
const { join } = require('path');
const geoblaze = require('geoblaze');
const parseGeoRaster = require('georaster');
const { promisify } = require('util');
const { log } = require('./logger');
const { readFile } = require('fs');

const readFileAsync = promisify(readFile);

async function loadGeoRaster(path) {
  try {
    if (path.startsWith('http')) {
      return geoblaze.load(path);
    } else {
      const cwd = process.cwd();
      let abspath;
      if (path.startsWith('/')) {
        abspath = path;
      } else {
        abspath = join(cwd, path);
      }
      const file = await readFileAsync(abspath);
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
        const response = await get(geovector);
        return response.data;
      } else if (geovector.match(/^ ?-?\d+(.\d+)?,-?\d+(.\d+)? ?$/)) {
        const result = geovector.trim().split(',').map(Number);
        if (process.env.GEOBLAZE_CLI_DEBUG) log("geovector: " + result);
        return result;
      } else if (geovector.endsWith('.geojson')) {
        if (process.env.GEOBLAZE_CLI_DEBUG) log('geoblaze-cli: loading GeoJSON');
        const text = await readFileAsync(geovector, { encoding: 'utf-8' });
        if (process.env.GEOBLAZE_CLI_DEBUG) log('geoblaze-cli: loaded GeoJSON');
        const parsed = JSON.parse(text);
        if (process.env.GEOBLAZE_CLI_DEBUG) log('geoblaze-cli: parsed GeoJSON');
        return parsed;
      } else {
        if (process.env.GEOBLAZE_CLI_DEBUG) log("geovector: " + geovector);
        throw new Error("Failed to parse geovector");
      }
    }
  }
}

async function loadBoth(georasterInput, geovectorInput) {
  const georaster = georasterInput ? loadGeoRaster(georasterInput) : Promise.resolve(undefined);
  const geovector = geovectorInput ? loadGeoVector(geovectorInput) : Promise.resolve(undefined);
  return Promise.all([georaster, geovector]);
}

module.exports = {
  loadBoth,
  loadGeoRaster,
  loadGeoVector
}