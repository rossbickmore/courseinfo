import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>
            {props.part.name} {props.part.exercises} 
        </p>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
        <Part part={props.part[0]} /> 
        <Part part={props.part[1]} /> 
        <Part part={props.part[2]} /> 
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.total}</p>
    )
}



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
    
    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  
    return (
      <div>
        <Header course={course}/>
        <Content part={course.parts} />
        <Total total={total} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))