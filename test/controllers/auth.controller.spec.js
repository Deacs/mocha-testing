var assert = require('assert');
var authController = require('../../controllers/authController');

describe('AuthController', function() {
    beforeEach(function settingUpRoles() {
        authController.setRoles(['user']);
    });
    describe('isAuthorized', function() {
        // Mocha suggests NOT using arrow function due to binding of this
        it('Should return false if not authorized', () => {
            assert.equal(false, authController.isAuthorized('admin'));
        });
        it('Should return true if not authorized', () => {
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorized('admin'));
        });
        it('Should not allow a get if not authorised');
        it('should allow get if authorized');
    });
    describe('isAuthorizedAsync', function() {
        // Not using arrow functions as it would bind this to the lexical
        // rather than the callpath which woould preventt us from 
        // overriding the timeout limit (2000)
        it('Should return false if not authorized', function(done) {
            authController.isAuthorizedAsync('admin', 
            function(isAuth) {
                assert.equal(false, isAuth);
                done();
            });
        });
    });
});