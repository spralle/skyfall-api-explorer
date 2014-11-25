
var ApiExplorer = function() {

}
ApiExplorer.prototype.getHandler = function() {
  var self = this;
  return function(req, res, next) {
    self.handle(req, res, next);
  }
}

ApiExplorer.prototype.handle = function(req, res, next) {
  res.send('handled');
}
module.exports = ApiExplorer;
