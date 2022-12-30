import React, { useState } from 'react'
import CardDetails from './CardDetails'
import ScoreBoard from './ScoreBoard'
import cardData from './Data'


export default function Game() {
  //shuffling cards
  const shuffleCard = () => {
    let tempArray = cardArray.slice()
    for (let i = cardArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return setCardArray(tempArray)
  }
  //event handle after click
  const handleClick = (e) => {
    const clickedCard = e.target.lastChild.textContent;
    shuffleCard();
    handleScore(clickedCard);
  }

  //score handling
  const [score, setScore] = useState(0)
  const [clickedArray, setClickedArray] = useState([])
  const [bestScore, setBestScore] = useState(0)

  const handleScore = (clickedCard) => {
    if (clickedArray.includes(clickedCard)) {
      resetGame();
    }
    else {
      const newScore = score + 1;
      if (newScore > bestScore) {
        setBestScore(newScore)
      }
      setScore(newScore);
      setClickedArray((prevState) => [...prevState, clickedCard])
    }
  }

  //resetting game
  function resetGame() {
    setClickedArray([])
    setScore(0);
  }

  const [cardArray, setCardArray] = useState(cardData)
  return (
    <div className='flex-col'>
      <ScoreBoard score={score} bestScore={bestScore} />
      <div className="container w-11/12 min-w-min border-2 border-orange-300 rounded-lg h-full backdrop-blur bg-white/10 ">
        <div className=' grid grid-cols-6 gap-8 box-border p-8'>
          {cardArray.map((element, index) => {
            return <div className='card-container cursor-pointer h-fit px-3 flex-col justify-center' key={index} onClick={handleClick} >
              <CardDetails photo={element.image} name={element.name} />
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
