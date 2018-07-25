var assert = require('assert');

describe('Basic Mocha Test', function() {
    it('should throw some errors', function() {
        var obj = {name: 'Jon', gender: 'male'};
        var objB = {name: 'Jon', gender: 'male'};

        obj.should.have.property('name').equal('Jon');
        obj.should.deep.equal(objB);

    });
});