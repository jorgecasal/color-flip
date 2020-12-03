import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdote }) => (
  <div>
    {anecdote}
  </div>
)

const Total = ({total}) => {
  return (
    <div>
      has {total} votes
    </div>
    )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {

  const arrayCreator = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0)

  const random =() => { return Math.floor(Math.random() * Math.floor(arrayCreator.length))
  }

  const [selected, setSelected] = useState(0)
  const addSelected = newValue => {
    setSelected(newValue)
  }
  const anecdote = () => {
    addSelected(random)
  }

  const vote= () => {
    addVote(random)
    for (let i = 0; i < anecdotes.length; i++) {
      if (anecdotes[selected] === anecdotes[i]){
        points[i] += 1
      }
    }
    console.log(anecdotes[selected])
    console.log(points[selected])
    console.log(points)
  }

  const [votes, setVote] = useState(0)
  const addVote = newValue => {
    setVote(newValue)
  }




  return (
    <div>
      <Anecdote anecdote={anecdotes[selected]} />
      <Total total={points[selected]} />
      <Button handleClick={vote} text="vote" />
      <Button handleClick={anecdote} text="next anecdote" />

    </div>
  )
}

const points = [0, 0, 0, 0, 0, 0]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)