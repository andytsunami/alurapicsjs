angular.module("alurapic").controller("FotoController",function($scope,$http){
    $scope.foto = {};

    $scope.submeter = function(){

        if($scope.formulario.$valid){

            $http.post("/v1/fotos",$scope.foto).success(function(){
                console.log("Adicionado com sucesso")
            })
            .error(function(erro){
                 console.log("Não foi possivel cadastrar a foto.");
            })
        }
    }
});