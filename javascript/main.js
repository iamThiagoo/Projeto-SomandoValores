function somar() {
    let boxNúmeroUm = document.getElementById('n1');
    let boxNúmeroDois = document.getElementById('n2');
    let numero1 = Number(boxNúmeroUm.value);
    let numero2 = Number(boxNúmeroDois.value);
    let somar = numero1 + numero2;
    resultado.innerHTML = ("O resultado da sua missão foi " + somar + "!");

    //Estilizando o nosso innerHTML
    resultado.style.fontSize = 32 + 'px';
    resultado.style.marginTop = 20 + 'px';
}