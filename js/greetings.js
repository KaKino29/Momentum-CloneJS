const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const logoutInput = document.getElementById("logout-form");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);

}

function paintGreetings(username) {
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    logoutInput.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(function () {
        greeting.style.opacity = "0";
        greeting.style.transition = "0.1s all"
    }, 1250)
    setTimeout(function () {
        greeting.style.opacity = "1";
        greeting.style.transition = "0.1s all"
        greeting.innerText = `Signed in as ${username}`
    }, 1750);
} 

loginForm.addEventListener("submit", onLoginSubmit);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

function onLogoutSubmit() {
    if (confirm("Press Yes if you want to.")) {
        localStorage.clear();
        location.reload();
    };
};

logoutInput.addEventListener("click", onLogoutSubmit);