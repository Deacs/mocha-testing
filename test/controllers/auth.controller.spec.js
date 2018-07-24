var assert = require('assert');
var authController = require('../../controllers/authController');

describe('AuthController', function() {
    describe('isAuthorized', function() {
        // Mocha suggests NOT using arrow function due to binding of this
        it('Should return false if not authorized', () => {
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
        });
        it('Should return true if not authorized', () => {
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        });
    });
    describe('isAuthorizedAsync', function() {
        // Not using arrow functions as it would bind this to the lexical
        // rather than the callpath which woould preventt us from 
        // overriding the timeout limit (2000)
        it('Should return false if not authorized', function(done) {
            this.timeout(2500);
            authController.isAuthorizedAsync(['user'], 'admin', 
            function(isAuth) {
                assert.equal(false, isAuth);
                done();
            });
        });
    });
});