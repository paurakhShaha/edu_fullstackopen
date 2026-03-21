import  { useEffect, useState } from 'react'
import countriesService from '../services/countriesService'

function WeatherReport({capital}) {
    const [details , setDetails] = useState(null)
    const eventHandler = (resp) => {
      const weather = resp.data.weather[0].description
      const temp = resp.data.main.temp - 273.15
      const icon = resp.data.weather[0].icon
      const wind = resp.data.wind.speed

      const weatherDetails = {
        weather,
        temp :  Math.ceil(temp * 100) / 100,
        icon,
        wind
      }
      setDetails(weatherDetails)
    }
    useEffect(() => {
        const promise = countriesService.getWeatherDetails(capital)
        promise.then(eventHandler).catch(err => console.log(err))
    },[])
    if(details == null) {
        return <div> Loading WeatherReport...</div>
    }
  return (
    <>
        <div>
            <h1>Weather in {capital}</h1>
            <p>Temperature {details.temp} Celsius</p>
            <img src={`https://openweathermap.org/payload/api/media/file/${details.icon}.png`} alt="" />
            <p>Wind {details.wind} m/s</p>
        </div>
    </>
  )
}

export default WeatherReport