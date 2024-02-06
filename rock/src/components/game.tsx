import { useState, useEffect } from 'react';
import './game.css';
import rock from '../assets/Skærmbillede 2024-02-05 214423.png';
import pap from '../assets/hest 2.png';
import sis from '../assets/sis.png';

function Game() {
    const [youreHand, setYoureHand] = useState("");
    const [youreHandImage, setYoureHandImage] = useState("");
    const [enemenyHandImage, setEnemyHandImage] = useState("");
    const choices = ["Rock", "Paper", "Scissors"];
    const [enemyHand, setEnemyHand] = useState("");
    const [result, setResult] = useState("");
    const [score, setScore] = useState(0);
    const [enemyScore, setEnemyScore] = useState(0);

    useEffect(() => {
        checkWinner();
    }, [youreHand, enemyHand]);

    function hånd(handType: string) {
        setYoureHand(handType);
        setPictures(handType,"you")
        getEnemyhand();
    }

    function setPictures(handType: string, player: string) {
        switch (handType) {
            case "Rock":
                if (player === "you") {
                    setYoureHandImage(rock);
                } else if (player === "enemy") {
                   setEnemyHandImage(rock);
                }
                break;
            case "Paper":
                if (player === "you") {
                    setYoureHandImage(pap);
                } else if (player === "enemy") {
                  setEnemyHandImage(pap);
                }
                break;
            case "Scissors":
                if (player === "you") {
                    setYoureHandImage(sis);
                } else if (player === "enemy") {
                   setEnemyHandImage(sis);
                }
                break;
            default:
                setYoureHandImage("");
                setEnemyHand("");
                break;
        }
    }
    

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    function getEnemyhand() {
        const hand = choices[getRandomInt(3)];
        setEnemyHand(hand);
        setPictures(hand,"enemy")
    }
    function emHandCheck(hand : string)
    {
        setResult(enemyHand === hand ? "You win" : "You lose");
                    setScore((prevScore) => prevScore + (enemyHand === hand ? 1 : 0));
                    setEnemyScore((prevEnemyScore) => prevEnemyScore + (enemyHand === hand ? 0 : 1));
    }

    function checkWinner() {
        if (youreHand === enemyHand) {
            setResult("TIE!");
        } else {
            switch (youreHand) {
                case "Rock":
                    setResult(enemyHand === "Scissors" ? "You win" : "You lose");
                    setScore((prevScore) => prevScore + (enemyHand === "Scissors" ? 1 : 0));
                    setEnemyScore((prevEnemyScore) => prevEnemyScore + (enemyHand === "Scissors" ? 0 : 1));

                    break;
                case "Paper":
                    setResult(enemyHand === "Rock" ? "You win" : "You lose");
                    setScore((prevScore) => prevScore + (enemyHand === "Rock" ? 1 : 0));
                    setEnemyScore((prevEnemyScore) => prevEnemyScore + (enemyHand === "Rock" ? 0 : 1));
                    break;
                case "Scissors":
                    setResult(enemyHand === "Paper" ? "You win" : "You lose");
                    setScore((prevScore) => prevScore + (enemyHand === "Paper" ? 1 : 0));
                    setEnemyScore((prevEnemyScore) => prevEnemyScore + (enemyHand === "Paper" ? 0 : 1));
                    break;
                default:
                    setResult("Invalid hand");
                    break;
            }
        }
    }
    function resetscore()
    {
        setEnemyScore(0);
        setScore(0);
    }

    return (
        <div className='container'>
            <div className='choices'>
                <input id='sten' type='image' src={rock} alt="Rock" onClick={() => hånd("Rock")} />
                <input id='saks' type="image" src={sis} alt="Scissors" onClick={() => hånd("Scissors")} />
                <input id='papair' type="image" src={pap} alt="Paper" onClick={() => hånd("Paper")} />
            </div>
            <div className='score-container'>

                <label id='score-label' htmlFor="text">Din score: {score}</label>
                <label id='score-label' htmlFor="text">Modstanders score: {enemyScore}</label>
                <div className='reset-button'>
                    <input onClick={resetscore} id='reset-button2' type='button' value={"Reset score "} />
                </div>
              

            </div>
            <div className='game-board'>
                <div className='youre-hand'>
                    {youreHandImage && <img id='hånd-billede' src={youreHandImage} width={450} height={350} alt={youreHand} />}
                </div>
                <div className='modstander-hand'>
                {youreHandImage && <img src={enemenyHandImage}id='hånd-billede' width={450} height={350} alt={enemyHand} />}
                </div>
                <div className='vs'>
                    <h1>VS</h1>
                </div>
            </div>
        </div>
    );
}

export default Game;
