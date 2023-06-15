import Todo from "./Todo";

export default function TodoList({ todos, delTodo, onEditTodo}) {

    return (
        <div className = "todoList">
            <ul>
                {todos.map((todo,index) => 
                    <li><Todo todoData={todo} key={index} delTodo={delTodo} onEditTodo={onEditTodo}/></li> )}
            </ul>
        </div>
    )
}
