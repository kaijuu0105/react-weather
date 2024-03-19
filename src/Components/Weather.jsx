import React, { useState } from 'react'
import './Weather.css'

const Weather = () => {

    const [city, setCity] = useState('tokyo');
    const api_key = "67efc9341b49ab585a9f5d5deb081ce2";
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${api_key}&lang=ja`;

    (async() => {
        let response = await fetch(url);
        if(response.ok){
            let data = await response.json();

            const location = document.getElementById("location");
            const weather = document.getElementById("weather");
            const temp = document.getElementById("todayTemp");
            const minTemp = document.getElementById("todayMinTemp");
            const maxTemp = document.getElementById("todayMaxTemp");
            const humidity = document.getElementById("humidity");
            const wind = document.getElementById("wind");

            location.innerHTML = data.name;
            weather.innerHTML = data.weather[0].description;
            temp.innerHTML = Math.round(data.main.temp) + "℃";
            minTemp.innerHTML = "最低：" + Math.round(data.main.temp_min) + "℃";
            maxTemp.innerHTML = "最高：" + Math.round(data.main.temp_max) + "℃";
            humidity.innerHTML = "湿度：" + data.main.humidity + "%";
            wind.innerHTML = "風速：" + Math.round(data.wind.speed) + "km/h";
            console.log(data.dt);
        } else {
            const location = document.getElementById("location");
            const weather = document.getElementById("weather");
            const temp = document.getElementById("todayTemp");
            const minTemp = document.getElementById("todayMinTemp");
            const maxTemp = document.getElementById("todayMaxTemp");
            const humidity = document.getElementById("humidity");
            const wind = document.getElementById("wind");

            location.innerHTML = "見つかりませんでした";
            weather.innerHTML = "存在する都市名か、スペルミスがないか確認してください";
            temp.innerHTML = "";
            minTemp.innerHTML = "";
            maxTemp.innerHTML = "";
            humidity.innerHTML = "";
            wind.innerHTML = "";
        }
    })();

    const search = () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value === ""){
            return 0;
        }
        setCity(element[0].value) 
  }

    return (
        <div className='container'>
            <div className="topbar">
                <input type="text" className="cityInput" placeholder='都市名' />
                <button className='searchButton' onClick={search}>🔍</button>
            </div>
            <div id="elementLocation">
              <h1 id="location"></h1>                
            </div>
            <div id='elementWeather'>
                <h4 id="weather"></h4>
            </div>
            <div id="elementTemp">
                <h1 id="todayTemp"></h1>
            </div>
            <div id="elementMinTemp" className='inline-block'>
                <p id="todayMinTemp"></p>
            </div>
            <div id="elementMaxTemp" className='inline-block'>
                <p id="todayMaxTemp"></p>
            </div>
            <div>
                <div id="elementHumidity" className='inline-block'>
                    <p id="humidity"></p>    
                </div>
                <div id="elementWind" className='inline-block'>
                    <p id="wind"></p>
                </div>
            </div>
        </div>
    )
}

export default Weather


