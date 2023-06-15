import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function Todo({ todoData, delTodo, onEditTodo}) {

    return (
        <div className = "todo">
            <div className="todoUpper">
                <h1>{todoData.title}</h1>
                <div className="todoIcons">
                    <FontAwesomeIcon className = "todoIcon" icon={faPenToSquare} onClick={()=>onEditTodo(todoData._id)}/>
                    <FontAwesomeIcon className = "todoIcon todoIconTrash" icon={faTrash} onClick={() => delTodo(todoData._id)}/>
                </div>
            </div>
            <hr/>

            <div className="todoLower">
                <p>{todoData.desc} </p>
            </div>
            
        </div>
    )
}
