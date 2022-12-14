const btnCadastrar = document.getElementById("btnCadastrar");
const txtPNome = document.getElementById("txtPNome");
const txtApelido = document.getElementById("txtApelido");
const txtUsername = document.getElementById("txtUsername");
const txtPassword = document.getElementById("txtPassword");
const rdChecked = document.querySelectorAll("input[type = 'radio']");
const txtDataNascimento = document.getElementById("txtDataNascimento");
const btnOk = document.getElementById("btnOK");

btnCadastrar.addEventListener("click", (e) =>{
    e.preventDefault();
    if(setData()){
        addUser(user);
        window.location = 'confirm.html';
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
        user.primeironome = txtPNome.value.trim();
        if (isValidNickName(txtApelido.value.trim())) {
            user.apelido = txtApelido.value.trim();
            if (isValidUserName(txtUsername.value.trim())) {
                user.username = txtUsername.value.trim();
                if (isValidPassword(txtPassword.value)) {
                    user.password = txtPassword.value;
                    if (isAValidYear(txtDataNascimento.value.split('-'))) {
                        user.datanascimento = txtDataNascimento.value;
                        if (rdChecked.item(0).checked) {
                            user.sexo = 'Masculino';
                            return true;
                        }else if (rdChecked.item(1).checked) {
                            user.sexo = 'Feminino';
                            return true;
                        }else{
                            setError("Por favor informe o seu sexo!", 0);
                        }
                    }else{
                        setError("Por favor informe uma data de nascimento v??lida! Lembre-se que deves ter no m??nimo 13 anos de idade", 0);
                    }
                }else{
                    setError("Palavra passe muito fraca! Lembre-se de usar no m??nimo 8 car??cteres", 0);
                }
            }else{
                setError("Nome de usu??rio inv??lido ou j?? est?? a ser usado! Lembre-se de usar no m??nimo 6 car??cteres\nex: heliandro_1", 0);
            }
        }else{
            setError("Por favor informe um apelido v??lido! Lembre-se de usar no m??nimo 4 car??cteres", 0);
        }
    }else{
        setError("Por favor informe um nome v??lido! Lembre-se de usar no m??nimo 4 car??cteres\nex: Heliandro", 0);
    }
    return false;

}