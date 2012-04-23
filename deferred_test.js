// Generated by CoffeeScript 1.3.1
(function() {
  var assert, deferred;

  deferred = require('./deferred');

  assert = require('assert');

  describe('deferred', function() {
    it('should create and return a deferred object', function() {
      var def;
      def = new deferred.Deferred();
      return assert.equal(def.state(), "pending");
    });
    it('should maintain a resolved state', function() {
      var def;
      def = new deferred.Deferred();
      assert.equal(def.state(), "pending");
      def.resolve();
      assert.equal(def.state(), "resolved");
      def.resolve();
      assert.equal(def.state(), "resolved");
      def.reject();
      return assert.equal(def.state(), "resolved");
    });
    return it('should maintain a rejected state', function() {
      var def;
      def = new deferred.Deferred();
      assert.equal(def.state(), "pending");
      def.reject();
      assert.equal(def.state(), "rejected");
      def.reject();
      assert.equal(def.state(), "rejected");
      def.resolve();
      return assert.equal(def.state(), "rejected");
    });
  });

}).call(this);
