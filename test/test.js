var assert = require('chai').assert;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present WORK DAMN YOU\n', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('Array2', function() {
  describe('#indexOf()', function() {
    it('should return -2 when the value is not present WORK DAMN YOU\n', function() {
      assert.equal(1, [1,2,3].indexOf(2));
      assert.equal(2, [1,2,3].indexOf(3));
    });
  });
});

describe('Array3', function() {
  describe('#indexOf()', function() {
    it('should return -3 when the value is not present WORK DAMN YOU\n', function() {
      assert.equal(0, [1,2,3].indexOf(1));
      assert.equal(1, [1,2,3].indexOf(2));
    });
  });
});

describe('Array4', function() {
  describe('#indexOf()', function() {
    it('should return -4 when the value is not present WORK DAMN YOU\n', function() {
      assert.equal(-1, [1,2,3].indexOf(50));
      assert.equal(-1, [1,2,3].indexOf(-2));
    });
  });
});

describe('Array5', function() {
  describe('#indexOf()', function() {
    it('should return -5 when the value is not present WORK DAMN YOU\n', function() {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});