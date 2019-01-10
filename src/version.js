const { readFileSync } = require('fs');
const { dirname, join } = require('path');


module.exports = () => {
  const srcDir = __dirname;
  const rootDir = dirname(srcDir);
  const pkgPath = join(rootDir, 'package.json');
  const fileText = readFileSync(pkgPath, 'utf-8');
  const parsed = JSON.parse(fileText);
  const version = parsed.version;
  console.log(version);
};