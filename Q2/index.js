const outputEl = document.querySelector("#output");

var url = "https://jsonplaceholder.typicode.com/todos";


fetch(url)
    .then((res) => {
        return res
    })
    .then(data => {

        console.log(data)


    })