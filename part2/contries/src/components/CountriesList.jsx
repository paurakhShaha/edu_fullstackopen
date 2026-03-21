import { useState,useEffect } from 'react'
import ShowDetails from './ShowDetails'

const CountriesList = ({searchedCountries , isMany}) => {
    const [showDetail,setShowDetail] = useState(false)
    const [searchedCountrie,setSearchedCountrie] = useState(null)
      useEffect(() => {
    if (searchedCountries.length === 1) {
      setShowDetail(true)
      setSearchedCountrie(searchedCountries[0])
       console.log(searchedCountries)
    } else {
      setShowDetail(false)
    }
  }, [searchedCountries])
    
    const onClckShow =(country)=> {
        setSearchedCountrie(country)
        setShowDetail(true)
        console.log(country)
        
    }
    console.log('cl ' + showDetail)
  return (
    <>
        {!showDetail ? (
            isMany ? (
                <p>Too many matches, specify another filter</p>
            ) : (
                searchedCountries.map(country => (
                <div key={country}>
                    <p>
                    {country}  <button onClick={() => onClckShow(country)}>Show</button>
                    </p>
                </div>
                ))
            )
            ) : (
            <ShowDetails searchedCountrie={searchedCountrie} />
         )}

    </>
  )
}

export default CountriesList