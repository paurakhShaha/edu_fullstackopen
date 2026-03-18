import { useState, useEffect } from 'react'
import Search from './components/Search'
import PersonList from './components/PersonList'
import Form from './components/Form'
import phonebookServices from './services/phonebook'
import './index.css'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(()=>{
    const eventHandler = response => {
         setPersons(response.data)
    }
    const promise = phonebookServices.getAll()
    promise.then(eventHandler).catch(() => {
         setNewMessage("Error geting data from the server")
        setIsError(true)
      })
  },[])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [isError,setIsError] = useState(null)


  const handelOnChangeName = (e)=>{
    setNewName( e.target.value )
  }
   const handelOnChangeNumber = (e)=>{
    setNewNumber( e.target.value )
  }
  const onSubmitName=(event)=>{
    event.preventDefault()
    const eventCreateHandler = response => {
        setPersons(persons.concat(response.data))
        setNewMessage(`${response.data.name} user has been created`)
        setIsError(false)
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
    }
    const eventPutHandler = response => {
        setPersons(persons.map(person => person.id === response.data.id ? response.data : person))
        setNewMessage(`${response.data.name} user has been changed`)
        setIsError(false)
        setTimeout(() => {
          setNewMessage(null)
        }, 5000)
    }
    const names = persons.map(person => person.name)
    const isNewName = !names.includes(newName);
    if(!isNewName){
      if (window.confirm(newName + " Person with this name already exist in phone book do you want to replace the number")) {
        const nPerson = persons.find(person => person.name === newName)
        const newPerson = {name:newName , number: newNumber ,id : nPerson["id"]}
        const promise = phonebookServices.put(newPerson)
        promise.then(eventPutHandler).catch((err) => {
          setNewMessage("Error createing data in the server."+err)
          setIsError(true)
          setTimeout(() => {
          setNewMessage(null)
        }, 5000)
        })
        setNewName("")
        setNewNumber("")
      } 
    }else{
      const newPerson = {name : newName,number:newNumber,id:`${Date.now()}`}
      const promise = phonebookServices.create(newPerson)
      promise.then(eventCreateHandler).catch(() => {
         setNewMessage("Error creating data in the server")
         setIsError(true)
         setTimeout(() => {
          setNewMessage(null)
        }, 5000)
      })
      setNewName("")
      setNewNumber("")
    }
  }

  const onClickDel =(id) =>{
     const eventHandler = response => {
      const nonDelPersons = persons.filter(person => person.id !== response.data.id)
      setPersons(nonDelPersons)
      setNewMessage(`${response.data.name} User deleted`)
      setIsError(false)
    }
    if (window.confirm("Do you want to delete this number?")) {
      const data = phonebookServices.del(id).then(eventHandler).catch(() => {
         setNewMessage("Error deleting data in the server")
         setIsError(true)
         setTimeout(() => {
          setNewMessage(null)
        }, 5000)
      })
    } 
   
    
    
  }
  return (
    <div>
      <h2>Phonebook</h2>
      {isError===null?<></>:<Notification message={newMessage} isError={isError}/>}
      <Search persons={persons}/>
      <br />
      <Form onSubmitName={onSubmitName} newName={newName} newNumber={newNumber} handelOnChangeName={handelOnChangeName} handelOnChangeNumber={handelOnChangeNumber}/>
      <h2>Numbers</h2>
      <PersonList  onClickDel={onClickDel} persons={persons}/>
    </div>
  )
}

export default App