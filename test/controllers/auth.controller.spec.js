var assert = require('assert');
var authController = require('../../controllers/authController');
var expect = require('chai').expect;
var should = require('chai').should();

describe('AuthController', function() {
    beforeEach(function settingUpRoles() {
        authController.setRoles(['user']);
    });
    describe('isAuthorized', function() {
        // Mocha suggests NOT using arrow function due to binding of this
        it('Should return false if not authorized', () => {
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.false;
        });
        it('Should return true if not authorized', () => {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
        });
        it('Should not allow a get if not authorised');
        it('should allow get if authorized');
    });
    describe('isAuthorizedAsync', function() {
        // Not using arrow functions as it would bind this to the lexical
        // rather than the callpath which would prevent us from 
        // overriding the timeout limit (2000)
        it('Should return false if not authorized', function(done) {
            authController.isAuthorizedAsync('admin', 
            function(isAuth) {
                isAuth.should.be.false;
                done();
            });
        });
    });
});