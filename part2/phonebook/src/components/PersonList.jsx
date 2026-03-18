import React from 'react'

function PersonList({persons, onClickDel}) {
  return (
    <ul>{persons.map((person) => <li key={person["id"]}>{person["name"]} {person["number"]} <button onClick={() => onClickDel(person["id"])} type="button">Delete</button></li>)}  </ul>
  )
}

export default PersonList