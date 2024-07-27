import React from 'react';
import ThemeComponent from './SettingsOptions/ThemeComponent';
import AppsList from './SettingsOptions/AppsList';
import NetworkComponent from './SettingsOptions/NetworkComponent';
import ProfileComponent from './SettingsOptions/ProfileComponent';
import AboutComponent from './SettingsOptions/AboutComponent';
import ButtonComponent from '../ReusableComponents/ButtonComponent';

class SettingsComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            currentSetting: "default"
        }
        this.onSettingChange = this.onSettingChange.bind(this);
    }

    onSettingChange(currentSetting){
        this.setState({currentSetting: currentSetting});
    }

    render(){
        console.log("I am inside SettingsComponent");
        const currentSetting = this.state.currentSetting;
        return (
            <div className='flex justify-center space-x-4 h-[100%]'>
                <div>
                    <ul>
                        <ButtonComponent name="Theme" onSettingChange={this.onSettingChange} />
                        <ButtonComponent name="App List" onSettingChange={this.onSettingChange} />
                        <ButtonComponent name="Network" onSettingChange={this.onSettingChange} />
                        <ButtonComponent name="Profile" onSettingChange={this.onSettingChange} />
                        <ButtonComponent name="About" onSettingChange={this.onSettingChange} />
                    </ul>
                </div>
                <div>
                    <h1>This is Settings Component</h1>
                    {currentSetting === "Theme" && <ThemeComponent />}
                    {currentSetting === "App List" && <AppsList />}
                    {currentSetting === "Network" && <NetworkComponent />}
                    {currentSetting === "Profile" && <ProfileComponent />}
                    {currentSetting === "About" && <AboutComponent />}
                </div>
            </div>
        )

    }
}

export default SettingsComponent