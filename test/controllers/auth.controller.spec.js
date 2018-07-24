var assert = require('assert');
var authController = require('../../controllers/authController');

describe('AuthController', function() {
    describe('isAuthorized', function() {
        it('Should return false if not authorized', function() {
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
        });
        it('Should return true if not authorized', function() {
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
        });
    });
});