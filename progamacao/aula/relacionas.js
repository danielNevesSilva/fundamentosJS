import prompt from "prompt-sync";
let ler = prompt();


console.log('Informe seu nome');
let nome1 = ler();
console.log('Informe outro nome');
let nome2 = ler();

let caracteresNome1 = nome1.length;
let caracteresNome2 = nome2.length;


let nome1Maior = caracteresNome1 > caracteresNome2;

console.log(nome1Maior);
