app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'Pages/Inicio.html',
        controller: 'inicioCtrl'
    })
    .when('/carrito',{
          templateUrl: 'Pages/Carrito.html',
        controller: 'carritoCtrl'
    })
    .when('/Search/:Buscar',{
          templateUrl: 'Pages/Busqueda.html',
          controller: 'busqueCtrl'
    })
    .when('/inicio',{
          templateUrl: 'Pages/Inicio.html',
          controller: 'inicioCtrl'
    })
    .when('/favoritos',{
        templateUrl: 'Pages/Wish.html',
        controller: 'wishCtrl'
    })
    .when('/aboutus',{
        templateUrl: 'Pages/About.html',
        controller: 'aboutCtrl'
    })
    .when('/catgori/:Categoria',{
        templateUrl: 'Pages/Categorias.html',
        controller: 'categCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

})
