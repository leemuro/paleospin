var PaleoSpin = {}

function SpinCtrl($scope) {
  $scope.proteins = function() {
    return _.where(PaleoSpin.proteins, {enabled: true});
  }

  $scope.veggies = function() {
    return _.where(PaleoSpin.veggies, {enabled: true});
  }

  $scope.carbs = function() {
    return _.where(PaleoSpin.carbs, {enabled: true});
  }

  $scope.fats = function() {
    return _.where(PaleoSpin.fats, {enabled: true});
  }

  $scope.spices = function() {
    return _.where(PaleoSpin.spices, {enabled: true});
  }
}

function SettingsCtrl($scope) {
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

$(function() {
  $('.spinner-list').slot({
    spinButton: '#spin-button',
    resets: '.spinner-reset'
  });
});
