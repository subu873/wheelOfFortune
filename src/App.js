import './App.css';
import {Wheel} from 'react-custom-roulette'
import {useState} from "react";

function App() {
    const [spin, setSpin] = useState(false)
    const data = [
        {option: '0', style: {backgroundColor: 'green', textColor: 'black'}},
        {option: '1', style: {backgroundColor: 'white'}},
        {option: '2'},
    ]

    const handleCompleteSpin = () => {
        alert("complete spin")
    }

    const handleStartSpin = () => {
        setSpin(true)
    }

    return (
        <div>
            <Wheel
                mustStartSpinning={spin}
                prizeNumber={1} // this is winner index of data
                data={data}
                backgroundColors={['#3e3e3e', '#df3428']}
                textColors={['#ffffff']}
                onStopSpinning={handleCompleteSpin}
            />
            <button className="button" onClick={handleStartSpin} style={{color:"red",padding:15,fontSize:25}}>
                Start Spin
            </button>
        </div>
    );
}

export default App;
