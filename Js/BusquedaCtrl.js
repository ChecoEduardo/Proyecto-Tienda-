app.controller('busqueCtrl',['$scope','$routeParams','Lista' ,function($scope,$routeParams,Lista){
  $scope.ListaItems=Lista;
  $scope.itemsSel={};

  $scope.search=$routeParams.Buscar;
  $scope.AbrirModal = function (items){
       angular.copy(items,$scope.itemsSel);
       $("#modal_item").modal();
   }
}]);
