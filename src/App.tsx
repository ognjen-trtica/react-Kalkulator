import { useLayoutEffect, useState } from "react";
import "./App.css"
 export default function Kalkulator() {

    const[num1,setNum1]=useState<number |null>(null) // ovo mi je cedni pomogao trzio sam kako da def broj ali da ne stavim pocetnu vrednost i to ovo radi number | null
    const[rezultat,setRezultat]=useState<String>("")
    const[operacija,setOperacija]=useState<String>("")
    const[list,setList]=useState<number[]>([])



    //firstClick ako je p prazan onda da ide first click
    // secondClick ako vez postoji
    //tj ako mi je rezultat prazan string ide firstClick ako ide secondClick onda 
    //treba da sabere dva broja
    function firstClick(e: React.MouseEvent<HTMLButtonElement>) {
        const value = e.currentTarget.value 
        
        if (!isNaN(Number(value))) {
            setRezultat(prev=>prev+value) // ovde hocu samo broj da ispisem
        }

        if (value === "+" || value==="-"){//ovde hocu da na klik ispise mi + ili - 
            if (num1!==null&&rezultat!==""&&operacija!=="") {// num1 mi je nova vrednost
                const res = operacija === "+"?num1+Number(rezultat) : num1-Number(rezultat)
                setRezultat(String(res))
                setNum1(res)
            }
            else{
                setNum1(Number(rezultat))
            }
            setOperacija(value);
            setRezultat("")
            

        }
    }
    
    function secondClick(){}

    // function saberi(e:React.MouseEvent<HTMLButtonElement>){
    //     const value = e.currentTarget.value
    //     setRezultat(value)
    // }
    return(
    <>
    <div className="container">

        <div className="parent1">

            <div className="child1">
                <p>{rezultat || num1 || 0}</p>
            </div>

            <div className="child2">
             <button value="7" onClick={firstClick}>7</button>
             <button value="8" onClick={firstClick}>8</button>
             <button value="9" onClick={firstClick}>9</button>
             <button value="4" onClick={firstClick}>4</button>
             <button value="5" onClick={firstClick}>5</button>
             <button value="6" onClick={firstClick}>6</button>
             <button value="1" onClick={firstClick}>1</button>
             <button value="2" onClick={firstClick}>2</button>
             <button value="3" onClick={firstClick}>3</button>
             <button value="-" onClick={firstClick}>-</button>
             <button value="0" onClick={firstClick}>0</button>
             <button value="+" onClick={firstClick}>+</button>

            </div>

        </div>

        <div className="parent2">
            <p>{list}</p>
        </div>

    </div>
    
    </>
        
    )

}
 