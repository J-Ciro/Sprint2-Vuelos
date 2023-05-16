import React from 'react'

const ButtonData = ({label, className}) => {
  return (
    <button className={`btnData ${className} `}>{label}</button>
  )
}

export default ButtonData