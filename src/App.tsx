import { useState } from "react";
import "./App.css"
 export default function Kalkulator() {

    const[num1,setNum1]=useState<number>(0)
    const[num2,setNum2]=useState<number>(0)
    const[rezultat,setRezultat]=useState<string>("")
    const[operacija,setOperacija]=useState("")

    let res:number=0


    switch (operacija) {
        case "+":
            res=num1+num2
            break;

        case "-":
           res = num1 - num2
           break;
    
        default:
            console.log("ne mozes da unese dva puta operaciju")
            break;
    }

    function firstClick(e: React.MouseEvent<HTMLButtonElement>) {
        const value=e.currentTarget.value
        setRezultat(prev=> prev + value);
        const broj = Number(value)
        if (value=="+"){setRezultat(value)}
        else if(value=="-"){setRezultat(value)}
        else return
        
   
    }

    // function saberi(e:React.MouseEvent<HTMLButtonElement>){
    //     const value = e.currentTarget.value
    //     setRezultat(value)
    // }
    return(
    <>
    <div className="container">

        <div className="parent1">

            <div className="child1">
                <p>{rezultat}</p>
            </div>

            <div className="child2">
             <button value="7" onClick={firstClick}>7</button>
             <button value="8" onClick={firstClick}>8</button>
             <button value="9" onClick={firstClick}>9</button>
             <button value="4" onClick={firstClick}>4</button>
             <button value="5" onClick={firstClick}>5</button>
             <button value="6" onClick={firstClick}>6</button>
             <button value="1" onClick={firstClick}>7</button>
             <button value="2" onClick={firstClick}>8</button>
             <button value="3" onClick={firstClick}>9</button>
             <button value="-" onClick={firstClick}>-</button>
             <button value="0" onClick={firstClick}>0</button>
             <button value="+" onClick={firstClick}>+</button>

            </div>

        </div>

        <div className="parent2">

        </div>

    </div>
    
    </>
        
    )
}
