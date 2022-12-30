import React from 'react'

export default function ScoreBoard(props) {

  return (
    <div className='container p-4 justify-items-center text-2xl '>
      {/* <button onClick={handleClick}>click me</button> */}
      <h3 className='text-center'>Your Score : {props.score} </h3>
      <h3 className='text-center'>Your Best : {props.bestScore} </h3>
    </div>
  )
}
