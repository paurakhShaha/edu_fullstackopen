import  { useEffect, useState } from 'react'
import WeatherReport from './WeatherReport'
import countriesService from '../services/countriesService'


const ShowDetails = ({searchedCountrie}) =>{
    const [details , setDetails] = useState(null)

    const eventHandler = (resp) => {
      
      const countryName = resp.data.name.common
      const countryCaptial = resp.data.capital
      const countryArea = resp.data.area
      const countryLanguage =Object.values(resp.data.languages)
      const countryFlag = resp.data.flags.png

      const country = {
        name : countryName,
        capital : countryCaptial,
        area: countryArea,
        flag : countryFlag ,
        languages : countryLanguage,
      }
      setDetails(country)
    }

    useEffect(()=>{
        const promise = countriesService.getCountryDetails(searchedCountrie)
        promise.then(eventHandler).catch(err => console.log(err))

    },[searchedCountrie])

    if(details == null){
      return <div> Loading...</div>
    }

  return (
    <> 
      <div key={1}>
        <h1>{details.name}</h1>
        <p>Capital : {details.capital[0]}</p>
        <p>Area : {details.area}</p>
        <p>Languages</p>
         <ul>
      {details.languages.map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul>
        <img src={details.flag}  />
      </div> 
      <div>
        <WeatherReport capital = {details.capital[0]}/>
      </div>
    </>
    
  )
}

export default ShowDetails