(function (){


const url = 'https://api.chucknorris.io/jokes/random';
let joke = '';
let joke_div = document.querySelector('.joke')
const button_button = document.querySelector('.button')

button_button.addEventListener('click', () =>{
let xhr = new XMLHttpRequest();

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
        joke = xhr.response.value;
        joke_div.innerHTML = joke;
    }
};

xhr.open('GET', url);
xhr.send();

   })
})();
