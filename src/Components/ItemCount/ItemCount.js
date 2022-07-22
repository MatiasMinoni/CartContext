import React from "react";
import { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';



    

const ItemCount =({initial, Count, setCount, cantidad, delivery}) => {
[Count, setCount] = useState(initial);

function onAdd(){
        
setCount(Count+1);
onAdd=document.getElementById("onAdd")
onRemove=document.getElementById("onRemove")
const add_Cart=document.getElementById("addCart");

onAdd.disabled=false;
onRemove.disabled=false;
add_Cart.disabled=false;

    while
    (Count>=cantidad-1){
        setCount(cantidad);
      onAdd.disabled=true;
        onRemove.disabled=false;
        
        break;}
      
}
function onRemove(){
    onAdd=document.getElementById("onAdd")
    onRemove=document.getElementById("onRemove")
    const add_Cart=document.getElementById("addCart");
setCount(Count-1);


    onAdd.disabled=false;
    while (Count<=1){   
        setCount(0);
        onAdd.disabled=false;
        onRemove.disabled=true;
        add_Cart.disabled=true;
       break;
    }
    if(Count<=1){
       
    }
    
}
const toCart = () => {
    delivery(Count);
}


return (
<>

<div className="valign-wrapper center-align contador_carrito">

<p>Agregar al carrito</p>

<button  className="waves-effect waves-light btn" id="onAdd"  onClick={() => onAdd()}> + </button>

<p>    {Count}    </p>

<button className="waves-effect waves-light btn" id="onRemove" onClick={() => onRemove()}> - </button>

<button className="waves-effect waves-light btn" onClick={toCart} id="addCart" >  Agregar al carrito</button>

</div>
</> 
)
}


export default ItemCount;