angular.module("codeJournal")
  .controller('angularCtrl', function($scope) {
    $scope.state = "angular";
    $('a[ui-sref="angular"]').addClass('mustard');
  })
