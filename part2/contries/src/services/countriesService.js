import axios from "axios";
const apiKey =import.meta.env.VITE_API_KEY 
const weatherApiUrl = "https://api.openweathermap.org/"
const countryApiUrl = "https://studies.cs.helsinki.fi/restcountries/api/name/"

const getCountryDetails = (country) =>{
   
    const promise = axios.get(countryApiUrl+country)
    return promise
}

const getWeatherDetails = (capital) =>{
    const promise = axios.get(weatherApiUrl+`data/2.5/weather?q=${capital}&appid=${apiKey}`)
    return promise
}

export default { 
 getCountryDetails,
 getWeatherDetails
} 