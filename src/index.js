#! /usr/bin/env node

const calcMean = require('./mean.js');
const calcMedian = require('./median.js');
const calcMin = require('./min.js');
const calcMax = require('./max.js');
const calcMode = require('./mode.js');
const calcSum = require('./sum.js');
const identify = require('./identify.js');
const { log } = require('./logger.js');

async function run() {

  //console.log("process.argv:", process.argv);

  const [ nodecmd, geoblazecmd,  geoBlazeFunctionName, ...rest] = process.argv;

  if (!nodecmd.endsWith('node')) {
    throw "There's an error.  The first process argument does not end with node.";
  }

  if (!(geoblazecmd.endsWith('geoblaze') || geoblazecmd.endsWith('geoblaze-cli/src/index.js'))) {
    throw "There's an error.  The second process argument does not end with geoblaze.";
  }

  const normalizedFunctionName = geoBlazeFunctionName.toLowerCase();

  switch (normalizedFunctionName) {
    case "id":
      await identify(...rest);
      break;
    case "identify":
      await identify(...rest);
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
    case "sum":
      await calcSum(...rest);
      break;
    default:
      console.log("No Command appears to have been Included");
  }
}

run();