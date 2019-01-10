'use strict';

const { expect } = require('chai');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const relativePathToGeoTIFF = "test/data/spam2005v2r0_production_wheat_rainfed.tiff"
const urlToGeoTIFF = "https://s3.amazonaws.com/geoblaze/spam2005v2r0_production_wheat_rainfed.tiff";

const relativePathToGeoJSON = "test/data/ukraine.geojson"
const urlToGeometry = "https://s3.amazonaws.com/geoblaze/ukraine.geojson";

const DEBUG = process.env.GEOBLAZE_CLI_DEBUG;

describe('Identify', function() {
  this.timeout(20000);
  it("Should identify a pixel value in a local file", async () => {
    const { stdout } = await exec(`geoblaze identify ${relativePathToGeoTIFF} '50,30'`);
    try {
      expect(stdout).contains("Pixel value is -9999");
    } catch (error) {
      console.log(stdout);
      throw error;
    }
  });

  it("Should identify a pixel value in a remote file", async () => {
    const { stdout } = await exec(`geoblaze identify ${urlToGeoTIFF} '50,30'`);
    try {
      expect(stdout).contains("Pixel value is -9999");
    } catch (error) {
      console.log(stdout);
      throw error;
    }
  });
});

describe('Sum', function() {
  this.timeout(20000);
  it("Should sum a raster without a geometry", async () => {
    const { stdout } = await exec(`geoblaze sum ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Sum of Pixel Values is 405,124,103.5");
  });

  it("Should sum a raster with a geometry", async () => {
    const { stdout } = await exec(`geoblaze sum ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Sum of Pixel Values is 16,619,492.7");
  });
});
