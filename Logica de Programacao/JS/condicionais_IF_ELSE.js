
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Qual é o seu nome? ", nome => {
    if (nome == "Luciano") {

        console.log("Olá ", nome)

    }
    else {
        console.log("Você não é o Luciano, é o ", nome)
    }
    readline.question(`Qual sua idade ${nome}? `, idade => {
        if (idade < 18) {
            console.log(`${nome} é menor de idade!`)
        }
        else if (idade >= 18){
            console.log(`${nome} é maior de idade!`)
        }
        readline.close()
    })
})