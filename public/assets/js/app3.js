
let site = new XMLHttpRequest();

var city = "krugersdorp";
site.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4f15d36ca3825e612d82aa264ca86d9b");
    site.send();

    site.onload = () => {

    if(site.status === 200){
      var vals = JSON.parse(site.response);
      console.log(vals);
    }else{
      console.log(`error ${site.status} ${site.statusText}`);
    }
}