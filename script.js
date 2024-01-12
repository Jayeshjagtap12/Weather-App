
const options = {
method: 'GET',
headers: {

'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

const getWheather = (city)=>{
    // City_name.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then(response => {
    console.log(response)
    

    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML =response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    // wind_degrees.innerHTML =response.wind_degrees
    sunrise.innerHTML =response.sunrise
    sunset.innerHTML =response.sunset
  
})
.catch(err => console.error(err));
}

// document.getElementById("submit").addEventListener("click" ,(getElementById)=>{

//     e.preventDefault()
//     getWheather(city.value)
// })



getWheather("Nashik")
// --------------------------------------------------------------------------------------------------------------------------
const options1 = {
    method: 'GET',
    headers: {
    
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    };

const getWheather1 = (city)=>{
    // City_name.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options1)
.then(response => response.json())
.then(response => {
    console.log(response)
    

    cloud_pct1.innerHTML = response.cloud_pct
    feels_like_1.innerHTML =response.feels_like
    humidity_3.innerHTML = response.humidity
    max_temp1.innerHTML = response.max_temp
    min_temp1.innerHTML = response.min_temp
    sunrise1.innerHTML =response.sunrise
    sunset1.innerHTML =response.sunset
    temp_3.innerHTML = response.temp
    wind_degrees_1.innerHTML =response.wind_degrees
    wind_speed_3.innerHTML = response.wind_speed
   })
.catch(err => console.error(err));
}

getWheather1("Mumbai")
// -------------------------------------------------------------------------------------------------------------------
const options2 = {
    method: 'GET',
    headers: {
    
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    };

const getWheather2 = (city)=>{
    // City_name.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options1)
.then(response => response.json())
.then(response => {
    console.log(response)
    

    cloud_pct11.innerHTML = response.cloud_pct
    feels_like_11.innerHTML =response.feels_like
    humidity_31.innerHTML = response.humidity
    max_temp11.innerHTML = response.max_temp
    min_temp11.innerHTML = response.min_temp
    sunrise11.innerHTML =response.sunrise
    sunset11.innerHTML =response.sunset
    temp_31.innerHTML = response.temp
    wind_degrees_11.innerHTML =response.wind_degrees
    wind_speed_31.innerHTML = response.wind_speed
   })
.catch(err => console.error(err));
}

getWheather2("Delhi")

// --------------------------------------------------------------------------------------------------------------------------
const options3 = {
    method: 'GET',
    headers: {
    
    'X-RapidAPI-Key': '763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    };

const getWheather3 = (city)=>{
    // City_name.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options3)
.then(response => response.json())
.then(response => {
    console.log(response)
    

    cloud_pct12.innerHTML = response.cloud_pct
    feels_like_12.innerHTML =response.feels_like
    humidity_32.innerHTML = response.humidity
    max_temp12.innerHTML = response.max_temp
    min_temp12.innerHTML = response.min_temp
    sunrise12.innerHTML =response.sunrise
    sunset12.innerHTML =response.sunset
    temp_32.innerHTML = response.temp
    wind_degrees_12.innerHTML =response.wind_degrees
    wind_speed_322.innerHTML = response.wind_speed
   })
.catch(err => console.error(err));
}

getWheather1("kolkata")