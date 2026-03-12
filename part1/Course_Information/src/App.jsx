// const App = () => {

//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }
//   return (
//     <div>
//       <Header  course={course}/>
//       <Content part1 ={part1} part2={part2} part3={part3}/>
//       <Total exercises1 ={part1.exercises } exercises2 ={part2.exercises} exercises3 ={part3.exercises}/>
//     </div>
//   )
// }
//   const Header = (props) =>{
//      console.log(props)
//     return(

//       <h1>{props.course}</h1>
//     )
//   }
//   const Content = (props) =>{
//     return(
//       <>
//         <Part part={props.part1["name"]} exercise={props.part1["exercises"]}/>
//         <Part part={props.part2["name"]} exercise={props.part2["exercises"]}/>
//         <Part part={props.part3["name"]} exercise={props.part3["exercises"]}/>
//       </>
//     )
//   }
//   const Part = (props) =>{
//      console.log(props)
//     return(
//       <p>
//         {props.part} {props.exercise}
//       </p>
//     )
//   }
//   const Total = (props) =>{
//      console.log(props)
//     return(
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     )
//   }

// export default App




//Step-3

// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }
//   return (
//     <div>
//       <Header  course={course}/>
//       <Content part1={part1} part2={part2} part3={part3}/>
//       <Total exercises1 ={part1["exercises"] } exercises2 ={part2["exercises"]} exercises3 ={part3["exercises"]}/>
//     </div>
//   )
// }
//  const Header = (props) =>{
//      console.log(props)
//     return(
//       <h1>{props.course}</h1>
//     )
//   }
//   const Content = (props) =>{
//     return(
//       <>
//         <Part part={props.part1} />
//         <Part part={props.part2} />
//         <Part part={props.part3} />
//       </> 
//     )
//   }
//   const Part = (props) =>{
//      console.log(props)
//     return(
//       <p>
//         {props.part["name"]} {props.part["exercises"]}
//       </p>
//     )
//   }
//   const Total = (props) =>{
//      console.log(props)
//     return(
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     )
//   }


// export default App



// //step 4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]
//   return (
//     <div>
//       <Header  course={course}/>
//       <Content parts={parts}/>
//       <Total parts={parts}/>
//     </div>
//   )
// }
//  const Header = (props) =>{
//      console.log(props)
//     return(
//       <h1>{props.course}</h1>
//     )
//   }
//   const Content = (props) =>{
//     return(
//       <>
//         <Part part={props.parts[0]} />
//         <Part part={props.parts[1]} />
//         <Part part={props.parts[2]} />
//       </>
//     )
//   }
//   const Part = (props) =>{
//      console.log(props)
//     return(
//       <p>
//         {props.part["name"]} {props.part["exercises"]}
//       </p>
//     )
//   }
//   const Total = (props) =>{
//      console.log(props)
//     return(
//       <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
//     )
//   }
// export default App



//Step-5

const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header  course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}
 const Header = (props) =>{
     console.log(props)
    return(
      <h1>{props.course["name"]}</h1>
    )
  }
  const Content = (props) =>{
    return(
      <>
        <Part part={props.course['parts'][0]} />
        <Part part={props.course['parts'][1]} />
        <Part part={props.course['parts'][2]} />
      </>
    )
  }
  const Part = (props) =>{
     console.log(props)
    return(
      <p>
        {props.part["name"]} {props.part["exercises"]}
      </p>
    )
  }
  const Total = (props) =>{
     console.log(props)
    return(
      <p>Number of exercises {props.course['parts'][0].exercises + props.course['parts'][1].exercises + props.course['parts'][2].exercises}</p>
    )
  }
export default App