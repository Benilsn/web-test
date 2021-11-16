function enter() {

    var area = document.getElementById('greetings');
    var texto = prompt('Enter you Name: ');

    if (texto == '' || texto == null) {
        alert('Digite seu nome novamente:')
        area.innerHTML = 'Bem Vindo...'
    } else {
        area.innerHTML = "Bem Vindo " + texto;
    }
};

function clicked() {

    var n = document.getElementById('name');
    var val = prompt("Digite seu nome: ")

    n.innerHTML = "Bem Vindo:" + val;

}