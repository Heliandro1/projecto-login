const btnLogin = document.getElementById("btnLogin");
const txtUserName = document.getElementById("txtUserName");
const txtPassword = document.getElementById("txtPassword");
const btnOK = document.getElementById("btnOK");
btnLogin.addEventListener("click", (e) =>{ 
    e.preventDefault();
    if (isRegisteredUserName(txtUserName.value.trim())) {
        if (logIn(txtUserName.value.trim(), txtPassword.value)) {
            window.location = '../../pagina-inicial/pagina-inicial.html';
        }else{
            setError("A palavra passe inserida está errada!", 0);
        }
    }else{
        setError("Não existe uma conta com o username informado!", 0);
    }
});

btnOK.addEventListener("click", removeError);

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