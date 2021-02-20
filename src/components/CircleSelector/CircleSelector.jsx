import React, {useState} from 'react'
import './CircleSelector.css'



const CircleSelector = (props) => {

return (
  <>
  <div className='CircleSelector'>
    <button className={props.b1 && 'selected'} onClick={() => {
      if (props.b1 === false) {
        props.setB1Toggle(!props.b1)
        props.setB2Toggle(false)
        props.setB3Toggle(false)
        props.setB4Toggle(false)
      }
    }}>{props.b1 ? 'CIRCLE 1 SELECTED' : 'SELECT CIRCLE 1'}</button>
    <button className={props.b2 && 'selected'} onClick={() => {
      if (props.b2 === false) {
        props.setB1Toggle(false)
        props.setB2Toggle(!props.b2)
        props.setB3Toggle(false)
        props.setB4Toggle(false)
      }
    }}>{props.b2 ? 'CIRCLE 2 SELECTED' : 'SELECT CIRCLE 2'}</button>
    <button className={props.b3 && 'selected'} onClick={() => {
      if (props.b3 === false) {
        props.setB1Toggle(false)
        props.setB2Toggle(false)
        props.setB3Toggle(!props.b3)
        props.setB4Toggle(false)
      }
    }}>{props.b3 ? 'CIRCLE 3 SELECTED' : 'SELECT CIRCLE 3'}</button>
    <button className={props.b4 && 'selected'} onClick={() => {
      if (props.b4 === false) {
        props.setB1Toggle(false)
        props.setB2Toggle(false)
        props.setB3Toggle(false)
        props.setB4Toggle(!props.b4)
      }
    }}>{props.b4 ? 'CIRCLE 4 SELECTED' : 'SELECT CIRCLE 4'}</button>
  </div>
  </>
)

}

export default CircleSelector