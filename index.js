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

 //Importamos um modulo interno do node js
const util  = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


 function obterUsuario(){
     //Quando der algum problema -> reject(Erro)
     //Quando sucesso -> RESOLVE
     return new Promise(function resolvePromise(resolve, reject) {
         setTimeout(function(){
            //return reject(new Error('DEU RUIM DE VERDADE!'))

             return resolve({
                 id:1,
                 nome:'Aladin',
                 dataNascimento: new Date()
             })
         },1000)
     })
 }

 function obterTelefone(idUsuario) {
     return new Promise(function resolvePromise(resolve, reject){
         setTimeout(() =>{
           return resolve({
               telefone: '1199002',
               ddd: 11
           })
         },2000)
     })
 }

 function obterEndereco(idUsuario, callback) {
     setTimeout(() => {
         return callback(null, {
            rua: 'dos bobos' ,
            numero: 0
         })
     },2000)
 }

 //1º Passo adicionar a palavra async -> automaticamente ela retornará uma Promise
 main()
    async function main(){
        try{
            console.time('medida-promisse')
            const usuario = await obterUsuario()
            //const telefone = await obterTelefone(usuario.id)
            //const endereco = await obterEnderecoAsync(usuario.id)
            const resultado = await Promise.all([
                obterTelefone(usuario.id),
                obterEnderecoAsync(usuario.id)
            ])
            const endereco = resultado[1]
            const telefone = resultado[0]
            console.log(`
                Nome: ${usuario.nome}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                Endereco: ${endereco.rua}, ${endereco.numero}
            `)            
            console.timeEnd('medida-promisse')
        }catch(error){
            console.error('DEU RUIM', error)
        }
    }




// const usuarioPromise = obterUsuario()
// //Para manipular o sucesso usamos a função then
// //para manipular erros, usamos o catch
// //usuario -> telefone -> telefone

//     usuarioPromise
//     .then(function(usuario){
//         return obterTelefone(usuario.id)
//         .then(function resolverTelefone(result){
//             return{
//                 usuario: {
//                     nome: usuario.nome,
//                     id: usuario.id
//                 },
//                 telefone: result
//             }
//         })
//     })
//     .then(function(resultado){
//         const endereco = obterEnderecoAsync(resultado.usuario.id)
//         return endereco.then(function resolverEndereco(result){
//             return{
//                 usuario: resultado.usuario,
//                 telefone: resultado.telefone,
//                 endereco: result
//             }
//         })
//     })
//     .then(function(resultado){
//         console.log(`
//             Nome: ${resultado.usuario.nome}
//             Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//             Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
//         `)
//     })
//     .catch(function(error){
//         console.error('Deu ruim:', error)
//     })

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
