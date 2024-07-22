import React from "react";
import IpodComponent from "./Components/IPOD/IpodComponent";

class IPOD extends React.Component {
    render(){
        return (
            <div className="flex justify-center items-center h-screen">
                <IpodComponent />
            </div>
        )
    }
}

export default IPOD;