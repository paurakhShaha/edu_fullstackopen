import { useState } from 'react'

const Search = ({persons})=>{
    const [newSearchName, setSearchName] = useState('')
    const [filterPersons, setFilterPersons] = useState([])
    

     const handelOnChangeName = (e)=>{
        setSearchName( e.target.value )
     }
     const onSubmit=(e)=>{
        e.preventDefault()
        const filter = persons.filter(persons => persons.name.toLowerCase().startsWith(newSearchName.toLowerCase()))
        setFilterPersons(filter)     
     }
    return(
        <>
        <h1>Search</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={newSearchName} onChange={handelOnChangeName}/>
            <button type="submit">Search</button>
        </form>
        <br />
        {filterPersons.length > 0 ?filterPersons.map(person => <p key={person.id}>{person.name} : {person.number}</p>):<p>No Person found with this name</p>}
        
        </>
    )

}

export default Search