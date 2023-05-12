import { useState, useEffect } from "react";
import HeroSection from "./components/heroSection";
import EditPopUP from "./components/editPopup";
import DisplayTodo from "./components/displayTodo";
import "./styles.css";

const App = () => {
  const [todos, setTodo] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  //  Fetch todos array from local storage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [inputTodo, setInputTodo] = useState("");

  const [slNo, setSLNO] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      const maxId = todos.reduce((max, todo) => Math.max(max, todo.id), 0);
      return maxId + 1;
    } else {
      return 1;
    }
  });

  //Add Task Function
  function handleAddTask() {
    if (inputTodo.trim() === "") {
      alert("Please enter a  task");
      return;
    }

    setSLNO((prevSLNO) => {
      const newSLNO = prevSLNO + 1;
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      return newSLNO;
    });

    const newTodo = {
      id: slNo,
      task: inputTodo,
      isCompleted: "TODO"
    };

    setTodo([...todos, newTodo]);

    setInputTodo("");
    // console.log(todos.id)

    // Store updated todos array in local storage
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  }

  // set inpu todo for hero section
  const setInput = (e) => {
    setInputTodo(e.target.value);
  };
  //Delete Task Function
  const handleDeleteTask = (deltodoId) => {
    const newTodo = todos.filter((todo) => todo.id !== deltodoId);
    setTodo(newTodo);
    // console.log(newTodo)
  };

  

  //Handle Status Task
  // const windowWidth=window.innerWidth;
  const handleStatusTask = (taskID) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === taskID) {
          // let isCompleted;
          // if (windowWidth <= 470) {
          //   isCompleted = todo.isCompleted === "TODO" ? "ACTIVE" : "DONE";
          // } else {
          //   isCompleted = todo.isCompleted === "TODO" ? "ACTIVE" : "COMPLETED";
          // }
         
       
          return {
            ...todo,
            isCompleted: todo.isCompleted === "TODO" ? "ACTIVE" : "COMPLETED"
          };
          
        
      }
      return todo;
    });
    setTodo(newTodo);
  };

  //----------EDIT TASK ----------
  const [editTodo, setEditTodo] = useState({});
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditTask = (task) => {
    setEditTodo(task);
    setShowEditPopup(true);
  };

  const handleSaveEditedTask = (e) => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        return { ...todo, task: e.target.task.value };
      }
      return todo;
    });
    setTodo(newTodos);
    setEditTodo(null);
    setShowEditPopup(false);

    // Update local storage
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="todoConatiner">
      <HeroSection
        handleAddTask={handleAddTask}
        setInput={setInput}
        inputTodo={inputTodo}
      />

      <DisplayTodo
        handleStatusTask={handleStatusTask}
        todos={todos}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
      />

      <EditPopUP
        handleSaveEditedTask={handleSaveEditedTask}
        showEditPopup={showEditPopup}
        editTodo={editTodo}
        setShowEditPopup={setShowEditPopup}
      />
    </div>
  );
};

export default App;
