'use strict';

const { expect } = require('chai');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

describe('Identify', function() {
  it("Should identify a pixel value", async () => {
    const { stdout, stderr } = await exec("geoblaze identify test/data/spam2005v2r0_production_wheat_rainfed.tiff '50,30'");
    expect(stdout).to.equal(10);
  });
});

/*
describe('Sum', function() {
  it("Should sum a raster without a geometry", async () => {
    const { stdout, stderr } = await exec("geoblaze sum test/data/spam2005v2r0_production_wheat_rainfed.tiff");
    expect(stdout).to.equal(10);
  });
});
*/