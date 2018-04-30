var app = angular.module('TechStore',['ngRoute','TechStore.servicios']);

app.controller('mainCtrl', ['$scope', function($scope){
        $scope.menuSuperior = "Pages/Nav.html";
    }]);







/*Filtros*/
app.filter('Recorte',function(){
     return function(letras){
           if(letras.length >25){
             return letras.substr(0,25) + ".....";}
           else {
              return letras;
                 }}
});
app.filter('RecorteNom',function(){
     return function(nombre){

           if(nombre.length >20)
           {
             return nombre.substr(0,20) + "...";}
           else {
              return nombre;
                 }}
});


app.filter('DesChica',function(){
     return function(nombre){

           if(nombre.length >15)
           {
             return nombre.substr(0,15) + "...";}
           else {
              return nombre;
                 }}
});
