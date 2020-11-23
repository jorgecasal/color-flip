import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({data}) => {
  return (
  <div>
      <h1>{data}</h1>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Part = ({ type, total }) => {
  return (
        <tr>
          <td>{type}</td>
          <td>{total}</td>
        </tr>
    )
}

const Statistics = ({ parts }) => {
  if( parts[3].total === 0 ){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
<table>
  <tbody>
    <Part 
    type ={parts[0].type}
    total={parts[0].total}
    />
    <Part 
    type ={parts[1].type}
    total={parts[1].total}
    />
    <Part 
    type ={parts[2].type}
    total={parts[2].total}
    />
    <Total parts={parts} />
    <Average parts={parts} />
    <Percentage parts={parts} />
  </tbody>  
</table>
  )
}

const Total = ({parts}) => {
  return (
    <tr>
      <td>{parts[3].type}</td>
      <td>{parts[3].total}</td>
    </tr>
    )
}
const Average = ({parts}) => {
  return (
    <tr>
      <td>{parts[4].type}</td>
      <td>{parts[4].total}</td>
    </tr>
    )
}
const Percentage = ({parts}) => {
  return (
    <tr>
      <td>{parts[5].type}</td>
      <td>{parts[5].total}</td>
    </tr>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = newValue => {
    setGood(newValue)
  }
  const addNeutral = newValue => {
    setNeutral(newValue)
  }
  const addBad = newValue => {
    setBad(newValue)
  }
  const data = {
    title: 'give feedback',
    subtitle: 'statistics',
    parts: [
      {
        type: 'good',
        total: good
      },
      {
        type: 'neutral',
        total: neutral
      },
      {
        type: 'bad',
        total: bad
      },
      {
        type: 'all',
        total: (good + neutral + bad)
      },
      {
        type: 'average',
        total: ((good - bad) / 10)
      },
      {
        type: 'positive',
        total: (good * 100 / (good + neutral + bad))
      }
    ]
  }

  return (
    <div>
      <Header data={data.title} />
      <Button handleClick={() => addGood(good + 1)} text="good" />
      <Button handleClick={() => addNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => addBad(bad + 1)} text="bad" />
      <Header data={data.subtitle} />
      <Statistics parts={data.parts} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
