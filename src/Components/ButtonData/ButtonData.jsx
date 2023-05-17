import React from 'react'
import './ButtonData.scss'
const ButtonData = ({label, customStyle}) => {
  return (
    <button className={customStyle ? 'btnData seats' : 'btnData'}>{label}</button>
  )
}

export default ButtonData