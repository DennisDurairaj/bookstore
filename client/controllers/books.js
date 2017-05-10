var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    console.log("test");
    $scope.getBooks = function() {
        $http.get('/books').then(function(response){
            $scope.books = response.data;
        });
    }

    $scope.getBook = function() {
        var id = $routeParams.id;
        $http.get('/books/'+id).then(function(response){
            $scope.book = response.data;
        });
    }

    $scope.addBook = function() {
        $http.post('/books', $scope.book).then(function(){
            window.location.href='#!/books';
        });
    }
}]);