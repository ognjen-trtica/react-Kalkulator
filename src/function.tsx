import { useState } from "react"
const[result,setResult]=useState("")
const[num1,setNum1]=useState("")
const[num2,setNum2]=useState<number>(0)
const[operacija,setOperacija]=useState("")
function handleClick(){
    function firstClick( e:React.MouseEvent<HTMLButtonElement>){
        const value = e.currentTarget.value
            setResult(prev=>prev+value)
            if (value=="+"){setResult(value)}
            else if(value=="-"){setResult(value)}
            

    }
    function secondClick(){
        
    }


}
//  let rezultat:number=0


//     switch (operacija) {
//         case "+":
//             rezultat=num1+num2
//             break;

//         case "-":
//            rezultat = num1 - num2
//            break;
    
//         default:
//             console.log("ne mozes da unese dva puta operaciju")
//             break;
//     }


//kada klikne + ili - da od stringa napravi broj 
//kad kliknem plus ispise sve isto samo od stringa napravi broj i doda + ili -
//kad kliknem drugi broj i ponovo kliknem + ili minus treba da mi ispise rezultatat