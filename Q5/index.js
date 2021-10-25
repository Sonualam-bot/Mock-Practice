const inputName = document.querySelector('#input-name')
const inputPassword = document.querySelector("#input-password");
const checkBtn = document.querySelector("#check-btn")

const outputEl = document.querySelector("#output");


function checkPassword() {
    if (inputName.value === inputPassword.value) {
        outputEl.innerText = "passwords can't have name"
    } else {
        outputEl.innerText = "success"
    }
    // console.log('form here')
}

checkBtn.addEventListener("click", checkPassword)


