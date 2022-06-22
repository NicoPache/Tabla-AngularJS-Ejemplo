var app = angular.module('tablaModule',['ngTable']);

app.controller('TablaController', function($scope, $filter, ngTableParams) {
    $scope.dataPaginada= [];
  $scope.data = [{nombre: "Nico", edad:27, sexo:'M'},
  {nombre: "Martin", edad: 40,sexo:'M'},
  {nombre: "Fidev", edad: 30,sexo:'M'},
  {nombre: "Gonza", edad: 25,sexo:'M'},
  ]
 

  $scope.tableParams = new ngTableParams({
    page: 1, // muestra la primera pagina
    count: 3, // contador de elementos por pagina
    sorting: {
      nombre: 'asc'     
  }
    }, {
    counts:[3,4],
    total: $scope.data.length, // length of data
    getData: function (params) {
        $scope.data = params.sorting() ? $filter('orderBy')($scope.data, params.orderBy()) : $scope.data;
        $scope.dataPaginada = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
    return $scope.dataPaginada
    } 
    })
});