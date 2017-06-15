angular.module("MyFirstApp", [])

.controller("FirstController",["$scope",function(m) { //Asi se trabaja por dependency injection
  m.nombre = "Jhonny";
  m.nuevoComentario = {};
  m.comentarios = [
    {
      comentario : "Excelente",
      username: "Jhonny"
    },
    {
      comentario : "MAlisimo",
      username: "Rafael"
    }
  ];
  m.agregarComentario = function () {
    m.comentarios.push(m.nuevoComentario);
    m.nuevoComentario = {};
  }
}]);
