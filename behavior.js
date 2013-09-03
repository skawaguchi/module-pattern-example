// Behaviors Module

var MyModule = (function (module) {

  // Bring the _private variable back into this context
  var _private = module._private = module._private || {};

  module.doAnimation = function (self, x) {

  _private.els.boxEl.animate({
      left: x
    });
  };

  return module;
}(MyModule || {}));