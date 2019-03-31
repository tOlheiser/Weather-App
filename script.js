//API Key
let appId = '8686d4a7208932f98d6139d77afd3d1d';

//Imperial vs Metric units
let units = 'metric';

// Zip or City
let searchMethod;

//function determines whether the user entered a city name or zip code
function getSearchMethod(searchTerm) {
    //checks if the length is 5 characters and the number (with non numbers removed) is equal to the search term
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm) {
        searchMethod = 'zip';
    } else {
        searchMethod = 'q'; //q is for city name
    }
}


function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    //first arg is the URL for the call I'm making to the API; 
    //.then: this makes it so your code waits until the request is completed before proceeding. 'result' is the information received from the server
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        //.then(result =>) this function is called when you receive information from the server.
        return result.json(); // converts the HTTP response into a JSON element
    }).then(result => { //chaining another .then(); only when the json is received, call the init(result)
        init(result);
    })
}

function init(resultFromServer) {
    console.log(resultFromServer); //Getting a look at the JSON data returned

    //Using a switch statement to match the weather result to the currect case
    //Styles the document background image based on which case statement it matches.
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = 'url("clear.jpg")';
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpg")';
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("rain.jpg")';
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("storm.jpg")';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("snow.jpg")';
            break;
        default:
            break;
    }

    //Grabbing my html elements
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');
    
    //grabbing the weather icon and storing it into the img src
    weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

    //grabbing the weather description
    let resultDescription = resultFromServer.weather[0].description;
    //writing the weather description with an uppercase first letter
    weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

    //writing the temperature, rounded down
    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
    //writing the wind speed, rounded down
    windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + ' m/s';
    //writing the name of the city
    cityHeader.innerHTML = resultFromServer.name;
    //writing the humidity
    humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';

    setPositionForWeatherInfo();
}

//sets the height of the weather card based on the user's browser window height and width
function setPositionForWeatherInfo() {
    //grab the weather container
    let weatherContainer = document.getElementById('weatherContainer');
    //grabbing the client height & width and storing them in variables
    let weatherContainerHeight = weatherContainer.clientHeight;
    let weatherContainerWidth = weatherContainer.clientWidth;
    
    //Positions the weather card based on calculations on the user's client
    weatherContainer.style.left = `calc(50% - ${weatherContainerWidth/2}px)`;
    weatherContainer.style.top = `calc(50% - ${weatherContainerHeight/1.3}px)`;
    weatherContainer.style.visibility = 'visible';
}

//Attaching click event to the searchBtn
document.getElementById('searchBtn').addEventListener('click', () => {
    //grabbing the search input and storing it in searchTerm
    let searchTerm = document.getElementById('searchInput').value;

    //If search term has a value, call searchWeather to grab the weather data in JSON format.
    if (searchTerm) {
        searchWeather(searchTerm);
    }
});