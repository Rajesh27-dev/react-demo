import { useEffect } from "react";

const Button = (props) =>{

    console.log(JSON.stringify(props));
    useEffect(()=>{
        // props.ref.current=alert;
    },[])
    const alert= (e)=>{
        console.log(e)
    }
    return (
        <button onClick={(e)=>{
            return e;
        }}>{props.label}</button>
    )
}
export default Button;