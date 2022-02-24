import './App.css';
import {Wheel} from 'react-custom-roulette'
import {useState} from "react";
import axios from "axios";

function App() {
    const [winnerIndex, setWinnerIndex] = useState(null)
    const [spin, setSpin] = useState(false)
    const data = [
        {option: '1 Free Spin', style: {backgroundColor: 'white', textColor: 'black'}},
        {option: '2 Game', style: {backgroundColor: '#9933CC', textColor: 'white'}},
        {option: '1 Transfer', style: {backgroundColor: 'Orange', textColor: 'white'}},
        {option: '1 Hard Luck', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '4 Voting', style: {backgroundColor: '#002366', textColor: 'white'}},
        {option: '1 Insurance', style: {backgroundColor: '#800080', textColor: 'white'}},
        {option: '2 Prediction', style: {backgroundColor: '#367588', textColor: 'white'}},

        {option: '8 Free Spin', style: {backgroundColor: 'white', textColor: 'black'}},
        {option: '9 Game', style: {backgroundColor: '#9933CC', textColor: 'white'}},
        {option: '10 Transfer', style: {backgroundColor: 'Orange', textColor: 'white'}},
        {option: '11 Hard Luck', style: {backgroundColor: 'black', textColor: 'white'}},
        {option: '12 Voting', style: {backgroundColor: '#002366', textColor: 'white'}},
        {option: '13 Insurance', style: {backgroundColor: '#800080', textColor: 'white'}},
        {option: '14 Prediction', style: {backgroundColor: '#367588', textColor: 'white'}},

    ]

    const handleCompleteSpin = () => {
        alert("complete spin")
    }

    const handleStartSpin = () => {
        getWinnerIndex()
    }

    const getWinnerIndex = () => {

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY3MzJlYjliLWY5YjQtNDIzYy1hOTJhLWUwOWUwZjZkODkyNCIsImVtYWlsIjoiYWJpc2hla0BibG9ja3N0YXJ0Lm9uZSIsIm9wZXJhdG9ySWQiOjEsImlhdCI6MTY0NTY5NjY4NSwiZXhwIjoxNjQ2MzAxNDg1fQ.P6aCyxItHS1Kbo0vYt93thsWIkoulGI5p57yF0ohWXo'
        }

        const apiUrl = "https://testapi.owens.market/third-party/lockupp/run-wheel"

        axios.post(apiUrl, {}, {
            headers: headers
        }).then((res) => {
            console.log("res", res?.data?.cardWon)
            setWinnerIndex(res?.data?.cardWon)
        }).catch((err) => {
            console.log("err", err)
        }).finally(() => {
            setSpin(true)
        })
    }

    return (
        <div>
            <Wheel
                mustStartSpinning={winnerIndex && spin}
                prizeNumber={winnerIndex} // this is winner index of data
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                onStopSpinning={handleCompleteSpin}
            />
            <button className="button" onClick={handleStartSpin} style={{color: "red", padding: 15, fontSize: 25}}>
                Start Spin
            </button>
        </div>
    );
}

export default App;
