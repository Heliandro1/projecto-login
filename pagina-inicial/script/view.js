const btnShow = document.getElementById("btnShow");
const btnLogOut = document.getElementById("btnLogOut");
const userData = getUserOnlineData();

btnShow.addEventListener("click", showOrHideDropDown);

window.addEventListener("load", showData);

btnLogOut.addEventListener("click", logOut);

function showOrHideDropDown() {
    const drop = document.getElementById("drop-down");
    drop.style.display == '' ? drop.style.display = 'flex': drop.style.display = '';
}

function showData() {
    document.getElementById("accountName").innerText = userData.username;
    document.getElementById("userName").innerHTML += userData.username;
    document.getElementById("name").innerText = `Primeiro Nome: ${userData.primeironome}`;
    document.getElementById("nick").innerText = `Apelido: ${userData.apelido}`;
    document.getElementById("birthday").innerText= `Data de Nascimento: ${userData.datanascimento}`;
    document.getElementById("age").innerText = `Idade: ${userData.idade}`;
    document.getElementById("gender").innerText = `Sexo: ${userData.sexo}`;
}