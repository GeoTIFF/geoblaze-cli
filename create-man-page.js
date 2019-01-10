const vfile = require('to-vfile')
const unified = require('unified')
const markdown = require('remark-parse')
const man = require('remark-man')

unified()
  .use(markdown)
  .use(man, {
    name: 'geoblaze',
    description: 'a command line interface for blazing fast raster analysis',
    manual: 'GeoBlaze CLI',
    section: 1
  })
  .process(vfile.readSync('README.md'), function(err, file) {
    if (err) throw err
    console.log(file);
    file.basename = 'geoblaze.1';
    file.extname = '.1'
    vfile.writeSync(file)
  })