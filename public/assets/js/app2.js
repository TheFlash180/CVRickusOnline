
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
};

