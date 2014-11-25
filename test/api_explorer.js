var Explorer = require('..');
var request = require('supertest');
var express = require('express');

describe('api_explorer', function() {
  describe('#...', function(done) {
    it('should return 200 if version explorer exist', function() {
      var serviceRegistry = null;
      var explorer = new Explorer(serviceRegistry);
      var app = express();
      app.use('/explorer/', explorer.getHandler());
      request(app)
        .get('/explorer/')
        .expect(200, done);
    });
  });
});
