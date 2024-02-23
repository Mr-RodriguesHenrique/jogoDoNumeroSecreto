//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {if(chute > numeroSecreto){
        exibirTextoNaTela('p','O número secreto é menor.');}
       else{exibirTextoNaTela('p','O número secreto é maior.')}
        tentativas++;
        limparCampo();    
    }
}
function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random()*numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{RATE:1.2});
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10: ');
};
exibirMensagemInicial();

/*function saudacao(){
    console.log('Olá,mundo!');
}

function saudaNome(beltrano){
    console.log(`Olá, ${beltrano}!`);
    }

function media(valor1, valor2, valor3){
    return ((parseInt(valor1)+parseInt(valor2)+parseInt(valor3))/3);
}

function dobro(valor){
    return 2*parseInt(valor);
}

function comparaMaior(valor1,valor2){
  return  valor1 > valor2 ? valor1 : valor2;
}

function quadrado(valor){
    return valor*valor;
}

function calculaIMC(peso, altura){
    let imc = parseFloat(peso)/quadrado(altura);
    return imc;
};

function fatorial(numero){
    if(numero == 0){
        let resultado = 1;
        return resultado;
    }else{
        let resultado = numero;
        while(numero > 1){
            resultado = resultado * (numero -1);
            numero--};
            return resultado;
    
    }
    
}

function converteDolarParaReal(dolar){
    return parseFloat(dolar)*4.8;

}

function calculaAreaPerimetro(largura,altura){
    let perimetro = 4*largura;
    let area = 6*largura*altura;
    return perimetro;
    return area;
}

function calculaCirculo(raio){
    let area = quadrado(raio)*3.14;
    let perimetro = 6.28*raio;
    return area;
    return perimetro;
}
function tabuada(valor){
    contador = 10
    while(contador >0){
        
        console.log(valor*contador)
        contador --
    }
}

let listaGenerica = [];
let linguagensDeProgramacao = ['Javascript','C','C++','Kotlin','Python'];

linguagensDeProgramacao.push('java','Ruby','GoLang');

let listaNome = ['Teresa','GamsterGaming','Mini-Mini'];
console.log(listaNome[1]);
console.log(listaNome[listaNome.length -1]);*/