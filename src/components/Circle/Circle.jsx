import React from 'react'
import './Circle.css'

const Circle = (props) => {

return (
  <div className='Circles'>
    <div className={props.b1 ? 'Circles selected' : 'Circles'}>1</div>
    <div className={props.b2 ? 'Circles selected' : 'Circles'}>2</div>
    <div className={props.b3 ? 'Circles selected' : 'Circles'}>3</div>
    <div className={props.b4 ? 'Circles selected' : 'Circles'}>4</div>
  </div>
)

}

export default Circle