/**Aula 01 */

/**
*console.log('Hello node!')
*const a = 1
*const b = 2
*console.log(a+b);
*/


/**Aula 2
 * 0 - obter um usuario
 * 1 - Obter o número de telefone de um usuario a partir de seu id
 * 3 - obter o endereco do usuario pelo id
 */

 function obterUsuario(){
     //Quando der algum problema -> reject(Erro)
     //Quando sucesso -> RESOLVE
     return new Promise(function resolvePromise(resolve, reject) {
         setTimeout(function(){
             return resolve({
                 id:1,
                 nome:'Aladin',
                 dataNascimento: new Date()
             })
         },1000)
     })
 }


 function obterTelefone(idUsuario, callback) {
      setTimeout(() =>{
        return callback(null,{
            telefone: '1199002',
            ddd: 11
        })
      },2000)    
 }

 function obterEndereco(idUsuario, callback) {
     setTimeout(() => {
         return callback(null, {
            rua: 'dos bobos' ,
            numero: 0
         })
     })
 }


const usuarioPromise = obterUsuario()
//Para manipular o sucesso usamos a função then
//para manipular erros, usamos o catch

usuarioPromise
.then(function(resultado){
    console.log('resultado:', resultado)
})
.catch(function(error){
    console.error('Deu ruim:', error)
})

 /*function resolverUsuario(res, usuario){
     console.log('usuario1', usuario)
 } */

     /*obterUsuario(function resolverUsuario(error, usuario){
         if (error){
             console.error('Deu ruim em Usuário', error)
             return;
        }
     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
         if(error1){
             console.log('Deu ruim no Telefone', error)
             return
        }
     obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
         if(error2){
             console.log('Deu ruim no Telefone', error)
             return
           }
                console.log(`
                    Nome: ${usuario.nome},
                    Endereco: ${endereco.rua},${endereco.numero},
                    Telefone: (${telefone.ddd})${telefone.telefone}
                `)
            })
        })
    })*/
 //  const telefone = obterTelefone(usuario.id)
 
//  console.log('usuario', usuario)
//  console.log('telefone', telefone)
