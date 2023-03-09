import prompt from 'prompt-sync';
let ler = prompt();


console.log("Olá, qual seu nome?");
let nomePessoa = ler();

console.log("Qual cidade você mora?")
let cidade = ler();

console.log("\nSeja bem vindo " + nomePessoa +"!!");
console.log("\nEspero que aí em " + cidade + " esteja um tempo bom!")
