#! /usr/bin/env node

const bandArithmetic = require('./bandArithmetic.js');
const calcMean = require('./mean.js');
const calcMedian = require('./median.js');
const calcMin = require('./min.js');
const calcMax = require('./max.js');
const calcMode = require('./mode.js');
const calcSum = require('./sum.js');
const identify = require('./identify.js');
const logVersion = require('./version.js');

const { log } = require('./logger.js');

async function run() {

  console.log("process.argv:", process.argv);

  const [ nodecmd, geoblazecmd,  geoBlazeFunctionName, ...rest] = process.argv;

  if (!nodecmd.endsWith('node')) {
    throw "There's an error.  The first process argument does not end with node.";
  }

  if (!(geoblazecmd.endsWith('geoblaze') || geoblazecmd.endsWith('geoblaze-cli/src/index.js'))) {
    throw "There's an error.  The second process argument does not end with geoblaze.";
  }

  const normalizedFunctionName = geoBlazeFunctionName.toLowerCase();

  switch (normalizedFunctionName) {
    case "bandArithmetic":
      console.log("unfortunately we haven't implemented band arithmetic yet");
      //await bandArithmetic(...rest);
      break;
    case "calc":
      console.log("unfortunately we haven't implemented raster calculations yet");
    case "help":
      console.log("unfortunately we haven't implemented help yet");
      break;
    case "histogram":
      console.log("unfortunately we haven't implemented histogram yet");
      break;
    case "id":
      await identify(...rest);
      break;
    case "identify":
      await identify(...rest);
      break;
    case "math":
      await bandArithmetic(...rest);
      break;
    case "max":
      await calcMax(...rest);
      break;
    case "maximum":
      await calcMax(...rest);
      break;
    case "mean":
      await calcMean(...rest);
      break;
    case "median":
      await calcMedian(...rest);
      break;
    case "min":
      await calcMin(...rest);
      break;
    case "minimum":
      await calcMin(...rest);
      break;
    case "mode":
      await calcMode(...rest);
      break;
    case "rasterCalculator":
      console.log("unfortunately we haven't implemented rasterCalculator yet");
      break;
    case "sum":
      await calcSum(...rest);
      break;
    case "version":
      logVersion();
      break;
    default:
      console.log("No Command appears to have been Included");
  }
}

run();
