import {useState} from "react";

export default function TodoEdit({ setIsEditing, editData}) {

    const [title, setTitle] = useState(editData["title"])
    const [desc, setDesc] = useState(editData["desc"])


    const onTitle = (e) => {
        setTitle(e.target.value);
    }
    const onDesc = (e) => {
        setDesc(e.target.value);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        console.log("there")
        
        if(title.trim() !== "")
        {
            setIsEditing(false);
            const response = await fetch("https://mern-todo-yfp6.onrender.com/update", {
                method: "POST",
                body: JSON.stringify({ "_id": editData["_id"] , "title": title, "desc" : desc}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        }

    }

    return (
        <div className="form">
            <div className="formCont">
                <form onSubmit={handleForm}>
                    <h1>Edit Task</h1>
                    <label for="title">Task</label>
                    <input type="text" placeholder="Field can't me empty" lable="title" onChange={onTitle} value={title} />
                    <label for="desc">Description</label>
                    <input type="text" placeholder="Field can't me empty" lable="desc" onChange={onDesc} value={desc} />
                    <button type="submit">Add</button>
                </form>
            </div>
        </div>
    )
}