angular.module('codeJournal')
.directive('navdirective', function() {
  return {
    restrict: 'AE',
    templateUrl: './directive_templates/navdirective.html',
    // state: $scope.state;
    link: function(scope, element, attrs){
      // console.log("$scope.state is: ", $scope.state);
      console.log("Hi from link!");
    }
  }
});





    // element.on('mouseover', function() {
    //   element.children().find('li a').addClass('ivr');
    // })
  // }
// }

// element.on('mouseleave', function() {
//   element.children().find('li').css('background', 'transparent');
// })

// function(){
//   console.log('addClass1');
//   $('a.navLink').stop().addClass('toIvr', 5000, 'easeIn', console.log('yes'));},
// function(){
//   console.log('addClass2');
//   $('a.navLink').stop().addClass('toTrans');}
