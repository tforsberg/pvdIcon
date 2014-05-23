'use strict'

angular

  .module('pvdDirectives')

  .directive('pvdIcon', [ ->
    restrict: 'A'
    link: (scope, element, attrs) ->
      type = attrs.pvdIcon
      element.addClass("glyphicon glyphicon-#{type}")
  ])
