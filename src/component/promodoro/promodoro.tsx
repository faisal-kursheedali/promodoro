import React, { useState, useEffect } from 'react'
import "./promodoro.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';
import { useApp } from '../../context/app-context';

const Promodoro = () => {
    const {appState,appDispatch}=useApp();
    let [time,setTime]=useState(appState.selectedTime);
    let totalSec = time * 60
    const [timer, setTimer] = useState(0);
    const [stop, setStop] = useState(false);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [state, setState] = useState(0);
    useEffect(()=>{
        setStop(true)
        setTimeout(()=>{
            setTime(appState.selectedTime);
            setSec(0);
            setMin(0);
            setTimer(0);
            // totalSec=time*60;
            setStop(false)
        },1000)
    },[appState.selectedTime])
    
    useEffect(() => {
        if (totalSec > timer) {
        if (!stop) {


            let interval = setInterval(() => {
                clearInterval(interval)
                if (sec >= 60) {
                    setMin(prev => prev = prev + 1)
                    setSec(prev => prev = 0);

                } else {

                    setSec((prev) => prev = prev + 1);
                }

                setTimer(prev => prev = prev + 1);
                setState(prev=>prev=prev+1)
            }, 1000)
        }
    }

    }, [state,stop])
    
    
    const minShow = min < 10 ? `0${min}` : min;
    const secShow = sec < 10 ? `0${sec}` : sec;

        document.title=`${minShow} : ${secShow} | Promodoro `
    
    
    return (
        <>
            <div className="promodoro-container">
                <div className="promodoro-box">
                    <div className="promodoro">
                        <CircularProgressbar value={(timer / totalSec) * 100} text={`${minShow} : ${secShow}`} styles={buildStyles({
                            pathColor: "navy",
                            textColor: "navy",

                        })} />
                    </div>
                </div>
                <div className="promodoro-ctrl">
                    {
                        stop ? <div className="promodoro-ctrl-btn" onClick={() => setStop(false)}><AiOutlinePlayCircle /></div> : <div className="promodoro-ctrl-btn" onClick={() => setStop(true)}><AiOutlinePauseCircle /></div>
                    }

                </div>
                <div className="promodoro-time-container">
                    <div className="promodoro-cmp-time promodoro-long-time" onClick={()=>appDispatch({type:"SELECT_TIME",payload:25})}>25 min</div>
                    <div className="promodoro-cmp-time promodoro-short-time" onClick={()=>appDispatch({type:"SELECT_TIME",payload:15})}>15 min</div>
                    <div className="promodoro-cmp-time promodoro-break-time"  onClick={()=>appDispatch({type:"SELECT_TIME",payload:5})}>5 min</div>
                </div>
            </div>

        </>
    )
}

export default Promodoro