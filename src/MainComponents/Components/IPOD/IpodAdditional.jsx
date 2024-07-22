import React from "react";
import SettingsComponent from './AdditionalComponents/SettingsComponent';
import MusicComponent from './AdditionalComponents/MusicComponent';
import ContactComponent from './AdditionalComponents/ContactComponent';
import ProfileComponent from './AdditionalComponents/ProfileComponent';

const IpodAdditional = (props) => {
    const {cardStatus, handleCardComponent, currentSetting} = props;
    console.log(currentSetting);
    return (
        <div>
            <div>
                <h1>This is Ipod Additional</h1>
                <button onClick={() => handleCardComponent(!cardStatus)}>Change to Default</button>                
            </div>
            
                {currentSetting === "settings" && <SettingsComponent />}
                {currentSetting === "music" && <MusicComponent />}
                {currentSetting === "contacts" && <ContactComponent />}
                {currentSetting === "profile" && <ProfileComponent />}
        </div>
    )
}

export default IpodAdditional;