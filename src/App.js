import React, {useEffect, useState} from "react";
import './App.css';
import axios from 'axios';


function App() {

  const [rates, setRates] = useState(null);
  const [from_input, setFrom_input] = useState("0");
  const [to_input, setTo_input] = useState("");
  const [select_val_from, setSelect_val_from] = useState("USD");
  const [select_val_to, setSelect_val_to] = useState("USD");

  const [rez, setRez] = useState(0);
  useEffect(()=>{
    axios
        .get("http://data.fixer.io/api/latest?access_key=81ebf276e1ed808b58591b5fb05c34eb")
        .then((data)=>{
           setRates(data.data.rates);
           // console.log(rates);

        })
        .catch((err)=> console.log(err));

  },[]);

  const fromInput = (e)=>{
      setFrom_input(e.target.value);
  }

  const toInput = (e)=>{
      setTo_input(e.target.value);
  }

  const selectVal_from = (e)=>{
      setSelect_val_from(e.target.value);
  }

  const selectVal_to = (e)=>{
      setSelect_val_to(e.target.value);
  }

  const course = () =>{
      // axios
      //     .get("http://data.fixer.io/api/latest?access_key=81ebf276e1ed808b58591b5fb05c34eb")
      //     .then((data)=>{
      //         setRates(data.data.rates);
      //     })
      //     .catch((err)=> console.log(err));


      console.log(select_val_from.toString());
      console.log(rates[select_val_from.toString()]);
      console.log(select_val_to.toString());
      console.log(rates[select_val_to.toString()]);

     const temp_rez = rates[select_val_to.toString()]/rates[select_val_from.toString()]*from_input;
     setRez(temp_rez.toFixed(2));
  }

  return (
    <div className="App">

      <div>
          <div>
              <input onChange={fromInput} type="text" value={from_input}/>
              <select onChange={selectVal_from}>
                  <option value="USD">USD</option>
                  <option value="UAH">UAH Украинская гривна</option>
                  <option value="RUB">RUB</option>
                  <option value="EUR">EUR</option>
              </select>
           <div>
               <input type="text" value={rez}/>
               <select onChange={selectVal_to}>
                   <option value="USD">USD</option>
                   <option value="UAH">UAH Украинская гривна</option>
                   <option value="RUB">RUB</option>
                   <option value="EUR">EUR</option>
               </select>
           </div>


              <button onClick={course}>OK</button>
          </div>


       </div>

    </div>
  );
}

export default App;


//http://api.weatherapi.com/v1/current.json?key=eb0aa02beef2490a9f2190922211602&q=sumy