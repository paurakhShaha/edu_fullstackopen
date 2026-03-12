//Exercises 1.6.-1.14.
import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avreage , setAverage] = useState(0)
  const [total, setTotal] = useState(0)
  const [positive,setPositve] =useState(0)
  
  const increaseGoodRating = ()=> {
    setGood((prev) => prev = prev+1)
    const updatedGood = good+1
   setTotal((prev) => prev = prev+1)
    setAverage((updatedGood - bad) / (updatedGood+bad+neutral))
    setPositve((updatedGood) / (updatedGood+bad+neutral))
  }
  const increaseNeutralRating = ()=>{
    setNeutral((prev) => prev+1)
    const updatedNeutral = neutral+1
    setTotal((prev) => prev = prev+1)
    setAverage((good - bad) / (bad+good+updatedNeutral))
    setPositve((good) / (good+bad+updatedNeutral))
  }
  const increaseBadRating = ()=> {
    setTotal((prev) => prev = prev+1)
    setBad((prev) => prev = prev+1)
    const updatedBad = bad+1
    setPositve((good) / (good+updatedBad+neutral))
    setAverage((good - updatedBad) / (updatedBad+good+neutral))
  }

 

  return (
    <>
    <h1>Give Feedback</h1>
     <Button onClick={increaseGoodRating} value="good" />
     <Button onClick={increaseNeutralRating} value="neutral" />
     <Button onClick={increaseBadRating} value="bad" />

     <h1>Stats</h1>
     <Statistic good = {good} bad = {bad} neutral = {neutral} avreage = {avreage} total = {total} positive = {positive}/>

    </>
  )
}
const Button = (props) => {
  return(
    <>
   <button onClick={props.onClick}>
    <p>{props.value}</p>
   </button>
    </>
  )
}
const Statistic = (props) => {
  if(props.total === 0){
    return(
      <>
      <p>No Feedback to show</p>
      </>
    )
  }

  return(
    <>
    <table>
      <tbody>
      <tr>
        <StatisticLine text="good" value={props.good}/>
      </tr>
      <tr>
         <StatisticLine text="good" value={props.good}/>
      </tr>
      <tr>
        <StatisticLine text="neutral" value={props.neutral}/>
      </tr>
      <tr>
        <StatisticLine text="total" value={props.total}/>
      </tr>
      <tr>
        <StatisticLine text="avreage" value={props.avreage.toFixed(2)}/>
      </tr>
      <tr>
        <StatisticLine text="positive" value={(props.positive * 100).toFixed(1)}/>
      </tr>
      </tbody>
    </table>
    </>
  )
}
const StatisticLine = (props) => {
 if(props.text === "positive" ){
  return (
     <>
      <th>{props.text} </th><th>{props.value}%</th>
    </>
  )
 }
  return(
    <>
      <th>{props.text} </th><th>{props.value}</th>
    </>
  )
}


export default App
