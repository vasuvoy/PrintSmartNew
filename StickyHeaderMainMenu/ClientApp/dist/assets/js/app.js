var app = angular.module('plunker', ['ui.bootstrap', 'ngImgCrop']);

app.controller('MainCtrl', function($scope, $uibModal, $log) {
  $scope.name = 'World';
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function(size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function() {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function() {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
})
app.controller('ModalInstanceCtrl', function($scope,$timeout, $uibModalInstance, items) {

  $scope.myCroppedImage = '';
  $scope.myImage = '';

  $scope.rectangleWidth = 100;
  $scope.rectangleHeight = 100;

  $scope.cropper = {
    cropWidth: $scope.rectangleWidth,
    cropHeight: $scope.rectangleHeight
  };

  var handleFileSelect = function(evt) {
    var file = evt.currentTarget.files[0];
    var reader = new FileReader();
    reader.onload = function(evt) {
      $scope.$apply(function($scope) {
        $scope.myImage = evt.target.result;
      });
    };
    reader.readAsDataURL(file);
  };
  $timeout(function() { angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect); },1000, false);

  $scope.ok = function() {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
