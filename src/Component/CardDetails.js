import React from 'react'

export default function CardDetails(props) {

  return (

    <div className="card flex-col self-center">
      <img className='w-30 h-40' src={props.photo} alt="" />
      {props.name}
    </div>

  )
}
