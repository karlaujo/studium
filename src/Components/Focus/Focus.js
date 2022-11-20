import './Focus.css';
import Pomodoro from './Pomodoro';
import Settings from './Settings/Settings';
import {useState} from "react";
import SettingsContext from './Settings/SettingsContext';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Focus() {

  /* App.js */

  const [showSettings,setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  
  return (
    <main className='andre'>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
      {showSettings ? <Settings /> : <Pomodoro />}
      </SettingsContext.Provider>
    </main>
  );
}

export default Focus;
