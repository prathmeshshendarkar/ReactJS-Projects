import React from 'react'
import PlayIcon from '../Assets/play.svg';
import ListComponent from '../ReusableComponents/ListComponent';
import PlayComponent from '../ReusableComponents/PlayComponent';
import Audio1 from '../Assets/Audio/flow.mp3';
import Audio2 from '../Assets/Audio/amalgam.mp3';
import { MusicData } from '../Assets/Audio/MusicData';

class MusicComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      audioState: false,
      audioFile: 'default',
    }
    this.onPlayHandler = this.onPlayHandler.bind(this);
    this.newAudio = new Audio();
  }

  onPlayHandler(audioFile){
    if(this.state.audioState){
      this.newAudio.pause();
      if(audioFile !== this.state.audioFile){
        this.newAudio = new Audio(audioFile);
        this.newAudio.play();
        this.setState({audioState: true, audioFile: audioFile, audioInstance: this.newAudio});
      }else{
        this.setState({audioState: false, audioFile: audioFile, audioInstance: this.newAudio});
      }
    }else {
      this.newAudio = new Audio(audioFile);
      this.newAudio.play();
      this.setState({audioState: true, audioFile: audioFile, audioInstance: this.newAudio});
    }
    console.log(this.state);
  }

  render(){
    console.log(this.onPlayHandler);
    return (
      <div className='overflow-scroll scrollbar-none'>
        <div className='flex flex-col space-y-2 justify-center items-center'>
          {
            MusicData.map((musicObj) => {
              return <PlayComponent key={musicObj.id} name={musicObj.name} IconProp={PlayIcon} AudioFile={musicObj.src} onPlayHandler={this.onPlayHandler}/>
            })
          }
        </div>
      </div>
    )
  }
}
export default MusicComponent