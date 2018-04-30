app.controller('categCtrl',['$scope' , '$routeParams','Lista' ,function($scope,$routeParams,Lista ){
    $scope.ListaItems=Lista;
    $scope.itemsSel={};

    $scope.search=$routeParams.Categoria
    $scope.AbrirModal = function (items){
         angular.copy(items,$scope.itemsSel);
         $("#modal_item").modal();
     }


}]);
