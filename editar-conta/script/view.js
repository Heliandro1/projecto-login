const btnSave = document.getElementById("btnSave");
const txtPNome = document.getElementById("txtPNome");
const txtApelido = document.getElementById("txtApelido");
const txtUsername = document.getElementById("txtUsername");
const txtPassword = document.getElementById("txtPassword");
const btnOk = document.getElementById("btnOK");

window.addEventListener("load", setFieldData);

function setFieldData() {
    const userData = getUserOnlineData();
    txtPNome.value = userData.primeironome;
    txtApelido.value = userData.apelido;
    txtUsername.value = userData.username;
    txtPassword.value = userData.password;
}

btnSave.addEventListener("click", (e) =>{
    e.preventDefault();
    if(setData()){
        window.location = '../../pagina-inicial/pagina-inicial.html';
    }
});

btnOk.addEventListener("click", removeError);

function setError(texto, icon) {
    const modal = document.getElementById("modal");
    modal.style.display = 'flex';
    let icons = ['../imgs/cancel_75px.png', '../imgs/ok.png'];
    const img = document.getElementById("imgicon");
    const p = document.getElementById("setError");
    if (icon == 0) {
        img.setAttribute("src", icons[icon]);
        p.innerText = texto;
    }
    else if(icon == 1){
        img.setAttribute("src", icons[icon]);
        p.innerText = texto;
    }
}

function removeError() {
    const modal = document.getElementById("modal");
    modal.style.display = 'none';
}

function setData() {
    if(isValidName(txtPNome.value.trim())){
        if (isValidNickName(txtApelido.value.trim())) {
            if (isValidUserName(txtUsername.value.trim())) {
                if (isValidPassword(txtPassword.value)) {
                    editUserData(getUserOnlineData().username, txtUsername.value.trim(), txtPassword.value.trim(), txtPNome.value.trim(), txtApelido.value.trim());
                    return true;
                }else{
                    setError("Palavra passe muito fraca! Lembre-se de usar no mínimo 8 carácteres", 0);
                }
            }else{
                setError("Nome de usuário inválido ou já está a ser usado! Lembre-se de usar no mínimo 6 carácteres\nex: heliandro_1", 0);
            }
        }else{
            setError("Por favor informe um apelido válido! Lembre-se de usar no mínimo 4 carácteres", 0);
        }
    }else{
        setError("Por favor informe um nome válido! Lembre-se de usar no mínimo 4 carácteres\nex: Heliandro", 0);
    }
    return false;

}
