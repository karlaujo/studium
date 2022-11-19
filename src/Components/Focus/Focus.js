import './Focus.css';
import Pomodoro from './Pomodoro';
import Settings from './Settings/Settings';
import {useState} from "react";
import SettingsContext from './Settings/SettingsContext';

function Focus() {

  const [showSettings,setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  // comment
  return (
    // comment
    <main>
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
      // comment
  );
}

export default Focus;
