// Use var em situações em que precisar de compatibilidade com código JavaScript muito antigo, 
// mas geralmente evite-a devido ao seu escopo funcional amplo e hoisting.

var pais = "Espanha";

var populacao = 3000000;

// Use let quando precisar de variáveis com escopo limitado a blocos, especialmente útil em loops e condições.

let nacao = "Argentina";

let acesso = false;

// Use const quando quiser garantir que o valor da variável não seja alterado após sua inicialização, 
// o que é útil para manter a constância e a segurança em seu código.

const jogadoresNFL = [
    {
        nome: "Tom Brady",
        idade: 47,
        titulos: 7,
        cidadeNascimento: "San Mateo",
        estadoNascimento: "Califórnia"
    },
    {
        nome: "Patrick Mahomes",
        idade: 29,
        titulos: 3,
        cidadeNascimento: "Tyler",
        estadoNascimento: "Texas"
    }]

console.log(jogadoresNFL)

