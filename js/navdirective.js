angular.module('codeJournal')
.directive('navdirective', function() {
  return {
    restrict: 'AE',
    templateUrl: './directives/navdirective.html',
    link: function(scope, element, attrs) {
      element.children().find('li').hover(
    function(){
      console.log('addClass1');
      $('a.navLink').stop().addClass('toIvr', 5000, 'easeIn', console.log('yes'));},
    function(){
      console.log('addClass2');
      $('a.navLink').stop().addClass('toTrans');}
      );
        // element.on('mouseover', function() {
        //   element.children().find('li a').addClass('ivr');
        // })
      }
    }
})

// element.on('mouseleave', function() {
//   element.children().find('li').css('background', 'transparent');
// })
