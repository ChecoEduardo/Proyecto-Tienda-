app.controller('inicioCtrl',['$scope','Lista' ,function($scope,Lista ){
  $scope.ListadoItem=Lista;
  $scope.ArregloPopular=[];


for(i=0; i<$scope.ListadoItem.length; i++){
      if($scope.ListadoItem[i].Popular==5){
        $scope.ArregloPopular.push($scope.ListadoItem[i])
      }}

}]);
