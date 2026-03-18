import React from 'react'

function Form({onSubmitName,newName,newNumber,handelOnChangeName,handelOnChangeNumber}) {
  return (
    <>
     <form onSubmit={onSubmitName}>
        <div>
          name: <input value={newName} onChange={handelOnChangeName}/>
          <br />
          number: <input value={newNumber} onChange={handelOnChangeNumber}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
    </>
  )
}

export default Form