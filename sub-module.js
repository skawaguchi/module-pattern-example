// THis is actually the sub-module
var MyModule = (function (module) {
  var subModule = module.subModule = module.subModule || {},
    _private = module._private = module._private || {};

  subModule.init = function () {

    console.log('subModule init');

    console.log(_private);
  };

  subModule.method = function () {

  };

  return module;

}(MyModule || {}));