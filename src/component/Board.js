import React, {useState} from 'react';
import Cards from "./Cards";
import Score from "./Score";

export default function Board() {
  const [score, setScore] = useState({
    currentScore: 0,
    maxScore: 0,
  });

  function addScore(){
    console.log(score);
    setScore({
      currentScore: score.currentScore + 1,
      maxScore: score.maxScore > score.currentScore ? score.maxScore : score.currentScore + 1,
    });
  }

  function resetScore(){
    setScore({
      currentScore: 0,
      maxScore: score.maxScore,
    });
  }

  return (
    <div className="board">
      <Cards addScore={addScore} resetScore={resetScore}/>
      <Score currentScore={score.currentScore} maxScore={score.maxScore}/>
    </div>
  )
}
