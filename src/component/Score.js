import React from 'react';

export default function Score({currentScore,maxScore}) {
  return (
    <div>
        <p>Current Score: </p>
        <p>{currentScore}</p>
        <p>Highest Score: </p>
        <p>{maxScore}</p>
    </div>
  )
}

