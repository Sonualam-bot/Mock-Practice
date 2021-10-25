const inputText = document.querySelector("#input-text");
// console.log(inputText)
const logBtn = document.querySelector("#log-btn");
const warnBtn = document.querySelector("#warn-btn");
const errorBtn = document.querySelector("#error-btn");
const outputEl = document.querySelector("#output")



function colorLogBtn() {
    outputEl.innerText = inputText.value;
    outputEl.style.color = 'green'
    // console.log(inputText.value)
}
function colorWarnBtn() {
    outputEl.innerText = inputText.value;
    outputEl.style.color = 'red'
    // console.log(inputText.value)
}
function colorErrorBtn() {
    outputEl.innerText = inputText.value;
    outputEl.style.color = 'blue'
    // console.log(inputText.value)
}


logBtn.addEventListener("click", colorLogBtn)
warnBtn.addEventListener("click", colorWarnBtn)
errorBtn.addEventListener("click", colorErrorBtn)