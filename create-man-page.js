const vfile = require('to-vfile')
const unified = require('unified')
const markdown = require('remark-parse')
const man = require('remark-man')

unified()
  .use(markdown)
  .use(man, { name: 'GeoBlaze CLI' })
  .process(vfile.readSync('README.md'), function(err, file) {
    if (err) throw err
    console.log(file);
    file.basename = 'geoblaze.1';
    file.extname = '.1'
    vfile.writeSync(file)
  })