import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";
import {useState,useEffect} from "react";
import {v4 as uuidv4} from "uuid"; 
import "../style.css";
import Form  from "./form";

uuidv4();

const TodoMain = () =>{

    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [editData, setEditData] = useState({});

    async function addTodo(newTodo){
        setIsAdding(false);
        console.log(newTodo)
        const response = await fetch("https://mern-todo-yfp6.onrender.com/save", {
            method: "POST",
            body: JSON.stringify({ "title": newTodo["title"] , "desc" : newTodo["desc"]}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        setTodos([...todos,{
            _id: data["_id"],
            title: newTodo["title"],
            desc: newTodo["desc"],
        }])
        console.log(data)
    }

    async function delTodo(id){
        setTodos(todos.filter(todo => todo.id !== id));
        const response = await fetch("https://mern-todo-yfp6.onrender.com/delete", {
            method: "POST",
            body: JSON.stringify({"_id":id}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(response);
    }

    function onEditTodo(id){
        setIsEditing(true);
        todos.forEach((todo) => {
            if(todo["_id"] === id){
                console.log(todo);
                setEditData(todo);
                return
            }
        });
    }

    function onAdding(){
        setIsAdding(true);
    }

    const getData = async() =>{
        const response = await fetch("https://mern-todo-yfp6.onrender.com", {
            method: "GET",
        })

        const data = await response.json();
        const todoData = [];
        data.forEach((todo) => {
            todoData.push({
                _id: todo["_id"],
                title: todo["title"],
                desc: todo["desc"],
            })
        });
        setTodos(todoData);
    }

    useEffect(() => { 
        getData();  
    });

    return(
        <div className="todoMain">
            {(isAdding) ? <Form addTodo = {addTodo}/> : null}
            { (isEditing) ? <TodoEdit setIsEditing={setIsEditing} editData={editData}/> : null}
            <TodoHeader onAdding = {onAdding}/>
            <TodoList todos={todos} delTodo={delTodo} onEditTodo = {onEditTodo}/>
        </div>
    );
}

export default TodoMain;