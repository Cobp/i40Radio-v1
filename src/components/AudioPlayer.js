import React from 'react'
import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import ReactAudioPlayer from 'react-audio-player'
import styled from 'styled-components'
import style from './AudioPlayer.module.css'

const audioURL = 'https://stream-150.zeno.fm/qgpgqixx3v8uv?zs=_zu_Dzi3RZuosKsYCsIYiQ'

class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "muted": true,
            "playing": false,
        }
        this.audio = React.createRef();
        this.start = this.start.bind(this);
        this.pause = this.pause.bind(this);
    }

    start() {
        this.audio.current.audioEl.current.play();
        this.audio.current.muted = false; // desactiva el silencio del audio
        this.setState({ muted: false }); // actualiza el estado del componente
    }
    pause() {
        this.audio.current.audioEl.current.pause();
        this.audio.current.muted = true; // activa el silencio del audio
        this.setState({ muted: true }); // actualiza el estado del componente
    }

    render() {
        return (
            <div className="container">
                <Boton>
                    <input type="checkbox" id="checkboxInput" checked={this.state.muted} onChange={this.state.muted ? (this.start) : (this.pause)} />
                    <label for="checkboxInput" class="toggleSwitch">
                        <div class="speaker"><BsFillPauseFill className="bell" />Pause</div>
                        <div class="mutespeaker"><BsFillPlayFill className="bell" />Play</div>
                    </label>
                </Boton>
                <ReactAudioPlayer
                    src={audioURL}
                    ref={this.audio}
                    controls
                    className={style.audio} />
            </div>
        );
    }
}
const Boton = styled.div`
@media screen and (max-width:760px){
    display: none;
}
color: #f7f8f3;


    button{
    padding: 3px;
    border: none;
    display: flex;
    align-items: center;
    background: none;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    width: 60px;
    border-radius: 4px;
    }
    #checkboxInput {
    display: none;
  }
  .toggleSwitch {
    width: 80px;
    height: 40px;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: rgb(39, 39, 39);
    border-radius: 14px;
    display: flex;
    cursor: pointer;
    transition-duration: .3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
    overflow: hidden;
  }
  .bell {
    width: 18px;
  }
  
  .bell path {
    fill: white;
  }
    
  .speaker {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition-duration: .3s;
  }
  
  .speaker svg {
    width: 18px;
  }
  
  .mutespeaker {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    z-index: 3;
    transition-duration: .3s;
  }
  
  .mutespeaker svg {
    width: 18px;
  }
  
  #checkboxInput:checked +.toggleSwitch .speaker {
    opacity: 0;
    transition-duration: .3s;
  }
  
  #checkboxInput:checked +.toggleSwitch .mutespeaker {
    opacity: 1;
    transition-duration: .3s;
  }
  
  #checkboxInput:active + .toggleSwitch {
    transform: scale(0.7);
  }
  
  #checkboxInput:hover + .toggleSwitch {
    background-color: rgb(61, 61, 61);
  }
`


export default AudioPlayer;
