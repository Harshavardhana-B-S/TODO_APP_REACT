const DisplayTodo = ({
  handleStatusTask,
  todos,
  handleEditTask,
  handleDeleteTask
}) => {
  return (
    <div>
      <div className="todoBox2">
        <table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Task Name</th>
              <th>Status</th>
              <th className="update">Update</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td>{todo.id}</td>
                <td>{todo.task}</td>
                <td>
                  <button
                    className={`status ${
                      todo.isCompleted === "TODO"
                        ? "todoStatus"
                        : todo.isCompleted === "ACTIVE"
                        ? "activeStatus"
                        : "completedStatus"
                    }`}
                    onClick={() => handleStatusTask(todo.id)}
                  >
                    {todo.isCompleted}
                  </button>
                </td>

                <td>
                  <button
                    className="updateBTN"
                    onClick={() => handleEditTask(todo)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="removeBTN"
                    onClick={() => handleDeleteTask(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayTodo;
