const easyUnittest = require('..');
const path = require('path');
easyUnittest({
  entry: path.join(__dirname, '../fixtures/**/*.js'),
  output: path.join(__dirname, '../demo'),
  entryKey: 'fixtures',
  mode: 'all'
}, moduleMeta => {
  const suiteBlocks = {};
  for (const key in moduleMeta) {
    const item = moduleMeta[key];
    const specs = {
      success: ['const gan = \'gan\'']
    };
    item.branch.forEach(b => {
      const bKey = b.notes || b.code;
      specs[bKey] = ['const a = 123;'];
    });
    console.log(key)
    suiteBlocks[key] = {
      blocks: [],
      specs
    }
  }
  return {
    suiteBlocks
  };
})