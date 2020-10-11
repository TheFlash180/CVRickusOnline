
let https = new XMLHttpRequest();
const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
};

const {url, type, id} = apiData;

const apiUrl = `${url}${type}/${id}`;

https.open("GET", apiUrl);
https.send();

https.onload = () => {

    if(https.status === 200){
      var vals = JSON.parse(https.response);
      console.log(vals);
    }else{
      console.log(`error ${https.status} ${https.statusText}`);
    }
    
    pokemon => generateHtml(pokemon);
    
    const generateHtml = (data) => {
    console.log(data);
    const html = `
        <div class="name">${data.name}</div>
        <img src=${data.sprites.front_default}>
        <div class="details">
            <span>Height: ${data.height}</span>
            <span>Weight: ${data.weight}</span>
        </div>
    `;
    const pokemonDiv = document.querySelector('.pokemon');
    pokemonDiv.innerHTML = html;
    };
};

