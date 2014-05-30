(function() {
  'use strict';
  angular.module('pvdDirectives').directive('pvdIcon', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          return element.addClass("glyphicon glyphicon-" + attrs.pvdIcon);
        }
      };
    }
  ]);

}).call(this);
