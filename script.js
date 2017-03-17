var app = angular.module("mainApp",[]);

app.controller("infoSectionCtrl",function($scope){

$scope.sectionInfo = [

  {
      img: "img/cat.jpg",
      headline: "cat",
      description: "cute"
  },
  {
      img: "img/cat.jpg",
      headline: "cat",
      description: "cute"
  },
  {
      img: "img/cat.jpg",
      headline: "cat",
      description: "cute"
    }];

  });


  app.directive("postSection", function() {

  return {
    restrict:"E",
    templateUrl:"aww.html",
    replace: false
  };

});
