const userName = document.querySelector('#name');
const fivePx = document.querySelector('#five-px');
const tenPx = document.querySelector('#ten-px');


const outputEl = document.querySelector('#output')
const fetchBtn = document.querySelector('#fetch-btn');

function changeBorderToFivePx() {
    userName.style.border = "solid 5px"
}
function changeBorderToTenPx() {
    userName.style.border = "solid 10px"
}


const url = "https://quick-access-api.desaihetav.repl.co"

function getData() {
    fetch(url)
        .then((response) => response.json())
        .then(data =>
            outputEl.innerText = data.message);
}

fetchBtn.addEventListener("click", getData)

fivePx.addEventListener('click', changeBorderToFivePx);
tenPx.addEventListener('click', changeBorderToTenPx);