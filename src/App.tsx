import { useState } from "react";
import "./App.css"
import { stringify } from "querystring";
 export default function Kalkulator() {

    const[stariRezultat,setStariRezultat]=useState<bigint |null>(null) // ovo mi je cedni pomogao trzio sam kako da def broj ali da ne stavim pocetnu vrednost i to ovo radi number | null
    const[rezultat,setRezultat]=useState<string>("")
    const[operacija,setOperacija]=useState<string>("")
    const[list,setList]=useState<string[]>([])
    const[error,setError]=useState<string>("")



    //plan je da mi prvo ispise string brojeva
    //klikom na jednu od operacija da postane staribroj
    //
    function firstClick(e: React.MouseEvent<HTMLButtonElement>) {
        const value = e.currentTarget.value 
        
        if (!isNaN(Number(value))) {
            if(rezultat.length<20 )// ogranicavam ga na 20 cifara
            setRezultat(prev=>prev+value) // ovde hocu samo broj da ispisem
            else setError(String(alert("Uneo si maksimalna broj cifara")))
        }

            if (value === "+" || value==="-"){//ovde hocu da na klik ispise mi + ili - 
                if (stariRezultat!==null && rezultat!==""&& operacija!=="") {// num1 mi je nova vrednost rezultat stara
                    const trnutniRezultat = BigInt(rezultat)
                    const res = operacija === "+"? stariRezultat+trnutniRezultat : stariRezultat-trnutniRezultat 
                        setRezultat(String(res))
                        setStariRezultat(res)
                        const history = `${stariRezultat}${operacija}${rezultat}=${res}`
                            setList(prev=>[...prev,history])
                 }
                else if(rezultat!==""){
                    setStariRezultat(BigInt(rezultat))
                    // ovo sam dodao da kada kliknem prvi put operaciju da ne ispse nista jer mi je pre ovoga ispisvalo 0
                    // dodao sam else if umesto else zato sto imam uslov da mi savuva broj u stari, ali da mi ne ispise 0 ako kliknem jednu od operacija
                    }
                    
                else if(rezultat == ""){
                    setError(String(alert("Unesi broj")))
                }

            setOperacija(value);
            setRezultat("") 

        }
    }

    return(
    <>
    <div className="container">

        <div className="parent1">

            <div className="par1-child1">
                <p>{rezultat || stariRezultat}</p>
            </div>

            <div className="par1-child2">
             <button value="9" onClick={firstClick}>9</button>
             <button value="8" onClick={firstClick}>8</button>
             <button value="7" onClick={firstClick}>7</button>
             <button value="6" onClick={firstClick}>6</button>
             <button value="5" onClick={firstClick}>5</button>
             <button value="4" onClick={firstClick}>4</button>
             <button value="3" onClick={firstClick}>3</button>
             <button value="2" onClick={firstClick}>2</button>
             <button value="1" onClick={firstClick}>1</button>
             <button value="-" onClick={firstClick}>-</button>
             <button value="0" onClick={firstClick}>0</button>
             <button value="+" onClick={firstClick}>+</button>

            </div>

        </div>

        <div className="parent2">
            {list.map((item,index)=>
            <p key={index}>
                {item}
            </p>)}
            <img src="./Smece.jpg" 
                    alt="Ova slika sluzi za brisanje lisa"
                    title="Obrisi lisu"
                    className="img-clear"
                    onClick={()=>setList([])} />
        </div>

    </div>
    
    </>
        
    )

}
 