import React from "react";
import SettingsComponent from './AdditionalComponents/SettingsComponent';
import MusicComponent from './AdditionalComponents/MusicComponent';
import ContactComponent from './AdditionalComponents/ContactComponent';
import ProfileComponent from './AdditionalComponents/ProfileComponent';

const IpodAdditional = (props) => {
    const {cardStatus, handleCardComponent, currentSetting} = props;
    console.log(currentSetting);
    return (
        <div className='flex flex-col items-center h-[100%] px-1 py-4'>
            <div className='flex flex-col justify-around items-center w-[90%] h-[6%] rounded-md'>
                <button className='w-[50%] bg-slate-950 text-slate-100 px-4 rounded-sm' onClick={() => handleCardComponent(!cardStatus)}>X</button>
            </div>
            
            <div className='flex flex-col justify-around items-center bg-blue-700 w-[90%] mt-2 py-4 h-[90%] rounded-md'>
                {currentSetting === "settings" && <SettingsComponent />}
                {currentSetting === "music" && <MusicComponent />}
                {currentSetting === "contacts" && <ContactComponent />}
                {currentSetting === "profile" && <ProfileComponent />}
            </div>
        </div>

        
    )
}

export default IpodAdditional;