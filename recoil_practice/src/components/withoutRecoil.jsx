import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';

function WithoutRecoil() {
    return (
        <div>
            <TextInput />
        </div>
    );
}

function TextInput() {
    const [text, setText] = useState("");
    const [count,setCount] = useState(0)

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
            Echo: {text}
            <br />
            Character Count: {text.length}
        </div>
    );
}


export default WithoutRecoil
