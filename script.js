var queryUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=9bfe03956c9070cdbcee94fe9384e956"

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    console.log(response)
})


//Location
//if ("geolocation" in navigator){ //check geolocation available 
   
//Date and time
var today = moment().format('LLL');
console.log(today);
var imaClock ="data:image/jpeg;base64,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";


//try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){ 
        var latitude = position.coords.latitude;    
        var longitude = position.coords.longitude;
         

    var urlCoor ="http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=imperial&appid=99301d0cd337422b7e967fbf9be0bf70";   
    $.ajax({
        url: urlCoor,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        var nameCity = response.name;
        var tempCity = response.main.temp;
        var feelCity = response.main.feels_like;
        var humidityCity = response.main.humidity;
        var windCity = response.wind.speed;

       var divLocation = $(".stats");

        var nameC = $("<h1>").text(nameCity);
        divLocation.append(nameC);  

        var tempC = $("<h3>").text("Temperature :"+tempCity+ " F");
        divLocation.append(tempC);  

        var feelC = $("<h3>").text("Feels like"+feelCity + "F");
        divLocation.append(feelC);  

        var humC = $("<h3>").text("Humidity :"+ humidityCity+ "%");
        divLocation.append(humC);  

        var windC = $("<h3>").text( "Wind"+windCity+"m/h");
        divLocation.append(windC);  
     
    })
})
