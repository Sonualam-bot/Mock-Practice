const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");

const outputEl = document.querySelector("#output");


let currCounter = 0;

function incrementCounter() {
    currCounter = currCounter + 1;
    // console.log(currCounter)
    outputEl.innerText = `${currCounter}`
    // console.log("from here")
}

function decrementCounter() {
    currCounter = currCounter - 1;
    // console.log(currCounter)
    outputEl.innerText = `${currCounter}`
    // console.log("from here")
}




incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);