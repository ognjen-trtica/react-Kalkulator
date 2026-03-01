import { useState } from "react";
import "./App.css"
import { validateHeaderName } from "http";
 export default function Kalkulator() {

    const[num1,setNum1]=useState("")
    const[num2,setNum2]=useState("")
    const[rezultat,setRezultat]=useState("")

    function firstClick(e: React.MouseEvent<HTMLButtonElement>) {
        const value=e.currentTarget.value
        setRezultat(prev=> prev + value);
        if (value) {
            
        }
           
    }
    return(
    <>
    <div className="container">

        <div className="parent1">

            <div className="child1">
                <p>{rezultat}</p>
            </div>

            <div className="child2">
             <button value="7" onClick={()=>firstClick}>7</button>
             <button value="8" onClick={firstClick}>8</button>
             <button value="9" onClick={firstClick}>9</button>
             <button value="4" onClick={firstClick}>4</button>
             <button value="5" onClick={firstClick}>5</button>
             <button value="6" onClick={firstClick}>6</button>
             <button value="1" onClick={firstClick}>7</button>
             <button value="2" onClick={firstClick}>8</button>
             <button value="3" onClick={firstClick}>9</button>
             <button value="-" onClick={firstClick}>0</button>
             <button value="0" onClick={firstClick}>-</button>
             <button value="+" onClick={firstClick}>+</button>

            </div>

        </div>

        <div className="parent2">

        </div>

    </div>
    
    </>
        
    )
}
