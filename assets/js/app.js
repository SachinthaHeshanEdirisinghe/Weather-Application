console.log("Weather app is running");

fetch("http://api.weatherapi.com/v1/current.json?key=0efbc67303144d118d495821251611    &q=Colombo&aqi=no")
.then(res => res.json())
.then(data => console.log(data));