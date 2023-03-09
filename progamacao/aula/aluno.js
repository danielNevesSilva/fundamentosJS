import prompt from 'prompt-sync';
const ler = prompt();

console.log('Informe a media');
let media =Number(ler());


if (media >=5) {
    console.log('Aluno aprovado');

    
} else if(media >= 3 && media < 5) {
    console.log('Aluno recuperacao');
    
}else{
    console.log('Reprovado');
}