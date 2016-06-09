var expect = require('chai').expect
var deepEquals = require('../deep_equals')

describe('deepEquals', function(){
  it('returns false for two non matching objects', function(){
    expect(deepEquals({b: 'burrito', a: 'taco'},{b:'tostada', a: 'taco'})).to.equal(false)
  })
  it('returns true for two matching objects', function() {
    expect(deepEquals({b: 'burrito', a: 'taco'},{b:'burrito', a: 'taco'})).to.equal(true);
  })
  it('return true for two matching arrays', function() {
    expect(deepEquals([10, 'dog'], [10, 'dog'])).to.equal(true);
  })
  it('return false for two non-matching arrays', function() {
    expect(deepEquals([10, 'dog'], [10, 'cat'])).to.equal(false);
  })
})
