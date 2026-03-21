const Course = ({course}) => {
  
  return(
    <>
      <Header name = {course["name"]}/>
      <Content content = {course["parts"]}/>
      <Total parts ={course["parts"]}/>

    </>
  )
}

const Header = ({name}) => {
  return(
    <>
      <h1>{name}</h1>
    </>
  )
}
const Content =({content})=>{ 
 
  return(
    <>
    <ul>
      {
        content.map((part)=> <Part  key={part.id} part={part}/>)
      }
    </ul>
      
    </>
  )
}
const Part = ({part}) => {
  return(
    <>
      <li>{part["name"]} {part["exercises"]}</li>
    </>
  )
}

const Total = ({parts})=>{
  return (
    <>
      <p>Total {parts.reduce(function(sum,part){
          return sum = sum + part["exercises"]
      },0)
      }</p>
    </>
  )
 
}

export default Course ;
