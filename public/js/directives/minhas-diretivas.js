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
});