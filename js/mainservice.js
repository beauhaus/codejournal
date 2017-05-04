angular.module("codeJournal")
  .service("mainServe", function() {
    var x = 10;
    this.num = function() {
      return x;
    }
  })
