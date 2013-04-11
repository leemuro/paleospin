var PaleoSpin = {}

PaleoSpin.initFoods = function() {
  PaleoSpin.allFoods = _.union(
    PaleoSpin.proteins,
    PaleoSpin.veggies,
    PaleoSpin.fats,
    PaleoSpin.spices
  );
  _.each(PaleoSpin.allFoods, function(food) {
    food.excludedCount = 0;
  });
}

function SpinCtrl($scope) {
  $scope.proteins = function() {
    return _.where(PaleoSpin.proteins, {enabled: true});
  }

  $scope.veggies = function() {
    return _.where(PaleoSpin.veggies, {enabled: true});
  }

  $scope.fats = function() {
    return _.where(PaleoSpin.fats, {enabled: true});
  }

  $scope.spices = function() {
    return _.where(PaleoSpin.spices, {enabled: true});
  }
}

function SettingsCtrl($scope) {
  $scope.proteins = function() { return PaleoSpin.proteins; }
  $scope.veggies = function() { return PaleoSpin.veggies; }
  $scope.fats = function() { return PaleoSpin.fats; }
  $scope.spices = function() { return PaleoSpin.spices; }

  $scope.starchyCarbsExcluded = false;
  $scope.excludeStarchyCarbs = function() {
    $scope.starchyCarbsExcluded = !$scope.starchyCarbsExcluded;
    var foods = _.where(PaleoSpin.allFoods, {starch: true})
    _.each(foods, function(f) { setFoodExclusion(f, $scope.starchyCarbsExcluded); });
  }

  $scope.nightshadesExcluded = false;
  $scope.excludeNightshades = function() {
    $scope.nightshadesExcluded = !$scope.nightshadesExcluded;
    var foods = _.where(PaleoSpin.allFoods, {nightshade: true})
    _.each(foods, function(f) { setFoodExclusion(f, $scope.nightshadesExcluded); });
  }

  $scope.fodmapsExcluded = false;
  $scope.excludeFodmaps = function() {
    $scope.fodmapsExcluded = !$scope.fodmapsExcluded;
    var foods = _.where(PaleoSpin.allFoods, {fodmap: true})
    _.each(foods, function(f) { setFoodExclusion(f, $scope.fodmapsExcluded); });
  }

  $scope.goitrogensExcluded = false;
  $scope.excludeGoitrogens = function() {
    $scope.goitrogensExcluded = !$scope.goitrogensExcluded;
    var foods = _.where(PaleoSpin.allFoods, {goitrogen: true})
    _.each(foods, function(f) { setFoodExclusion(f, $scope.goitrogensExcluded); });
  }

  $scope.seafoodExcluded = false;
  $scope.excludeSeafood = function() {
    $scope.seafoodExcluded = !$scope.seafoodExcluded;
    var foods = _.where(PaleoSpin.allFoods, {seafood: true})
    _.each(foods, function(f) { setFoodExclusion(f, $scope.seafoodExcluded); });
  }

  function setFoodExclusion(food, isExcluded) {
    food.excludedCount += isExcluded ? 1 : -1;
    food.enabled = food.excludedCount == 0;
  }
}

$(function() {
  PaleoSpin.initFoods();

  $('.spinner-list').slot({
    spinButton: '#spin-button',
    resets: '.spinner-reset'
  });
});
