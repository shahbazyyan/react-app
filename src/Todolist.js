import TodoItem from "./TodoItem";

function TodoList ({todos, onChange, onDelete}) {
    return (
        <div>
            
            {
                todos.map((item) => {
                    return(
                        <TodoItem key={item.id} 
                          todo={item} 
                          onChange={onChange}
                          onDelete={onDelete}

                        />
                    )
                })
            }

        </div>
    );
};

export default TodoList;