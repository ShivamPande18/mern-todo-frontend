export default function TodoHeader({onAdding}) {
    return (
        <div className = "todoHeader">
            <h1>Task Manager</h1>
            <div className = "todoHeaderAdd">
                <button onClick = {()=>onAdding()}>Add Task +</button>
            </div>
        </div>
    )
}
