const btn = document.querySelector('button');
const main = document.querySelector('.container')
const url = 'test.txt'
btn.onclick = reqData();

// main.onload = reqData;

function output(data) {
    console.log(data);
    console.log(this.responseText);
    introtxt.textContent = this.responseText;
}

function reqData() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', output);
    xhr.open('GET', url)
    xhr.send();
    console.log(xhr);
}