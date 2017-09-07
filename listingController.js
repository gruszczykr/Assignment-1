angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
   

    $scope.listings = Listings;
   
    $scope.name = "";
    $scope.code="";
     $scope.detailedInfo = undefined;

     /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
      display listing
     */
    $scope.addListings =function(){
      $scope.listings.push({  //pushes new listings to list
        code: $scope.code,
        name: $scope.name,
        address: $scope.address
      });
      $scope.code = ""; //resets the submission form.
      $scope.name = "";
      $scope.address = "";
    };
    $scope.showDetails = function(index){
     $scope.details = index;
    };
    $scope.deleteListing = function (index) {
      var loc = $scope.listings.indexOf(index);
      if(loc != -1){
      $scope.listings.splice(loc, 1);
        }
    };
}]);