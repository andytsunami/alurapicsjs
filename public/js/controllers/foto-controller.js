angular.module("alurapic").controller("FotoController",function($scope,$http){
    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function(){

        if($scope.formulario.$valid){

            $http.post("/v1/fotos",$scope.foto).success(function(){
                $scope.foto = {};
                $scope.mensagem = "Adicionado com sucesso";
                $scope.formulario.$setPristine();
            })
            .error(function(erro){
                $scope.mensagem = "Não foi possivel cadastrar a foto.";
            })
        }
    }
});