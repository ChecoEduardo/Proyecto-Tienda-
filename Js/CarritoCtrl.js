app.controller('carritoCtrl',['$scope', function($scope){
  $scope.carritoLS;
  $scope.itemsSel={};
  $scope.total=0;
  var i;
  var j;
  var control=0;

/*-------------------------------------------*/
    $scope.MandarCarrito= function (item){
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
        //console.log(item.Precio);
        //solo guardamos string, necesitamos convertir JSON en stringo
        localStorage.setItem('Carrito', JSON.stringify(items) );
      }
  }
  //obtener el contenido de storage
  function getCoursesFromStorage() {
       let items;
       if(localStorage.getItem('Carrito') === null) {
            items = [];
       } else {
            items = JSON.parse(localStorage.getItem('Carrito') );
       }
       return items;
  }
     $scope.carritoLS = getCoursesFromStorage();

        $scope.EliminarCarrito=function(NumPro,producto){
            $scope.carritoLS = getCoursesFromStorage();
          //   console.log( NumPro);
             $scope.carritoLS.splice(NumPro,1)
             $scope.total=$scope.total-producto.Precio;
            localStorage.setItem('Carrito', JSON.stringify($scope.carritoLS ));
     }

    $scope.Total= function (){
         var totalint=0;
          $scope.carritoLS = getCoursesFromStorage();
          for(j=0; j<$scope.carritoLS.length; j++){
          //  console.log($scope.carritoLS[j].Precio);
              totalint+=$scope.carritoLS[j].Precio;
          }
            return  totalint;
    }

    $scope.total =$scope.Total();
    console.log($scope.total);

     $scope.AbrirModal = function (items){
          angular.copy(items,$scope.itemsSel);
          $("#modal_item").modal();
      }



}]);
