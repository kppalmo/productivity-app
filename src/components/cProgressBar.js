import React, { useState} from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { example } from "../tData";

const UpdateBar = props =>{
     
    var blueP = 0;
    var redP = 0;
    var blueS = 0;
    var redS = 0;
    var blueA = 0;
    var redA = 0;
    var redZ = 0;
    var blueZ = 0;

    for( var i in example.plane){
        if( example.plane[i] == "o"){
            blueP = blueP + 25;
        }
        else if(example.plane[i] == "x"){
            redP = blueP + redP + 25;
        }
    }
    for( var i in example.structure){
        if( example.structure[i] == "o"){
            blueS = blueS + 25;
        }
        else if(example.structure[i] == "x"){
            redS = blueS + redS + 25;
        }
    }
    for( var i in example.attachment){
        if( example.attachment[i] == "o"){
            blueA = blueA + 25;
        }
        else if(example.attachment[i] == "x"){
            redA = blueA + redA + 25;
        }
    }
    for( var i in example.zone){
        if( example.zone[i] == "o"){
            blueZ = blueZ + 25;
        }
        else if(example.zone[i] == "x"){
            redZ = blueZ + redZ + 25;
        }
    }

    return(
        <div style={{ width: 200, height: 200, padding: "10px 500px" }}>   

            <h2>Bar Test 1 {example.plane}</h2>
            <CircularProgressbarWithChildren
                value={redP}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueP}
                styles={buildStyles({
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>   
            <h2>Bar Test 2 {example.structure}</h2>
            <CircularProgressbarWithChildren
                value={redS}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueS}
                styles={buildStyles({
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>   
            <h2>Bar Test 3 {example.attachment}</h2>
            <CircularProgressbarWithChildren
                value={redA}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueA}
                styles={buildStyles({
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>   
            <h2>Bar Test 4 {example.zone}</h2>
            <CircularProgressbarWithChildren
                value={redZ}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueZ}
                styles={buildStyles({
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>     
        </div>
    )
}
export default UpdateBar; 