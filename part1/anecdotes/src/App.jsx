import { useState } from 'react'

const App = () => {


  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [index ,setIndex] = useState(0)
  const [vote, setVote] = useState(Array(8).fill(0))

  const nextSelected = ()=>{ 
    const randomIndex = Math.floor(Math.random() * 8)
    setIndex(randomIndex)
    setSelected(randomIndex)
  }
   const increaseVote = () => {
      const copy = [...vote]
      copy[index] += 1
      setVote(copy)
    }
    console.log(index)
    console.log(vote)
  return (
    <div>
      <h1>Anecdotes of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has vote {vote[index]}</p>
      <Button onClick={increaseVote} text="Vote"/>
      <Button onClick={nextSelected} text="Next"/>
      <br />
      <h1>Anecdotes with most vote</h1>
      <p>{anecdotes[vote.indexOf(Math.max(...vote))]}</p>
      <p>has vote {vote[vote.indexOf(Math.max(...vote))]}</p>
    </div>
  )
}

const Button = (props)=>{
 return(
  <>
  <button onClick={props.onClick}>
    {props.text}
  </button>
  </>
 )
}
export default App