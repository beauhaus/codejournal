angular.module("codeJournal")
  .controller('gridCtrl', function($scope) {
    $scope.state = "grid"
  })


//Add view directions:
/*
1. copy grid, name grid html & ctrl: replace 'grid' in htm classes and ctrl with new name

2. inject in index.html (replacing 'grid' with new name)
              <script src="./states/svg/gridCtrl.js"></script>

3. copy grid in scss file with new name.

4. rename contents of .scss file with new name.

5. past this code (with new name) into master.scss
              @import 'scss/grid/grid';

6. Go to navDirective and paste this:
            <!-- <li class="navlink-container"><a ui-sref="grid">grid</a></li> -->
7. Register the state in the app.js file


*/
