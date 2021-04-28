import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import {buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UpdateBar = props =>{

    var blueP = 0;
    var redP = 0;
    var blueS = 0;
    var redS = 0;
    var blueA = 0;
    var redA = 0;
    var redZ = 0;
    var blueZ = 0;

    for( var i in props.answerInfo.plane){
        if(props.answerInfo.plane[i] === "o"){
            blueP =  blueP + 25;
            redP = redP + 25;
        }
        else if(props.answerInfo.plane[i] === "x"){
            redP =  redP + 25;
        }
    }
    for( var i in props.answerInfo.structure){
        if( props.answerInfo.structure[i] === "o"){
            blueS = blueS + 25;
            redS = redS + 25;
        }
        else if(props.answerInfo.structure[i] === "x"){
            redS = redS + 25;
        }
    }
    for( var i in props.answerInfo.attachment){
        if( props.answerInfo.attachment[i] === "o"){
            blueA = blueA + 25;
            redA = redA + 25;
        }
        else if(props.answerInfo.attachment[i] === "x"){
            redA = redA + 25;
        }
    }
    for( var i in props.answerInfo.zone){
        if( props.answerInfo.zone[i] === "o"){
            blueZ = blueZ + 25;
            redZ = redZ + 25;
        }
        else if(props.answerInfo.zone[i] === "x"){
            redZ =  redZ + 25;
        }
    }

    return(
        <div style={{ width: 200, height: 200, padding: "10px 500px" }}>   

            <h2>Plane Test = {props.answerInfo.plane}</h2>
            <CircularProgressbarWithChildren
                value={redP}
                text = {`${blueP}%`}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueP}
                styles={buildStyles({
                pathColor : "#228B22",
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>
            <h2>Struct Test = {props.answerInfo.structure}</h2>
            <CircularProgressbarWithChildren
                value={redS}
                text = {`${blueS}%`}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueS}
                styles={buildStyles({
                pathColor : "#228B22",
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>   
            <h2>Att Test = {props.answerInfo.attachment}</h2>
            <CircularProgressbarWithChildren
                value={redA}
                text = {`${blueA}%`}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueA}
                styles={buildStyles({
                pathColor : "#228B22",
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>   
            <h2>Zone Test = {props.answerInfo.zone}</h2>
            <CircularProgressbarWithChildren
                value={redZ}
                text = {`${blueZ}%`}
                styles={buildStyles({
                pathColor: "#f00",
                trailColor: "#eee",
                strokeLinecap: "butt"
            })}>
            {/* Foreground path */}
            <CircularProgressbar
                value={blueZ}
                styles={buildStyles({
                pathColor : "#228B22",
                trailColor: "transparent",
                strokeLinecap: "butt"
            })}/>
            </CircularProgressbarWithChildren>     
        </div>
    )
}
export default UpdateBar; 