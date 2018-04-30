app.controller('inicioCtrl',['$scope','Lista' ,function($scope,Lista ){
  $scope.ListadoItem=Lista;
  $scope.ArregloPopular=[];
    $scope.itemsSel={};


    $scope.MenorMil=[];
    $scope.menor3mil=[];
    $scope.Menor5mil=[];
    $scope.Mayor5mil=[];



for(i=0; i<$scope.ListadoItem.length; i++){
      if($scope.ListadoItem[i].Popular==5){
        $scope.ArregloPopular.push($scope.ListadoItem[i])
      }}


for(i=0; i<$scope.ListadoItem.length; i++){
    if($scope.ListadoItem[i].Precio<1000){
      $scope.MenorMil.push($scope.ListadoItem[i])
    }
    if($scope.ListadoItem[i].Precio>1000 && $scope.ListadoItem[i].Precio<3000){
      $scope.menor3mil.push($scope.ListadoItem[i])
    }
    if($scope.ListadoItem[i].Precio>3000 && $scope.ListadoItem[i].Precio<5000){
      $scope.Menor5mil.push($scope.ListadoItem[i])
    }
    if($scope.ListadoItem[i].Precio>5000){
      $scope.Mayor5mil.push($scope.ListadoItem[i])
    }
}
console.log($scope.MenorMil.length*100/36);
console.log($scope.menor3mil.length*100/36);
console.log($scope.Menor5mil.length*100/36);
console.log($scope.Mayor5mil.length*100/36);







$scope.AbrirModal = function (items){
      angular.copy(items,$scope.itemsSel);
      $("#modal_item").modal();
  }



}]);
