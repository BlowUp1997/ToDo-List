import { useState } from "react";

function List({ value, completed, id, onRemove, todo, setTodo }) {
  const [isEdit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  const onEdit = (targetId) => {
    const newTodo = todo.map((todo) => {
      if (todo.id === targetId) {
        todo.value = editedValue;
        return todo;
      }
      return todo;
    });
    setTodo(newTodo);
    setEdit(false);
  };

  if (isEdit) {
    return (
      <div>
        <form>
          <input
            value={editedValue}
            onChange={(event) => setEditedValue(event.target.value)}
            required
          />
          <button onClick={() => onEdit(id)}>수정</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={completed}
        onClick={() => {
          completed = !completed;
        }}
      />
      {value}
      <button onClick={() => onRemove(id)}>X</button>
      <button onClick={() => setEdit(true)}>수정</button>
    </div>
  );
}

export default List;
