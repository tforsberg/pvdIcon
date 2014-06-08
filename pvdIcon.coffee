'use strict'

angular

  .module('pvdDirectives')

  .directive('pvdIcon', [ ->

    restrict: 'A'

    link: (scope, element, attrs) ->
      element
        .addClass("glyphicon-#{attrs.pvdIcon}")
  ])
