import {useState} from 'react'

export default function Form({addTodo}) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleForm = async(e) =>{
        e.preventDefault();
        if(title.trim() !== "" && desc.trim() !== "")
        {
            addTodo({"title":title,"desc":desc})
        }
    }

    const onTitle = (e) => { 
        setTitle(e.target.value);
    }
    const onDesc = (e) => { 
        setDesc(e.target.value);
    }

    return (
        <div className = "form">
            <div className="formCont">
                <form onSubmit = {handleForm}>
                    <h1>Add Task</h1>
                    <label for="title">Task</label>
                    <input type="text" placeholder = "Field can't me empty" lable="title" onChange = {onTitle} value = {title}/>
                    <label for="desc">Description</label>
                    <input type="text" placeholder = "Field can't me empty" lable="desc" onChange = {onDesc} value = {desc}/>
                    <button type = "submit">Add</button>
                </form>
            </div>
        </div>
    )
}
