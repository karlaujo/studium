import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PauseButton from './Buttons/PauseButton';
import PlayButton from './Buttons/PlayButton';
import ResetButton from './Buttons/ResetButton';
import SkipButton from './Buttons/SkipButton';
import SettingsButton from './Buttons/SettingsButton';
import {useContext, useState, useEffect, useRef} from "react";
import SettingsContext from './Settings/SettingsContext';
import FetchQuote from './Quotes/FetchQuote';


const red = '#f54e4e'
const green = '#4aec8c'

function Pomodoro(){
    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setisPaused] = useState(true);
    const [mode, setMode] = useState('break');
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick(){
        secondsLeftRef.current--;
        setSecondsLeft(secondsLeftRef.current);
    }

    function initPomodoro(){
        setSecondsLeft(settingsInfo.workMinutes * 60);
    }

    function switchMode(){
        const nextMode = modeRef.current === 'break' ? 'work' : 'break';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

        setMode(nextMode);
        modeRef.current = nextMode;

        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }
    
    useEffect(() => {
        initPomodoro();
        
        const interval = setInterval(() => {
            if(isPausedRef.current){
                return;
            }
            if(secondsLeftRef.current === 0){
                return switchMode();
            }

            tick();
        },1000);

        return () => clearInterval(interval);
    },[settingsInfo]);

    const totalSeconds = mode === 'work' 
    ? settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60
    const percentage = Math.round(secondsLeft / totalSeconds * 100) ;

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = '0' + seconds;

    return(
        <div classname="focus">

            <CircularProgressbar 
            value={percentage} 
            text={minutes + ':' + seconds} 
            styles={buildStyles({
            textColor:'#fff',
            pathColor: mode === 'work' ? red : green,
            trailColor: 'rgba(255,255,255,.2)',
            })} />
            <div style={{margin:'20px'}}>
                {isPaused 
                ? <PlayButton style={{marginRight: '10px'}} onClick={() => {setisPaused(false); isPausedRef.current = false; }} /> 
                : <PauseButton style={{marginRight: '10px'}} onClick={() => {setisPaused(true); isPausedRef.current = true; }} />}
                <SkipButton onClick={() => {return switchMode(); }} /> 
                <ResetButton onClick={() => {setisPaused(true); isPausedRef.current = true; 
                    if (mode === 'work') {
                        setSecondsLeft(settingsInfo.workMinutes * 60); secondsLeftRef.current = settingsInfo.workMinutes * 60
                    } else {
                        setSecondsLeft(settingsInfo.breakMinutes * 60); secondsLeftRef.current = settingsInfo.breakMinutes * 60
                        } 
                    }
                } />
            </div>
            <div style={{marginBottom:'20px'}}>
            <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
            </div>
            <div>
            <FetchQuote/>
            </div>
        </div>
    );
}

export default Pomodoro;