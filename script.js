var queryUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=9bfe03956c9070cdbcee94fe9384e956"

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    console.log(response)
})


//Location
if ("geolocation" in navigator){ //check geolocation available 
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

       var divLocation = (".stats");

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