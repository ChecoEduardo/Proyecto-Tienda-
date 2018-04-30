app.controller('wishCtrl',['$scope','Lista', function($scope,Lista){
    $scope.ListadoItem=Lista;
  $scope. ArregloFavoritos=[];
  $scope.Nofavo=true;
  $scope.Favoritos=[];
  $scope.coursesLS;
  $scope.itemsSel={};
  var i;
  var control=0;

/*-------------------------------------------*/
    $scope.MandarFavoritos= function (item){
     saveIntoStorage(item);
}
  function saveIntoStorage(item) {//item es un objeto
       let items = getCoursesFromStorage();
       control=0;
       for(i=0; i<items.length; i++){
         if(items[i].Sku===item.Sku){
           console.log('hay uno igual');
           control++;
         }
       }
       //agregar el item al arreglo
      if(control==0){
        items.push(item);
      }

       //solo guardamos string, necesitamos convertir JSON en stringo
       localStorage.setItem('Favoritos', JSON.stringify(items) );
  }
  //obtener el contenido de storage
  function getCoursesFromStorage() {
       let items;
       if(localStorage.getItem('Favoritos') === null) {
            items = [];
       } else {
            items = JSON.parse(localStorage.getItem('Favoritos') );
       }
       return items;
  }
     $scope.coursesLS = getCoursesFromStorage();
        $scope.EliminarFavorito=function(NumPro){
            $scope.coursesLS = getCoursesFromStorage();
             console.log(  $scope.coursesLS.length);
             $scope.coursesLS.splice(NumPro,1)
            localStorage.setItem('Favoritos', JSON.stringify($scope.coursesLS ));
     }



     $scope.AbrirModal = function (items){
          angular.copy(items,$scope.itemsSel);
          $("#modal_item").modal();
      }

}]);
