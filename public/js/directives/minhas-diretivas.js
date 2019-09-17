angular.module("minhasDiretivas",[]).directive("meuPainel",function(){
    var ddo = {};
    
    ddo.restrict = "AE";
    ddo.scope = {
        titulo: "@"
    }

    ddo.templateUrl = "js/directives/meu-painel.html";

    ddo.transclude = true;
    
    
    return ddo;
})
.directive("minhaFoto",function(){
    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
        url: "@",
        titulo: "@"
    }

    ddo.templateUrl = "js/directives/minha-foto.html";
    ddo.transclude = true;

    return ddo;
})
.directive("meuBotaoPerigo", function(){
    var ddo = {}
    ddo.restrict = "E";
    ddo.scope = {
        nome: "@",
        acao: "&"
    }
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    return ddo;
})
.directive("meuFocus", function(){
    var ddo = {};
    ddo.restrict = "A";
    ddo.scope = {
        focado : "="
    }

    ddo.link = function(scope, element){
        scope.$watch("focado", function(){
            alert("Mudei");
        })
    }

    return ddo;
});