function TodoItem({todo, onChange, onDelete}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isComplated}
                onChange={(e)=> {
                    onChange({
                        ...todo,
                        isComplated: e.target.checked
                    })
                }}
                />
                {todo.text}
                <button onClick={() => {
                    onDelete(todo)
                }} > X </button>
            </label>
        </div>
    )
}

export default TodoItem;