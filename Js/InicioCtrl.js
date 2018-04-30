app.controller('inicioCtrl',['$scope','Lista' ,function($scope,Lista ){
  $scope.ListadoItem=Lista;
  $scope.ArregloPopular=[];
    $scope.itemsSel={};

for(i=0; i<$scope.ListadoItem.length; i++){
      if($scope.ListadoItem[i].Popular==5){
        $scope.ArregloPopular.push($scope.ListadoItem[i])
      }}

$scope.AbrirModal = function (items){
      angular.copy(items,$scope.itemsSel);
      $("#modal_item").modal();
  }

}]);
