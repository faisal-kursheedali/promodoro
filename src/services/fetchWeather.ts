import axios from "axios";

const fetchWeather=async(location:{
    lat:number,
    lon:number
})=>{
    try{const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API}`);
    const data={
        place:res.data.name,
        temp:res.data.main.temp
    }
    return data;

}
    catch(e){
        return e;
    }
}



export default fetchWeather;