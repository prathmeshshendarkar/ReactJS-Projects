import React from 'react';

const IpodDefault = (props) => {
    const {cardStatus, handleCardComponent, handleCardSettings} = props;
    console.log(`I am inside default`);
    // console.log(handleCardComponent);
    return (
        <div className='flex flex-col items-center h-[100%] px-1 py-4'>
            <div className='flex flex-col justify-around items-center bg-blue-700 w-[90%] h-[85%] rounded-md'>
                <h1 className='p-2 text-center font-mono font-bold text-xl'>Welcome to your Digitally Stored Journey</h1>
                <button className='w-[50%] bg-slate-950 text-slate-100 px-4 py-1 rounded-sm' onClick={() => handleCardComponent(!cardStatus)}>Change to Additional</button>
            </div>

            <div className='flex flex-col justify-evenly items-center bg-slate-500 mt-3 p-2 w-[90%] h-auto rounded-md'>
                <div className='text-center w-[100%]'>
                    <button className='bg-slate-950 text-slate-100 px-4 py-1 rounded-sm' onClick={() => handleCardSettings("settings")}>Settings</button>
                </div>
                <div className='w-[100%] m-2 flex justify-evenly'>
                    <button className='bg-slate-950 px-4 py-1 text-slate-100 rounded-sm' onClick={() => handleCardSettings("profile")}>Profile</button>
                    <button className='bg-slate-950 px-4 py-1 text-slate-100 rounded-sm' onClick={() => handleCardSettings("contacts")}>Contacts</button>
                    <button className='bg-slate-950 px-4 py-1 text-slate-100  rounded-sm' onClick={() => handleCardSettings("music")}>Music</button>
                </div>
            </div>
        </div>
    )
}

export default IpodDefault