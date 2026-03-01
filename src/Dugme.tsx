
 
 export function Button({vrednost}:{vrednost:string}){
    return(
    <button onClick={()=>vrednost}>{vrednost}</button>
    )
}