let input = document.querySelector(".input")
let inputText = input.value
input.value = localStorage.getItem('input');
input.oninput = () => {


    localStorage.setItem('input', input.value)
};