var pok = document.getElementById('pok');
var pokimg = document.getElementById('pokimage');
var pokw = document.getElementById('weight');
var pokh = document.getElementById('height');

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
      pok.innerHTML = vals['name'];
      pokimg.innerHTML = vals['sprites']['front_default'];
      pokimg.src = vals['sprites']['front_default'];
      pokw.innerHTML = vals['weight'];
      pokh.innerHTML = vals['height'];
    }else{
      console.log(`error ${https.status} ${https.statusText}`);
    }
};

var icon = document.getElementById('icon');
var city = document.getElementById('city');
var wind = document.getElementById('wind');
var temp = document.getElementById('temp');

let site = new XMLHttpRequest();

var cityname = "krugersdorp";
site.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=4f15d36ca3825e612d82aa264ca86d9b");
site.send();

    site.onload = () => {

    if(site.status === 200){
      var vals = JSON.parse(site.response);
      console.log(vals);
      city.innerHTML = vals['name'];
      icon.innerHTML = vals['clouds']['all'];
      wind.innerHTML = vals['wind']['speed'];
      temp.innerHTML = vals['main']['temp'];
    }else{
      console.log(`error ${site.status} ${site.statusText}`);
    }
};

var img = document.getElementById('proimg');
var rep = document.getElementById('repos');
var created = document.getElementById('date');
var nme = document.getElementById('name');

let site2 = new XMLHttpRequest();

site2.open("GET", "https://api.github.com/users/TheFlash180");
site2.send();

site2.onload = () => {

    if(site2.status === 200){
      var vals = JSON.parse(site2.response);
      console.log(vals);
      nme.innerHTML = vals['login'];
      rep.innerHTML = vals['public_repos'];
      created.innerHTML = vals['created_at'];
      img.src = vals['avatar_url'];
    }else{
      console.log(`error ${site2.status} ${site2.statusText}`);
    }
};