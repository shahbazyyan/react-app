function TodoFooter ({todos, onClearComplated}) {
    const coplatedSize = todos.filter((item) => item.isComplated)
    .length
    return (
        <div>
            <span>
               {coplatedSize} / {todos.length}
            </span>
            <button onClick={onClearComplated}>Clear complated</button>
        </div>
    )
};

export default TodoFooter;