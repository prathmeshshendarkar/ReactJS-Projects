import React, { useContext } from "react";
import SettingsComponent from './AdditionalComponents/SettingsComponent';
import MusicComponent from './AdditionalComponents/MusicComponent';
import ContactComponent from './AdditionalComponents/ContactComponent';
import ProfileComponent from './AdditionalComponents/ProfileComponent';
import { ThemeContext } from "./Providers/MyProvider";

const IpodAdditional = (props) => {
    const { theme } = useContext(ThemeContext);
    const themeClasses = {
        blue: 'bg-blue-700',
        red: 'bg-red-700',
        green: 'bg-green-700',
        yellow: 'bg-yellow-700',
        slate: 'bg-slate-700',
        white: 'bg-white-700'
    };

    const currentTheme = theme ? themeClasses[theme] : themeClasses["blue"];
    const {cardStatus, handleCardComponent, currentSetting} = props;
    console.log(currentSetting);
    return (
        <div className='flex flex-col items-center h-[100%] px-1 py-4'>
            <div className='flex flex-col justify-around items-center w-[90%] h-[6%] rounded-md'>
                <button className='w-[50%] bg-slate-950 text-slate-100 px-4 rounded-sm' onClick={() => handleCardComponent(!cardStatus)}>X</button>
            </div>
            
            <div className={`flex flex-col justify-around items-center w-[90%] mt-2 py-4 h-[90%] rounded-md ${currentTheme}`}>
                {currentSetting === "settings" && <SettingsComponent />}
                {currentSetting === "music" && <MusicComponent />}
                {currentSetting === "contacts" && <ContactComponent />}
                {currentSetting === "profile" && <ProfileComponent />}
            </div>
        </div>

        
    )
}

export default IpodAdditional;