// capturar evento de submit do formulario

const form = document.querySelector('#formulario'); // capturamos o formulario

form.addEventListener('submit', function (e) { // previnir o envio/submit e ver no console - adcionamos o escutador no evento de submit
    e.preventDefault();// previnimos o default - nao deixando o formulario ser enviado
    const inputPeso = e.target.querySelector('#peso'); //e.target. vai dizer qual é o elemento que ta recebendo o evento. aqui pegamos o input inteiro
    const inputAltura = e.target.querySelector('#altura'); // aqui pegamos o input inteiro
    
    const peso = Number(inputPeso.value) // aqui pegamos o valor // tentamos converter pra number e caso retorne NaN a gente checa no "if abaixo"
    const altura = Number(inputAltura.value) // aqui pegamos o valor // tentamos converter pra number e caso retorne NaN a gente checa no "if abaixo"
    
    if (!peso) { // checagem. se o peso nao for checado como verdadeiro sera setado o resultado "peso invalido com a flag "false" e retorna
        setResultado('peso invalido', false);
        return;
    }

    if (!altura) { // checagem. se a altura nao for checado como verdadeiro sera setado o resultado "peso invalido com a flag "false" e retorna
        setResultado('altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura); // calculamos imc
    const nivelImc = getNivelImc(imc); // pegamos o nivel do imc

    const msg = `Seu IMC é ${imc} (${nivelImc})`; // criamos a msg

    setResultado(msg, true); // mandamos setar o resultado agora com a flag true
});

function getNivelImc (imc) {
    const nivel = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau 1', 'obesidade grau 2', 'obesidade grau 3']; 
 
    if (imc >= 39.9) return nivel[5]; // se o if tiver só uma linha pode ser encurtado mas nao é recomendado
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];

}

function getImc (peso, altura) { // função que calcula o imc
    const imc = peso /altura ** 2;
    return imc.toFixed(2);
}

function criaP () { // função que cria paragrafo
    const p = document.createElement('p'); // criando paragrafo
    return p;
}

function setResultado (msg, isValid) { // essa função tem o trabalho de colocar uma msg dentro da div resultado // criar 
    const resultado = document.querySelector('#resultado'); // aqui selecionamos a div
    resultado.innerHTML = ''; // aqui zerando oque estiver na div resultado 

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); // se é valido adiciona a classe de fundo verde
    } else {
        p.classList.add('bad'); // se é invaliso adiciona a class com fundo vermelho
    }

    p.innerHTML = msg;
    resultado.appendChild(p); // adicionando a msg no resultado

}

