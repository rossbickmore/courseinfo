import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}


const Content = (props) => {
    console.log(props)
    return (
        <div>
            {props.parts.map(part => <p key={part.id}>{part.name} {part.exercises} </p>)}
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Total of {props.total} exercises</p>
    )
}


const Course = (props) => {
    console.log(props)
    return (
        <div>
        <Header course={props.course} />
        <Content parts={props.course.parts} />
        <Total total={props.total}/>
        </div>
    )
}


const App = () => {
    const course = {
      name: 'Half Stack application development',
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
            exercises: 10,
            id: 4
          }
      ]
    }

    const total = course.parts.reduce( (s, p) => {
        console.log('what is happening', s, p)
        return s + p.exercises
      },0)

    return (
      <div>
        <Course course={course} total={total}/>
      </div>
    )
  }



ReactDOM.render(<App />, document.getElementById('root'))