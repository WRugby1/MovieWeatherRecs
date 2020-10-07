var queryUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=9bfe03956c9070cdbcee94fe9384e956"
//var genreString = ""
$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {
    console.log(response)
})


//Location - check geolocation available
if ("geolocation" in navigator){  
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function(position){ 
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;


        var urlCoor = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=99301d0cd337422b7e967fbf9be0bf70";


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
            var skyCity = response.weather[0].description;
    
         //Showing results in html
            var ulInfoCity = $("#infoCity");
            var cityHeader = $("#cityEl").text(nameCity);

            var tempC = $("<li>").text("Temperature: " + tempCity + " F");
            ulInfoCity.append(tempC);
    
            var feelC = $("<li>").text("Feels like: " + feelCity + "F");
            ulInfoCity.append(feelC);
    
            var humC = $("<li>").text("Humidity: " + humidityCity + "%");
            ulInfoCity.append(humC);
    
            var windC = $("<li>").text("Wind: " + windCity + "m/h");
            ulInfoCity.append(windC);
    
            var skyC = $("<li>").text("Sky " + skyCity );
            ulInfoCity.append(skyC);

            


            //Date and time
            var today = moment().format('LL');
            var hour = moment().format('LT');
            var timeDateCityEl = $("#timeDateCity");

            var todayEl = $("<li>").text(today);
            var hourEl = $("<li>").text(hour);
            timeDateCityEl.append(todayEl);
            timeDateCityEl.append(hourEl);



        }) // end Ajax function

      }); // end function geolocation
}else{ //if the browser doesnt support geolocation 
    console.log("Browser doesn't support geolocation!");
} // end geolocation










/*
        var weatherCat = response.weather[0].main
        console.log(weatherCat)
        if (weatherCat.toString() === "sunny") {
            genreString = "28|2C35|2C37"
        }
        else if (weatherCat === "Clouds") {
            genreString = "12|2C16|2C18|2C36"
        }
        else if (weatherCat === "raining") {
            genreString = "80|2C99|2C10749"
        }
        else   {
            genreString = "14|2C878|2C37"
        }*/
    


/*function generateMovie() {
    var movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=9bfe03956c9070cdbcee94fe9384e956&language=en-US&append_to_response=images&include_image_language=en&sort_by=popularity.desc&include_adult=false&page=1&vote_average.gte=7&with_genres=" + genreString


    $.ajax({
        url: movieURL,
        method: "GET",
    }).then(function (response) {
        console.log(movieURL)
        console.log(response)
        var randomInt = Math.floor((Math.random() * 19) + 1);
        console.log(randomInt)
        var posterURL = "https://image.tmdb.org/t/p/w500" + response.results[randomInt].poster_path
        $("#movie-name").text(response.results[randomInt].title)
        console.log(response.results[randomInt].poster_path)
        $("#movie-poster").attr("src", posterURL)
    })
}

$("#generate-movie").on("click", function () {
    generateMovie();
})
// That var is ran through and if else statement assigning it a movie genre
// Run an API pull on the assigned genre
// Random number generate to produce a movie from the top rated results
// Display the movie information on the homepage. 

// Settings

// Trending
function generateTrending() {
    var queryUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=9bfe03956c9070cdbcee94fe9384e956"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })

}*/
