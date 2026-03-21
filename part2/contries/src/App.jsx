import { useState } from 'react'
import countriesData from '../countries.json'
import CountriesList from './components/CountriesList'


function App() {

  const countries = countriesData.countries
  const [searchedValue , setSearchedValue] = useState('')
  const [searchedCountries , setSearchedCountries] =  useState([])
  const [isMany,setIsMany] = useState(false)

  const onCountriesChange = (e) => {
    const search = e.target.value
    setSearchedValue(search)
    const result = countries.filter(country => country.toLowerCase().includes(search.toLowerCase()) )
    setSearchedCountries(result)
    if (result.length > 10) {
      setIsMany(true)
    } else {
      setIsMany(false)
    }
  }
  //console.log(searchedCountries)
  return (
    <>
    <h1>Countries</h1>
    <input type="text" onChange={(e) => onCountriesChange(e)} />
    <CountriesList searchedCountries={searchedCountries} isMany={isMany}/>
    
    </>
  )
}

export default App
