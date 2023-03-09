import  prompt  from "prompt-sync";
const ler = prompt();


console.log('Informe a média');
let media = Number(ler());

let valida = media > 0 && media <= 10;

console.log('A média é valida? ' + valida);

