import React , {useState} from "react";

function Controlled(){
    const [inputValue, setInputValue] = useState("");
    
    const  handleChange = (e) =>{
        setInputValue(e.target.value);

    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitted value:",inputValue);
    };
    const a=() =>{
        alert("form succesfully submitted");
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text"
                value={inputValue}
                onChange={handleChange}/>
                </label>
                <button type="submit" onClick={a}>Submit</button>
                </form>
    );
}
export default Controlled;