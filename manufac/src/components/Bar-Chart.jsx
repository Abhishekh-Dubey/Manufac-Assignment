import { Component } from "react";
import {BarChart , XAxis, YAxis, Bar } from 'recharts'
import {useState,useEffect} from 'react';
import axios from 'axios';
 

export function Index (){
    
        const[alcohol,setalcohol]=useState([]);
        
        const selectChart = async(e) =>
        {   
         await axios.get(`http://localhost:3000/data`)
           .then(res => {
            // const alcohol = res.data;
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
        
        return(
            <div>
            <div className="App-header">
                <h1 className="App-link">bar chart </h1>
                
                <BarChart width={1200} height={300} data={alcohol} >
                        <XAxis dataKey='Alcohol'/>
                        <YAxis dataKey='Malic_Acid'/>
                        <Bar dataKey='Malic_Acid' />

                </BarChart>
                </div>
        </div>
        )
}