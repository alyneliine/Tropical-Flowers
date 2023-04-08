let btnOpen = document.getElementById("btnOpen");
let btnClose = document.getElementById("btnClose");
btnOpen.onclick = () => {
    let login = document.getElementById("login");

    if(login.classList.contains("login-hidden")){
        login.classList.remove("login-hidden")
        login.classList.add("login-visible")
    }
    else{
        login.classList.remove("login-visible")
        login.classList.add("login-hidden")
    }
}
btnClose.onclick = () => {
    let login = document.getElementById("login");

    if(login.classList.contains("login-hidden")){
        login.classList.remove("login-hidden")
        login.classList.add("login-visible")
    }
    else{
        login.classList.remove("login-visible")
        login.classList.add("login-hidden")
    }
}