const assert = require('assert');
const index = require('../../lib/index');

describe('lib/index.test.js', function () {
  it('works', () => {
    assert(index() === 'It works!!');
  });
});
