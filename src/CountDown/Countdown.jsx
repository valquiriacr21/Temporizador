import { useState, useEffect } from "react";

function Countdown(){
//targetSeconds, elapsedSeconds
let[targetSeconds,setTargetSeconds]=useState(null);
let[elapsedSeconds,setElapsedSeconds]=useState(0);
useEffect(function(){
    if(targetSeconds===null) return;
    //target seconds has value
    setElapsedSeconds(0);
 let interval= setInterval(function(){
    setElapsedSeconds((elapsedSeconds)=>elapsedSeconds+1);
 },1000);

 return()=>{
    clearInterval(interval);
 }
},[targetSeconds]);

function parseForm(ev){
    ev.preventDefault();
    let seconds=ev.target.seconds.value;
    console.log(seconds);
    setTargetSeconds(parseInt(seconds));
}

// setInterval(function(){},1000);
if(elapsedSeconds>=targetSeconds && targetSeconds!==null){
    return(
    <div><p>finish!!</p>
    <button onClick={()=>setTargetSeconds(null)}>Restart</button>
    </div>);
}
if (targetSeconds!=null){
    return(
    <p>missing {targetSeconds-elapsedSeconds} seconds</p>
    );
}


    return(
        <div>
            <p> Cuantos segundos quieres contar?</p>
            <form action="#" onSubmit={ev=>parseForm(ev)}>
                <  input type="number" name="seconds"/>
                <button>Start</button>
            </form>
        </div>
    );
}
export default Countdown;