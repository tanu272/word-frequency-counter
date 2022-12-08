import React, { Component } from 'react'
import './App.css';
import Button from '@mui/material/Button';  
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import {useState} from 'react';
import axios from 'axios';
import Chart from 'react-google-charts'
import { keyboard } from '@testing-library/user-event/dist/keyboard';

export default function Button1() {  
    const [data, setData] = useState({data: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [freq, setFreq] = useState([]);

    const parsestring = (text) => {
      var words = text.replace(/[?]|[.]|[,]|[(]|[)]|[/]|[']|[–]/g, '').split(/\s/);
      var freqMap = {};
      words.forEach(function(w) {
          if (!freqMap[w] && w!='') {
              freqMap[w] = 0;
          }
          freqMap[w] += 1;
      });

      setFreq(freqMap);
    }

    const getData = async () => {
      setIsLoading(true);
      try {
        const {data} = await axios.get('https://www.terriblytinytales.com/test.txt', {
          headers: {
            Accept: 'application/json',
          },
        });
    
          //console.log('data is: ', JSON.stringify(data, null, 4));
        parsestring(data);
        setData(data);
      } 
      catch (err) {
          setErr(err.message);
      } 
      finally {
          setIsLoading(false);
      }
    };

    console.log(data);
    console.log(freq);
    console.log(Object.keys(freq));


    return (  
      <div >
          {err && <h2>{err}</h2>}
          <Button onClick={getData} 
          variant="contained" color="success" startIcon={<KeyboardArrowUpSharpIcon />}>
              Submit
          </Button> 
          {isLoading && <h5>Loading...</h5>}
          
          
          {Object.keys(freq).map((words, count) => {
            return (
              <div>
                <h2>
                  {words}: {freq[words]}
                </h2> 
                <hr />
              </div>
            );
          })} 
          
      </div> 
    );  
}  

