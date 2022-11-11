const form = document.getElementById("main-form");
const password1 = document.getElementById("pass");
const password2 = document.getElementById("conf-pass");
const passLabel1 = document.querySelector(".passLabel1");
const passLabel2 = document.querySelector(".passLabel2");
const style = document.createElement("style");
document.head.appendChild(style);


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    checkPasswords();
});

function checkPasswords (){
    const pass1Value = password1.value.trim();
    const pass2Value = password2.value.trim();

    if (pass1Value !== pass2Value) {
        style.innerText= ".main__form-box main .form-div label[for=pass]::after, .main__form-box main .form-div label[for=conf-pass]::after { opacity: 1;}"
    } else {
    }
}