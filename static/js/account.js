const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

function signin() {
    var signIn = document.getElementById("container");
    signIn.classList.toggle("sign-in-container_show");
    signIn.classList.remove("sign-up-container_show");
}

function signup() {
    var signUp = document.getElementById("container");
    signUp.classList.toggle("sign-up-container_show");
    signUp.classList.remove("sign-in-container_show");
}
