import React, { Component } from 'react'
import './App.css';
import Button from '@mui/material/Button';  
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import {useState} from 'react';
import axios from 'axios';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Button1() {  
    const [data, setData] = useState({data: []});
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');
    const [freq, setFreq] = useState([]);

    const parsestring = (text) => {
      var words = text.replace(/[?]|[.]|[,]|[(]|[)]|[/]|[–]|[:]|[;]|[<]|[>]|[@]/g, ' ');
      words = (String(words)).split(/\s/);
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
    //console.log(Object.keys(freq));
    let sortable = [];
    for (var word in freq) {
        sortable.push([word, freq[word]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    sortable.reverse();
    //console.log(sortable);
    var col1 = sortable.map(function(value,index) { return value[0]; }).slice(0,20);
    var col2 = sortable.map(function(value,index) { return value[1]; }).slice(0,20);
  
    const datachart = {
      labels: col1,
      datasets: [
        {
          label: "Word Frequency",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: col2,
        },
      ],
    };

    const optionset = {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Frequency'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Words'
            }
          },
        }     
      }

    return (  
      <div >
        <div className="Button-css">
          {err && <h2>{err}</h2>}
          <Button onClick={getData} 
          variant="contained" color="success" endIcon={<KeyboardArrowUpSharpIcon />}>
              Submit
          </Button> 
          {isLoading && <h5>Loading...</h5>}
          </div>
          
          {Object.keys(freq).length!=0 && <div className="Histogram"><Bar data={datachart} options ={optionset}/></div>}
          
          <div >
            
          </div>

      </div> 
    );  
}  

