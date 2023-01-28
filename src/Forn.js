import React from "react"


export default function Forn(props){
const [quantity, setQuantity]=React.useState(0);
  const {movie}= props;
  return(

    <div className="centrar">
    <form>
    <img src={movie.url} alt=""/>

    
    <h3>{movie.name}</h3>
    
     <div className="items">
        
    
    <button type="button"onClick={()=> setQuantity(quantity -1)}disabled={quantity <= 0}>-</button>
   
    {quantity}
  
    <button type="button" onClick={()=> setQuantity(quantity +1)}disabled={quantity >= movie.available}>+</button>
    </div>
    
  </form>
  </div>
  );
}