angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('creative', creativeDirective);

var shown = true;
var rand = Math.floor(Math.random() * 5);
var num = 0;
var imgs = ["img/c1.png", "img/c2.png", "img/c3.png", "img/c4.png", "img/c5.png"];
var first = true;

function mainCtrl($scope) {
  $scope.palette = [];
  $scope.addNew = function(data) {
    $scope.palette.push({
      something: data.name,
    });
    data.name = '';
  };

  $scope.clearBoard = function() {
    context.clearRect(0, 0, document.querySelector('canvas').width, document.querySelector('canvas').height);
    console.log("clear function");
  };

  $scope.challenge = function() {
    if (first) {
      document.getElementById("hint").setAttribute("class", "typewriter");
      document.getElementById("hint").style.opacity = 1;
      setTimeout(function() {
        document.getElementById("hint").style.opacity = 0;
      }, 3000);
      first = false;
    }

    document.getElementById("pic").src = imgs[(rand + num) % 5];
    console.log(document.getElementById("pic").src);
    num++;
  };

  $scope.moveBoard = function() {
    if (shown) {
      document.getElementById("board").style.transform = "translateX(-15vw)";
      document.getElementById("board").style.opacity = 0;
      shown = false;
    }
    else {
      document.getElementById("board").style.transform = "translateX(0vw)";
      document.getElementById("board").style.opacity = 1;
      shown = true;
    }

    //console.log("move")
  };



}

function creativeDirective() {
  return {
    scope: {
      data: '='
    },
    restrict: 'E',

    replace: 'true',
    template:
      (
        '{{data.something}}'
      ),

  };

}
