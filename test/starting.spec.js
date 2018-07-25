var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test', function() {
    it('should throw some errors', function() {
        var obj = {name: 'Jon', gender: 'male'};
        var objB = {name: 'Jon', gender: 'male'};

        obj.should.have.property('name').equal('Jon');
        obj.should.deep.equal(objB);

    });
    it('should allow testing nulls', function() {
        var iAmNull = null;
        // Cannot use iAmNull.should.not.exist 
        // as it is not an object therefore, Object.prototype cannot be used
        // have to pass the 'object' as an argument to the function
        // should() needs to be required to be accessed
        should.not.exist(iAmNull);
    });
});