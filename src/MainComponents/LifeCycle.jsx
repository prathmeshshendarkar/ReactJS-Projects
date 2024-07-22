import React from "react";
import MountingPhase from "./Components/LifeCycle/MountingPhase";

class LifeCycle extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <>
                <MountingPhase />
            </>
        )
    }
}

export default LifeCycle;