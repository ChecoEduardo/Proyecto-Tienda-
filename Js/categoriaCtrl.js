app.controller('categCtrl',['$scope' , '$routeParams','Lista' ,function($scope,$routeParams,Lista ){
    $scope.ListaItems=Lista;
    $scope.search=$routeParams.Categoria
    console.log(  $scope.ListaItems);


}]);
