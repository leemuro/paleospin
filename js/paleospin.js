var PaleoSpin = {}

function SpinCtrl($scope) {
  $scope.proteins = function() {
    return PaleoSpin.proteins;
  }

  $scope.veggies = function() {
    return PaleoSpin.veggies;
  }

  $scope.carbs = function() {
    return PaleoSpin.carbs;
  }

  $scope.fats = function() {
    return PaleoSpin.fats;
  }

  $scope.spices = function() {
    return PaleoSpin.spices;
  }
}
