let input = document.getElementById('input')
let temperature = document.getElementById('temperature')
let cityName = document.getElementById('cityName')
let country = document.getElementById('country')
let bg = document.getElementsByClassName('weatherAap')
let feelsLike = document.getElementById('feelsLike')
let visibility = document.getElementById('visibility')
let Humidity = document.getElementById('Humidity')
let clouds = document.getElementById('clouds')
let weatherType = document.getElementById('weatherType')

document.body.style.backgroundImage = "url('bg1.jpg')"
document.body.style.backgroundPosition = "contain"
document.body.style.backgroundSize = "cover"

let search = async() => {
    if (input.value.length==0){
        alert('Please enter a city name before search')
    }
    else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let response = await fetch(url)
        let data = await response.json()
        temperature.textContent = data.main.temp
        cityName.textContent = data.name
        country.textContent = data.sys.country
        feelsLike.textContent = data.main.feels_like
        visibility.textContent = data.visibility
        Humidity.textContent = data.main.humidity
        clouds.textContent = data.clouds.all
        weatherType.textContent = data.weather
        
        if(data.main.temp > 30){
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg')"
            document.body.style.backgroundPosition = "contain"
            document.body.style.backgroundSize = "cover"
        }
        else if (data.main.temp >= 10 && data.main.temp < 20){
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg')"
            document.body.style.backgroundPosition = "contain"
            document.body.style.backgroundSize = "cover"
        }
        else if (data.main.temp < 10){
            document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/494129980/photo/shirakawago-light-up.jpg?s=1024x1024&w=is&k=20&c=AhlVbSK-IfBzE2Qpni6qeJw8daLF1ZjEQSJcR0Rqanc=')"
            document.body.style.backgroundPosition = "contain"
            document.body.style.backgroundSize = "cover"
        }
        else{
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2015/05/15/10/38/sunlight-768141_1280.jpg')"
            document.body.style.backgroundPosition = "contain"
            document.body.style.backgroundSize = "cover"
        }
        
    }
}