angular.module("meusServicos",["ngResource"])
.factory("recursoFoto", function($resource) {
    return $resource("/v1/fotos/:fotoId",null, {
        "update" : {
            method : "PUT"
        }
    });
})
.factory("cadastroDeFotos", function(recursoFoto,$q){
    var service = {};
    service.cadastrar = function(foto){
        return $q(function(resolve, reject){
            if(foto._id){
                recursoFoto.update({fotoId: foto._id}, foto, function(){
                    resolve({
                        mensagem: "Foto " + foto.titulo + " atualizada com sucesso",
                        inclusao: false
                    });
                }, function(erro){
                    console.log(erro);
                    reject({
                        mensagem: "Não foi possivel atualizar a foto " + foto.titulo
                    })
                }
                )
            } else {
                recursoFoto.save(foto,function(){
                    resolve({
                        mensagem: "Foto incluida com sucesso",
                        inclusao: true
                    });
                }, function(erro){
                    console.log(erro);
                    reject({
                        mensagem: "Não foi possivel incluir a foto " + foto.titulo
                    })

                })
            }

        })
    }
    return service;
});