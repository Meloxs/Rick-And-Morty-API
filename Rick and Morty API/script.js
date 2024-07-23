const charactedId = document.getElementById('charactedId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchApi = (value) => {
    const result = fetch('https://rickandmortyapi.com/api/${value}');
    console.log(result);
}

fetchApi(1);

btnGo.addEventListener('click', () => {

});