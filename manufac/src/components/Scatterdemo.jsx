import { Component } from "react";
import {useState,useEffect} from 'react';
import axios from 'axios';

import {ScatterChart,  Scatter,  XAxis,  YAxis,  CartesianGrid,  Tooltip,  Cell} from "recharts";



  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "red", "pink"];
  
export function Sactterdemo(){

    const[alcohol,setalcohol]=useState([]);
       
    const selectChart = async(e) =>
        {   
         await axios.get(`http://localhost:3000/data`)
           .then(res => {
           
            setalcohol(res.data)
            console.log("alcohol ",alcohol);
            let color = [];
            let  hue= [];
            alcohol.forEach(element => {
              color.push(element.Color_intensity);
              
              hue.push(element.Hue);
             });
             console.log(color);
              
            });
            
        }
        useEffect(() => {
          selectChart();
        }, []);
    
        return (<div>
            <h1 className="App-link">Sactter Bar</h1>
    <ScatterChart
      width={1300}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 80
      }}
    >
        
      <CartesianGrid />
      <XAxis type="number" dataKey="Color_intensity" name="Color_intensity"/>
      <YAxis type="number" dataKey="Hue" name="Hue" />
      <Tooltip cursor={{ strokeDasharray: "5 6" }} />
      <Scatter name="A school" data={alcohol} fill="#8884d8">
        {alcohol.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    </ScatterChart>
    </div>
  );

}
