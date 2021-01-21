import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const total = course.parts.reduce((s, parts) => {
    return s + parts.exercises
  }, 0)
  return(
    <p>Number of {total} exercises</p>
  ) 
}

const Part = ({part}) => {
  return part.course.map((x, i) => {
    let name = x.name
    let exercise = x.exercises 
    let key = i
    return (
      <p key={key}> 
      {name}{exercise}
      </p>    
    )
  }
    )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props} />
    </div>
  )
}

const Course = ({ course }) => {
    return (
      <div key={course.id}>
        <Header  course={course} />
        <Content course={course.parts.map((x) => x)} />
        <Total course={course} />
      </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map((course) => {
  return (
      <div key={course.id}>
      <Course course={course}/>
      </div>
      )})
}

ReactDOM.render(<App />, document.getElementById('root'))