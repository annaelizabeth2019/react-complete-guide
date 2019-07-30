import React from 'react'

const person = (props) => {
  return (
    <div>
      <p>I'm a Person! and I am {props.age} years old and my name is {props.name}</p>
      <p>{props.children}</p>
    </div>
  )
  return 
}

export default person