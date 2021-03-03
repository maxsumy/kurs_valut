import React, {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';


function App() {
    const [weather, setWeather] = useState(null);
    const [input, setInput] = useState("");
    useEffect(()=>{
        axios
            .get("http://api.weatherapi.com/v1/current.json?key=eb0aa02beef2490a9f2190922211602&q=sumy")
            .then((data)=>{
                //console.log(data.data.location);
                setWeather(data.data);
            })
            .catch((err)=> console.log(err));

    },[]);
    const weatherInput = (e)=>{
        setInput(e.target.value);
    }

    const searchWeather = () =>{
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=eb0aa02beef2490a9f2190922211602&q=${input}`)
            .then((data)=>{
                //console.log(data.data.location);
                setWeather(data.data);
            })
            .catch((err)=> console.log(err));
    }
    return (
        <div className="App">
            {weather && (
                <div>
                    <div>
                        <input onChange={weatherInput} type="text"/>
                        <button onClick={searchWeather}>Search</button>
                    </div>
                    <h1>{weather.location.name}</h1>
                    <h1>{weather.location.country}</h1>
                    <h1>{weather.location.localtime}</h1>
                    <h1>{weather.current.temp_c} Celsios</h1>
                    <img src={weather.current.condition.icon} alt=""/>
                </div>
            )
            }
        </div>
    );
}

export default App;


//http://api.weatherapi.com/v1/current.json?key=eb0aa02beef2490a9f2190922211602&q=sumy