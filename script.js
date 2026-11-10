let tabuada = document.querySelector("#multiplicar");
tabuada.addEventListener("click", tab);

function tab(){
    let numero1 = document.querySelector("#numero1");
    let n1 = numero1.value;
    let resultado = document.querySelector("#resultado");
    let resposta = '';

    for (let num = 1 ; num <= 10; num++) {
        resposta += `${n1} vezes ${num} = ${n1 * num}; <br>`;
    }
    resultado.innerHTML = resposta;
}