import React from "react";
import IpodDefault from "./IpodDefault";
import IpodAdditional from "./IpodAdditional";


class IpodComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            card: false,
            settings: {
                defaultSettings: true,
                settings: false,
                profile: false,
                music: false,
                contacts: false
            },
            currentSetting: "defaultSettings"
        }
        this.handleCardComponent = this.handleCardComponent.bind(this);
        this.handleCardSettings = this.handleCardSettings.bind(this);
    }

    componentDidMount(){
        const alertString = `What all features does the application has??
        1. We can change the theme of application in this path: Settings->Theme->Select Theme
        2. Next we can uninstall a application from the application list: Settings->AppLists->Unisntall the application
        3. We can play music: Application->MusicTab->Select Music
        4. We can view the contact information under contacts Tab: Application->Contacts->View Contact
        `
        alert(alertString);
    }

    handleCardComponent(cardStatus){
        // console.log(cardStatus);
        // console.log(this.state.card);
        this.setState({card: cardStatus});
    }

    handleCardSettings(settingsName){
        console.log(settingsName);
        const newSettings = {};
        newSettings[settingsName] = true;
        console.log(newSettings);
        for(let setting in this.state.settings){
            if(setting !== settingsName){
                newSettings[setting] = false;
            }else {
                newSettings[setting] = true;
            }
        }

        this.setState({card: true, settings: newSettings, currentSetting: settingsName});
    }

    render(){
        const cardStatus = this.state.card;
        const currentSetting = this.state.currentSetting;
        
        console.log(this.state);
        return (
            <div className="w-80 h-[28rem] bg-slate-700 rounded-2xl">
              {
                cardStatus === false || currentSetting == "defaultSettings" ? 
                <IpodDefault handleCardComponent={this.handleCardComponent} cardStatus={cardStatus} handleCardSettings={this.handleCardSettings}/> : 
                <IpodAdditional handleCardComponent={this.handleCardComponent} cardStatus={cardStatus} currentSetting={currentSetting}/>
              }  
            </div>
        )
    }
}

export default IpodComponent;