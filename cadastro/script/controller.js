function addUser(user) {
    const getUsers = localStorage.getItem('users');
    let registeredUsers = [];
    if (!(getUsers == null)) {
        registeredUsers = [...JSON.parse(getUsers)];
        registeredUsers.push(user);
    }else{
        registeredUsers.push(user);
    }
    localStorage.setItem('users', JSON.stringify(registeredUsers));
}

function logIn(username, password) {
    const savedData = localStorage.getItem('users');
    if (!(savedData == null)) {
        const getUserInfo = [...JSON.parse(savedData)];
        for (const iterator of getUserInfo) {
            if (iterator.username.toUpperCase() == username.toUpperCase() && iterator.password == password) {
                setUserOnline(iterator.username);
                console.log(getUserOnlineData());
                return true;
            }
        }
    }
    return false;
}

function logOut() {
    localStorage.removeItem('online');
}

function isRegisteredUserName(username) {
    const savedData = localStorage.getItem('users');
    if (!(savedData == null)) {
        const getRegisteredUserName = [...JSON.parse(savedData)];
        for (const iterator of getRegisteredUserName) {
             if (iterator.username.toUpperCase() == username.toUpperCase()) {
                return true;
            }
        }
    }
    return false;
}

function setUserOnline(username) {
    localStorage.setItem('online', JSON.stringify(username));
}

function getUserOnlineData() {
    const useronline = localStorage.getItem('online');
    const savedData = localStorage.getItem('users');
    if (!(useronline == null) && !(savedData == null)) {
        const user = JSON.parse(useronline);
        const getRegisteredUserName = [...JSON.parse(savedData)];
        for (const iterator of getRegisteredUserName) {
            if (iterator.username == user) {
                return iterator;
            }
        }
    }
}

function editUserData(username, newUsername, newPassword, newName, newNick) {
    const savedData = localStorage.getItem('users');
    if (!(savedData == null)) {
        let getRegisteredUserName = [...JSON.parse(savedData)];
        for(let i = 0; i < getRegisteredUserName.length; i++){
            if (getRegisteredUserName[i].username == username) {
                getRegisteredUserName[i].username = newUsername;
                getRegisteredUserName[i].password = newPassword;
                getRegisteredUserName[i].primeironome = newName;
                getRegisteredUserName[i].apelido = newNick;
                localStorage.setItem('users', JSON.stringify(getRegisteredUserName));
                setUserOnline(newUsername);
                break;
            }
        }
    }
}