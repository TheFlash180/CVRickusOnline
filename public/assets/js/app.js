console.log("sdjhsjdhjshdjshd");

let https = new XMLHttpRequest();

var city = "krugersdorp";
https.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4f15d36ca3825e612d82aa264ca86d9b");
    https.send();

    https.onload = () => {

    if(https.status === 200){
      var vals = JSON.parse(https.response);
      console.log(vals);
    }else{
      console.log(`error ${https.status} ${https.statusText}`);
    }
}