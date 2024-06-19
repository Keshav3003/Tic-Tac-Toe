import React from "react";
import './Square.css';

const Square = (props) => {
    return(
        <div className="square" 
        onClick={props.onClick}
        style={{
            border:'1px solid' ,
            height:'100px' ,
            width:'100%',
            display:'flex' ,
            justifyContent:'center',
            alignContent:'center',
            backgroundColor:"lightblue",
            }}>
            <h1>{props.value}</h1>
        </div>
    );
};

export default Square;