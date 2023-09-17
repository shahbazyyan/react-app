import { useState } from "react";

function TodoForm({onAdd}) {
    const [text,setText] = useState("");
 return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if(text === "") {
            alert("The task can't be empty")
        } else {
            onAdd(text)
        }


       
        setText("");
    }}>
     <input className="inp" type="text" value={text} onChange={(e) => {
       setText(e.target.value);
     }}/>
     <button>Add</button>
    </form>
 )
}

export default TodoForm;