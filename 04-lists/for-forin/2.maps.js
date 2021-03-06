const service = require('./service')

Array.prototype.meuMap = function(callback){
    const novoArrayMapeado = []
    for(let indice=0 ; indice <= this.length -1; indice++){
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
    
}
async function main() {
    try {
        const results = await service.obterPessoas(`a`)
        // const names  = []
        // results.results.forEach(function (item) {
        //     names.push(item.name)
        // })
        // const name = results.results.map(function (pessoa){
            // return pessoa.name
        // })
        // const name = results.results.map((pessoa) => pessoa.name)

        const name = results.results.meuMap(function (pessoa, indice){
            return `[${indice}]${pessoa.name}`
        })

        console.log('names', name)        
    } catch (error) {
        console.log(`Deu Ruim`, error)
    }
}
main()