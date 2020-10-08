
//Location - check geolocation available
if ("geolocation" in navigator) {
    //try to get user current location using getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(function (position) {
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

            var skyC = $("<li>").text("Sky " + skyCity);
            ulInfoCity.append(skyC);




            //Date and time
            var today = moment().format('LL');
            var hour = moment().format('LT');
            var timeDateCityEl = $("#timeDateCity");

            var todayEl = $("<li>").text(today);
            var hourEl = $("<li>").text(hour);
            timeDateCityEl.append(todayEl);
            timeDateCityEl.append(hourEl);
            // Depending on the weather category, assign the genres that we think are suited for that weather
            // var weatherCat = "Snow"
            var weatherCat = response.weather[0].main
            console.log(weatherCat)
            // Possible main options: Thunderstorm, Drizzle, Rain, Snow, Clear, Clouds
            if (weatherCat === "Clear") {
                genreString = "28%7C12%7C10752"
                genreExclude = "10751"
                $("#movie-block").addClass("body-clear")
            }
            else if (weatherCat === "Clouds") {
                genreString = "16%7C10751"
                genreExclude = "28"
                $("#movie-block").addClass("body-cloudy")
            }
            else if (weatherCat === "Rain") {
                genreString = "17%7C9648%7C53"
                genreExclude = "10751"
                $("#movie-block").addClass("body-rain")
            }
            else if (weatherCat === "Thunderstorms") {
                genreString = "80%7C99%7C10749"
                genreExclude = "10751%7C16"
                $("#movie-block").addClass("body-thunder")
            }
            else if (weatherCat === "Snow") {
                genreString = "35%7C18%7C37"
                genreExclude = ""
                $("#movie-block").addClass("body-snow")
            }
            else {
                genreString = "14%7C36%7C10402%7C878%7C10770%7C10752"
                genreExclude = ""
            }
            // Click handlers for both options
            $("#generate-movie").on("click", function () {
                generateMovie();
            });
            $("#generate-trending").on("click", function () {
                generateTrending();
            })

        }) // end Ajax function

    }); // end function geolocation
} else { //if the browser doesnt support geolocation 
    console.log("Browser doesn't support geolocation!");
} // end geolocation


function generateMovie() {
    var movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=9bfe03956c9070cdbcee94fe9384e956&language=en-US&append_to_response=images&include_image_language=en&sort_by=popularity.desc&include_adult=false&page=1&vote_average.gte=7&with_genres=" + genreString + "&without_genres=" + genreExclude

    $.ajax({
        url: movieURL,
        method: "GET",
    }).then(function (response) {
        console.log(movieURL)
        console.log(response)
        var randomInt = Math.floor((Math.random() * 19) + 1);
        console.log(randomInt)
        var screenSize = ""
        console.log(window.screen.availWidth)
        if (window.screen.availWidth > 1200) {
            screenSize = "w780"
        }
        else if (window.screen.availWidth > 992) {
            screenSize = "w500"
        }
        else if (window.screen.availWidth > 768) {
            screenSize = "w342"
        }
        else {
            screenSize = "w185"
        }
        var posterURL = "https://image.tmdb.org/t/p/" + screenSize + response.results[randomInt].poster_path
        console.log(response.results[randomInt].poster_path)
        $("#movie-poster").attr("src", posterURL)
    })
}

// Grabs the trending movies and randomly suggests one from the array
function generateTrending() {
    var queryUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=9bfe03956c9070cdbcee94fe9384e956"

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var randomIntTrend = Math.floor((Math.random() * 19) + 1);
        console.log(randomIntTrend)
        var screenSize = ""
        console.log(window.screen.availWidth)
        if (window.screen.availHeight > 1000) {
            screenSize = "w780"
        }
        else if (window.screen.availHeight > 800) {
            screenSize = "w500"
        }
        else if (window.screen.availHeight > 600) {
            screenSize = "w342"
        }
        else {
            screenSize = "w342"
        }
        var posterURL = "https://image.tmdb.org/t/p/" + screenSize + response.results[randomIntTrend].poster_path
        console.log(response.results[randomIntTrend].poster_path)
        $("#movie-poster").attr("src", posterURL)
    })
}


// Grab screen size and then assign image size based off of screen 