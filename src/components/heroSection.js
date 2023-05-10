const HeroSection = ({ handleAddTask, setInput, inputTodo }) => {
  return (
    <div className="todoBox1">
      <h1>To-Do React </h1>
      <p>
        To-Do makes it easier for you to plan your work by using online to-do
        list App.
      </p>
      <div className="inputBox">
        <input
          type="text"
          onChange={setInput}
          value={inputTodo}
          placeholder="Enter the TODO..."
        />

        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default HeroSection;
