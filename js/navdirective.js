angular.module('codeJournal')
.directive('navdirective', function() {
  return {
    restrict: 'AE',
    templateUrl: './directive_templates/navdirective.html',
    link: function(scope, element, attrs){
    }
  }
});
