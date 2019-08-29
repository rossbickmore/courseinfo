import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
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
    const course = 'Half Stack application development'
    const parts = [
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
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  
    return (
      <div>
        <Header course={course}/>
        <Content part={parts} />
        <Total total={total} />
      </div>
    )
  }


ReactDOM.render(<App />, document.getElementById('root'))