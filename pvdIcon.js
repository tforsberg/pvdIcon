(function() {
  'use strict';
  angular.module('pvdDirectives').directive('pvdIcon', [
    function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var type;
          type = attrs.pvdIcon;
          return element.addClass("glyphicon glyphicon-" + type);
        }
      };
    }
  ]);

}).call(this);
