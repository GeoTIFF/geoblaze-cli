'use strict';

const { expect } = require('chai');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

// longitude then latitude
const point = '30.059444,-1.943889';

const base = "http://127.0.0.1:8080/";

const relativePathToGeoTIFF = "test/data/RWA_MNH_ANC.tif";
const urlToGeoTIFF = `${base}RWA_MNH_ANC.tif`;

const relativePathToGeoJSON = "test/data/kigali.geojson"
const urlToGeoJSON = `${base}kigali.geojson`;

const urlToImageryTiff = `${base}color_infrared_dir_st_louis.tif`;

const DEBUG = process.env.GEOBLAZE_CLI_DEBUG;

const timeout = 2e5;


describe('Identify', function() {
  this.timeout(timeout);
  it("Should identify a pixel value in a local GeoTIFF", async () => {
    const statement = `geoblaze identify ${relativePathToGeoTIFF} '${point}'`;
    console.log(statement);
    const { stdout } = await exec(statement);
    try {
      expect(stdout).contains("Pixel value is 0.40443697571754456");
    } catch (error) {
      console.log(stdout);
      throw error;
    }
  });
  it("Should identify a pixel value in a remote GeoTIFF", async () => {
    const statement = `geoblaze identify ${urlToGeoTIFF} '${point}'`;
    console.log(statement);
    const { stdout } = await exec(statement);
    try {
      expect(stdout).contains("Pixel value is 0.40443697571754456");
    } catch (error) {
      console.log(stdout);
      throw error;
    }
  });
});

describe('Max', function() {
  this.timeout(timeout);
  it("Should calculate maximum of a GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze max ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Highest Pixel Value (Max) is 0.405");
  });

  it("Should calculate maximum of a GeoTIFF within a local GeoJSON", async () => {
    const { stdout } = await exec(`geoblaze max ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Highest Pixel Value (Max) is 0.405");
  });
});

describe('Mean Average', function() {
  this.timeout(timeout);
  it("Should calculate mean average of a GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze mean ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Mean Pixel Value is 0.39482169554020585");
  });

  it("Should calculate mean average of a GeoTIFF within a local GeoJSON", async () => {
    const { stdout } = await exec(`geoblaze mean ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Mean Pixel Value is 0.4002057630193998");
  });

  it("Should calculate mean average of a remote GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze mean ${urlToGeoTIFF}`);
    expect(stdout).contains("Mean Pixel Value is 0.39482169554020585");
  });

  it("Should calculate mean average of a remote GeoTIFF within a remote GeoJSON", async () => {
    const { stdout } = await exec(`geoblaze mean ${urlToGeoTIFF} ${urlToGeoJSON}`);
    expect(stdout).contains("Mean Pixel Value is 0.4002057630193998");
  });

});

describe('Median Average', function() {
  this.timeout(timeout);
  it("Should calculate median average of a GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze median ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Median Pixel Value is 0");
  });

  it("Should calculate median average of a GeoTIFF within a local GeoJSON", async () => {
    const { stdout } = await exec(`geoblaze median ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Median Pixel Value is 0.4005555808544159");
  });
});

describe('Min', function() {
  this.timeout(timeout);
  it("Should calculate minimum of a GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze min ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Lowest Pixel Value (Min) is 0");
  });

  it("Should calculate minimum of a GeoTIFF within a local GeoJSON", async () => {
    const { stdout } = await exec(`geoblaze min ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Lowest Pixel Value (Min) is 0");
  });
});

describe('Mode Average', function() {
  this.timeout(timeout);
  it("Should calculate most common pixel value(s) of a GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze mode ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Most Common Pixel Value (Mode) is 0");
  });

  it("Should calculate mode average of a GeoTIFF within a local GeoJSON", async () => {
    const { stdout } = await exec(`geoblaze mode ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Most Common Pixel Value (Mode) is 0");
  });
});


describe('Sum', function() {
  this.timeout(timeout);
  it("Should sum a raster without a geometry", async () => {
    const { stdout } = await exec(`geoblaze sum ${relativePathToGeoTIFF}`);
    expect(stdout).contains("Sum of Pixel Values is 104,848.455");
  });

  it("Should sum a raster with a geometry", async () => {
    const { stdout } = await exec(`geoblaze sum ${relativePathToGeoTIFF} ${relativePathToGeoJSON}`);
    expect(stdout).contains("Sum of Pixel Values is 3,162.826");
  });
});

/*
describe('Band Arithmetic', function() {
  this.timeout(timeout);
  it("Should calculate NDVI of a GeoTIFF", async () => {
    const statement = `geoblaze math ${urlToImageryTiff} '(c - b)/(c + b)' output.tiff`;
    console.log("statement:", statement);
    const { stdout } = await exec(statement);
    console.log("stdout:", stdout);
  });
});
*/

/*
describe('Raster Calculator', function() {
  this.timeout(timeout);
  it("Should binarize a GeoTIFF", async () => {
    const { stdout } = await exec(`geoblaze calc ${relativePathToGeoTIFF} 'return A > 100 ? 1 : 0'`);
    expect(stdout).contains("Most Common Pixel Value (Mode) is 0");
  });
});
*/
