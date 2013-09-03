// From Ben Cherry: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

// Core Module

var MyModule = (function (module, $) {
  // Private state across files
  var _private = module._private = module._private || {},
    _seal = module._seal || function () {
      delete module._private;
      delete module._seal;
      delete module._unseal;
    },
    _unseal = module._unseal || function () {
      module._private = _private;
      module._seal = _seal;
      module._unseal = _unseal;
    };

  module.init = function () {
    // For block context, 'this' is 'module'

    console.log(_private);

    _private.els = {};

    console.log('initializing');

    _private.els.linkEl = $('#link');
    _private.els.boxEl = $('#box');

    _private.els.linkEl.on('click', {context: this}, this.linkClicked);

    this.subModule.init();
  };

  module.linkClicked = function (event) {
    // In an event callback, 'this' is the DOM element

    // We get the proper context by passing it to this method in the event.data attribute
    var self =  event.data.context,
      xPos = parseInt(Math.random() * 100) + 10;

    // Animate the box
    self.doAnimation(self, xPos);

  };

  // Loose augmentation
  module.someMethod = function (arg1) {
    console.log(art1);
  };

  return module;

}(MyModule || {}, jQuery));