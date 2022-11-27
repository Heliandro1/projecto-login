const user = {
    username: '',
    password: '',
    primeironome: '',
    apelido: '',
    sexo: '',
    datanascimento: 'a',
    idade: NaN,
}

function isValidUserName(username) {
    let vr = '';
    if(username.length >= 6){
        if (!(username.match(/[a-zA-Z0-9]*_[a-zA-Z0-9]*/g) == null)) {
            username.match(/[a-zA-Z0-9]*_[a-zA-Z0-9]*/g).forEach(element => {
                vr += element;
            });
            if (vr.length == username.length && !isRegisteredUserName(username)) {
                return true;
            }
        }
    }
    return false;
}

function isValidPassword(password) {
    if (password.length >= 8) {
        return true;
    }
    return false;
}

function isValidNickName(nickname) {
    let vr = '';
    if(nickname.length >= 4){
        if (!(nickname.match(/[a-z]*/gi) == null)) {
            nickname.match(/[a-z]*/gi).forEach(element => {
                vr += element;
            });
            if (vr.length == nickname.length) {
                return true;
            }
        }
    }
    return false;
}

function isValidName(name) {
    let vr = '';
    if(name.length >= 4){
        if (!(name.match(/[a-z]*/gi) == null)) {
            name.match(/[a-z]*/gi).forEach(element => {
                vr += element;
            });
            if (vr.length == name.length) {
                return true;
            }
        }
    }
    return false;
}

function isAValidYear(ano) {
    const date = new Date();
    const idade = date.getFullYear() - Number(ano[0]);
    if (Number(ano[0]) > date.getFullYear() || ano.length <= 1 || idade <= 0 || idade <= 13){
        return false
    }
    user.idade = idade;
    return true;
}