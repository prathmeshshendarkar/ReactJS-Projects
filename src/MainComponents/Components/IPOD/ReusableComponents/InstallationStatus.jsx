import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'

const InstallationStatus = (props) => {
    // const [uninstall, setUninstall] = useState(false);
    const {name, handleCurrentApp, reRenderAppList} = props;
    return (
        <div>
            <div>
                <h1>Uninstall the application?</h1>
            </div>
            <div>
                <ButtonComponent name="Ok" onSettingChange={handleCurrentApp(name)} />
                <ButtonComponent name="Cancel" onSettingChange={reRenderAppList(name)} />
        </div>
        </div>
    )
}

export default InstallationStatus