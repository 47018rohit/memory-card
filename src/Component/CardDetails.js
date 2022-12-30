import React from 'react'

export default function CardDetails(props) {

  return (

    <div className="card flex flex-col justify-center  text-center py-2">
      <img className='my-4 h-60 -z-10 place-self-center'  src={props.photo} alt="" />
      {props.name}
    </div>

  )
}
