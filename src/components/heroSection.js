const HeroSection = ({ handleAddTask, setInput, inputTodo }) => {
  return (
    <div>
    <div className="todoBox1">
      <div>
      <h1>To-Do React </h1>
      <p className="forLarge">
        To-Do makes it easier for you to plan your work by using online to-do
        list App.
      </p>

      <p className="forSmallDisplay">
        To-Do makes it easier for you to plan your work <br />by using online to-do
        list App.
      </p>

      </div>
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
  </div>
  );
};

export default HeroSection;
