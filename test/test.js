var assert = require('chai').assert;

var mocha = new Mocha({
    reporter: 'mocha-junit-reporter',
    reporterOptions: {
        mochaFile: 'makethiswork.xml'
    }
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Array2', function() {
  describe('#indexOf()2', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Array3', function() {
  describe('#indexOf()3', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Array4', function() {
  describe('#indexOf()4', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(1, [1,2,3].indexOf(5));
      assert.equal(1, [1,2,3].indexOf(0));
    });
  });
});

describe('Array5', function() {
  describe('#indexOf()5', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});