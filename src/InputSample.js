import React, { useState } from "react";

function InputSample(){

    const [text, setText] = useState('');
    const onChange = (e) =>{
        setText(e.target.value)
    }
    const onClear = () =>{
        setText("");
    }


    return(
        <div> 
            <input onChange={onChange} value={text}/>
            <button onClick={onClear}> 초기화 </button>
            <div>
                <b>값 : {text}</b>
            </div>
        </div>
    );
}

export default InputSample;