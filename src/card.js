import React from 'react'

const Card = (props) => {
  const { image, title } = props
  console.log(props)
  return (
    <li className='card--item'>
      <img src={image} alt={title} />
    </li>
  )
}

export default Card
