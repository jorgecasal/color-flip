import React from 'react';

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

  export default Course
