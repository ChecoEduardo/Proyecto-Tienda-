app.controller('aboutCtrl',['$scope', function($scope){
    $scope.enviar=false;
    $scope.valido=false;
    $scope.mensaje="";


$scope.ingresar=function (datos){
if (datos===undefined){
  $scope.valido=true;
  $scope.mensaje="Checa que todos los campos este llenos"
//  console.log('no hay data');
  }
else{
  //console.log('hay data');
    $scope.valido=false;
    var nombre, apellidos, correo, contra, contra2, expresion;
    nombre=datos.nombre;
    apellidos=datos.apellido;
    correo=datos.email;
    contra=datos.contrasena;
    contra2=datos.recontrasena;
    expresion= /\w+@\w+\.+[a-z]/;
    if (nombre===undefined || apellidos===undefined || correo===undefined || contra===undefined || contra2===undefined){
      $scope.valido=true;
      $scope.mensaje="Checa que todos los campos este llenos"
    }else if (nombre.length>20) {
      $scope.valido=true;
      $scope.mensaje="El nombre es muy largo"
    }else if (!expresion.test(correo)) {
      $scope.valido=true;
      $scope.mensaje="No es un correo valido"
    }
    else if(contra!=contra2){
      $scope.valido=true;
      $scope.mensaje="Las contraseñas no son iguales"
    }

  }





}

}]);
