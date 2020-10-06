// Main function
// Location is pulled and weather is taken
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat)
    console.log(lon)
}

getLocation();

var weatherURL = ""
var genreString = ""

$.ajax({
    url: weatherURL,
    method: "GET",
}).then(function (response) {
    // A weather category is displayed, and we bank that data into a var
    console.log(response);
    var weatherCat = ""
    console.log(weatherCat)
    if (weatherCat === "sunny") {
        genreString = "28%2C35%2C37"
    }
    else if (weatherCat === "cloudy") {
        genreString = "12%2C16%2C18%2C36"
    }
    else if (weatherCat === "raining") {
        genreString = "80%2C99%2C10749"
    }
    else () => {
        genreString = "14%2C878%2C37"
    }
})

movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=9bfe03956c9070cdbcee94fe9384e956&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&vote_average.gte=7&with_genres=" + genreString

$.ajax({
    url: movieURL,
    method: "GET",
}).then(function (response) {
    console.log(movieURL)
    console.log(response)
    var randomInt = Math.floor((Math.random() * 20) + 1);
    console.log(randomInt)
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

}
// Clicking the trending button will randomly generate a trending movie/tv show
