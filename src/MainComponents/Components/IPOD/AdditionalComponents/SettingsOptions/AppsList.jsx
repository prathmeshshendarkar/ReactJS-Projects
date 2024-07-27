import React, { useContext, useState } from 'react'
import { AppListContext } from '../../Providers/MyProvider'
import {AppListData} from '../../Assets/AppList/AppListData.js';
import ButtonComponent from '../../ReusableComponents/ButtonComponent.jsx';
import InstallationStatus from '../../ReusableComponents/InstallationStatus.jsx';

const AppsList = () => {
  const {currentApp, setCurrentApp} = useContext(AppListContext);
  // const [installationModal, setInstallationModal] = useState(undefined);
  // const [uninstallApp, setUninstallApp] = useState(undefined);

  const currentList = currentApp !== undefined ? currentApp : AppListData;

  // const reRenderAppList = (appName) => {
  //   setCurrentApp(currentList);
  //   setInstallationModal(undefined);
  // }

  // const renderInstallationStatus = (appName) => {
  //   console.log(appName);
  //   setUninstallApp(appName);
  //   setInstallationModal("installationStatus");
  // }

  const handleCurrentApp = (appName) => {
    console.log(appName);
    const newAppList = currentList.filter((e) => e.name != appName);
    console.log(newAppList);
    setCurrentApp(newAppList);
    // setInstallationModal(undefined);
  }

  console.log(currentApp);
  return (
    <div>
      <div>AppsList</div>
      {
        // installationModal === undefined ? currentList.map((e) => {
        //   const eApp = e.name;
        //   return <ButtonComponent key={e.id} name={eApp} onSettingChange={renderInstallationStatus} />
        // }) :
        // <InstallationStatus name={uninstallApp} handleCurrentApp={handleCurrentApp} reRenderAppList={reRenderAppList}/>
        currentList.map((e) => {
          const eApp = e.name;
          return <ButtonComponent key={e.id} name={eApp} onSettingChange={handleCurrentApp} />
        })
      }
    </div>
  )
}

export default AppsList