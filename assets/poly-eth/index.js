(function (root, factory) {
  if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('b'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['b'], function (b) {
      return (root.returnExportsGlobal = factory(b));
    });
  } else {
    // Global Variables
    root.returnExportsGlobal = factory(root.b);
  }
}(this, function (b) {
  // Your actual module

  var checkClient = function(eth) {
    return 'ethereal';
  }

  return polyeth = function(eth){

    var mocketh = {
      eth: null,
      getKey: function(cb){ cb(null, 'MockKey213dsf3454as')}
    }

    var aleth = {
      eth: eth,
      getKey: function(cb){ cb(null, eth.getKey() )}
    }

    var ethereal = {
      eth: eth,
      getKey: function(cb){ eth.getKey(cb); }
    }

    if (!eth) return mocketh;
    
    console.log( 'Polyeth loaded. wrapping/polyfilling native eth object.');
    client = checkClient(eth);
    if ( client === 'ethereal' ) return ethereal;
    else return aleth;
  };
}));
