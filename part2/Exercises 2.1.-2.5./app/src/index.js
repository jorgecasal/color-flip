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
  // console.log(part.course.map((x, i) => console.log(x.name, x.exercises, i)))
  // part.course.map((x, i) => console.log(x.name, x.exercises, i))
  return part.course.map((x, i) => {
    let name = x.name
    let excercise = x.exercises 
    let key = i
    return (
      <p key={key}> 
      {name}{excercise}
      </p>    
    )
  }
    )
  // return (
  //   <p key={key}> 
  //   {name}{excercise}
  //   </p>    
  // )
}

const Content = (props) => {
  // console.log(course.parts.map((x) => x))

  return (
    <div>
         {/* {course.map((note, i) => 
    <Part key={i}>
      {course.parts[i]}
    </Part>
  )} */}
      {/* <Part part={course.parts[0]} />
      <Part part={course.parts[1]} /> */}
      <Part part={props} />
    </div>
  )
}

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
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


  return (
    <div>
    <Course course={courses[0]} />
    <Course course={courses[1]} />
    </div>
  )
}


// notes.map(note =>
//   <li key={note.id}>{note.content}</li>
// )

// const App = () => {
//   const course = {
//     id: 1,
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       },
//       {
//         name: 'Redux',
//         exercises: 11,
//         id: 4
//       }
//     ]
//   }

//   return <Course course={course} />
// }

ReactDOM.render(<App />, document.getElementById('root'))