import React from 'react';

class PlayComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            audioInstance: 'default'
        }
    }

    // onPlay(audioFile){
    //     // var 
    // }

    render(){
        const {name, IconProp, AudioFile, onPlayHandler} = this.props;
        console.log(this.props);
        return (
            <div className='flex space-x-2 justify-center items-center'>
                <img src={IconProp} className='w-7 h-7' onClick={() => onPlayHandler(AudioFile)}/>
                <div className='flex justify-center items-center rounded-sm bg-slate-100 w-52 h-10'>
                    <li className='text-center list-none'>{name}</li>
                </div>
            </div>
        )
    }
}

export default PlayComponent