import React from "react";

const ButtonComponent = (props) => {
    const {name, onSettingChange} = props;
    return (
        <div>
            <button onClick={() => {onSettingChange(name)}}>{name}</button>
        </div>
    )
}

export default ButtonComponent;