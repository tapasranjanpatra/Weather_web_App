
const apiKey = "7hGeRgN3yvigTYH3PHHS3WD0AQKTAQm3";
const apiUrl = "https://api.tomorrow.io/v4/weather/realtime?location=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityname = document.querySelector('.cityname'); 
const temp = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windSpeed');
const windDirection = document.querySelector('.windDirection');


async function checkWeather(city) {
    const finalApiUrl = apiUrl + city + `&apikey=${apiKey}`;

    

        const xhr = new XMLHttpRequest();
        xhr.open('GET',finalApiUrl,true);

        xhr.onload = function(){
            if(this.status === 200){
                let obj = JSON.parse(this.responseText);
                const weatherData = obj.data.values;
                const location = obj.location;
                

               
                cityname.innerHTML = `${location.name}`;
                temp.innerHTML = `${weatherData.temperature}°C`;
                humidity.innerHTML = `${weatherData.humidity}%`;
                windDirection.innerHTML = `${weatherData.windDirection}°`;
                windSpeed.innerHTML = `${weatherData.windSpeed}km/h`
                console.log(location.name);
                console.log(temp.innerHTML); 
                console.log(humidity.innerHTML); 

                
            }
        }

        xhr.send();
       
    }

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
