import React, {useState,useEffect} from 'react';
import Aatrox from './images/Aatrox.png';
import Ahri from './images/Ahri.png';
import Akali from './images/Akali.png';
import Akshan from './images/Akshan.png';
import Alistar from './images/Alistar.png';
import Amumu from './images/Amumu.png';
import Anivia from './images/Anivia.png';
import Annie from './images/Annie.png';
import Aphelios from './images/Aphelios.png';
import Ashe from './images/Ashe.png';
import AurelionSol from './images/AurelionSol.png';
import Azir from './images/Azir.png';
import Bard from './images/Bard.png';
import BelVeth from './images/Belveth.png';
import Blitzcrank from './images/Blitzcrank.png';
import Brand from './images/Brand.png';

export default function Cards({addScore, resetScore}) {
    const champions = [
        {
            champion: "Aatrox",
            image: Aatrox,
        },
        {
            champion: "Ahri",
            image: Ahri,
        },
        {
            champion: "Akali",
            image: Akali,
        },
        {
            champion: "Akshan",
            image: Akshan,
        },
        {
            champion: "Alistar",
            image: Alistar,
        },
        {
            champion: "Amumu",
            image: Amumu,
        },
        {
            champion: "Anivia",
            image: Anivia,
        },
        {
            champion: "Annie",
            image: Annie,
        },
        {
            champion: "Aphelios",
            image: Aphelios,
        },
        {
            champion: "Ashe",
            image: Ashe,
        },
        {
            champion: "Aurelion Sol",
            image: AurelionSol,
        },
        {
            champion: "Azir",
            image: Azir,
        },
        {
            champion: "Bard",
            image: Bard,
        },
        {
            champion: "Belveth",
            image: BelVeth,
        },
        {
            champion: "Blitzcrank",
            image: Blitzcrank,
        },
        {
            champion: "Brand",
            image: Brand,
        },
    ]

    const [championsCards, setChampionCards] = useState([].concat(champions));
    const [clickedChampion, setClickedChampion] = useState([]);

    useEffect(() => {
        shuffleCard(); // eslint-disable-next-line
    },[])

    function changeScore(e){
        let imageName = e.target.dataset.imageName; 
        if(!clickedChampion.includes(imageName)){
            setClickedChampion(clickedChampion.concat(imageName));
            addScore();
        } else {
            setClickedChampion([]);
            resetScore();
        }
        shuffleCard();
    }

    function shuffleCard(){
        let currentIndex = champions.length, randomIndex;
        while(currentIndex > 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [champions[currentIndex], champions[randomIndex]] = [champions[randomIndex], champions[currentIndex]];
        }
        setChampionCards([].concat(champions));
        console.log(clickedChampion);
    }

    return (
        <div className="cards">
            { championsCards.map((championCard) =>{
                return <img src={championCard.image} alt={championCard.champion} onClick={changeScore} data-image-name={championCard.champion}/>
            })}
        </div>
  )
}
