import React,{useState,useEffect} from 'react'
import { useApp } from '../../context/app-context';
import fetchWeather from '../../services/fetchWeather';
import "./time.css";

const Time = () => {
    const d = new Date();
    const [minute,setMinute]=useState(d.getMinutes());
    const [hour,setHour]=useState(d.getHours());
    const [day,setDay]=useState(d.getDay());
    const [month,setMonth]=useState(d.getMonth());
    const [year,setYear]=useState(d.getFullYear());
    const [date,setDate]=useState(d.getDate());
    const {appState,appDispatch}=useApp();
    const [location,setLocation]=useState({
        lat:0,lon:0  
      })
      useEffect(() => {
      
        window.navigator.geolocation.getCurrentPosition(
          (i) => {
                 setLocation(prev=>prev={lat:i.coords.latitude,lon:i.coords.longitude});
               })
      
      },[]);
      useEffect(() => {
        if (location.lat!==0&&location.lon!==0) {
            fetchWeather(location).then(data=>{
            appDispatch({
              type:"SET_WEATHER",
              payload:data
            })
            })
            
        }
        
      }, [location]);
      setTimeout(()=>{
        setHour(prev=>prev=d.getHours())
        setMinute(prev=>prev=d.getMinutes())
      },10*1000)
      setTimeout(()=>{
        
        setDay(prev=>prev=d.getDay());  
        setMonth(prev=>prev=d.getMonth());  
        setYear(prev=>prev=d.getFullYear());  
        setDate(prev=>prev=d.getDate());  
    },3600000)
    const days = [ "sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  return (
    <div className="time-container">
      <div className="time">
      <div className="time-box">
        {hour>12?hour-12:hour}:{minute}
      </div>
      <div className="date-box">
        {days[day]} {date},{month},{year}
      </div>
      </div>
      {/* <div className="temp">{Math.round(appState.currentWeather.temp-273)+" °C"}, {appState.currentWeather.place}</div> */}
      <div className="temp">{appState.currentWeather.temp?Math.round(appState.currentWeather.temp-273)+" °C":""}{appState.currentWeather.place?", "+appState.currentWeather.place:""}</div>
    </div>
  )
}

export default Time