// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const laudoImc = getLaudoImc(imc);

    const msg = `Seu IMC é ${imc} (${laudoImc}).`;

    setResultado(msg, true);
});

function getLaudoImc (imc) {
    const laudo = ['Abaixo do Peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) {
        return laudo[5];
    } 
    if (imc >= 39.9) {
        return laudo[4];
    } 
    if (imc >= 34.9) {
        return laudo[3];
    } 
    if (imc >= 29.9) {
        return laudo[2];
    } 
    if (imc >= 24.9) {
        return laudo[1];
    } 
    if (imc < 18.5) {
        return laudo[0];
    }
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP ();

    if (isValid) {
        p.classList.add('good');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}