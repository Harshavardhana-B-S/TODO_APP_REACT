const EditPopUP = ({
  handleSaveEditedTask,
  showEditPopup,
  editTodo,
  setShowEditPopup
}) => {
  return (
    <>
      {showEditPopup && (
        <div className="popupBox">
          <div className="popup">
            <form onSubmit={handleSaveEditedTask}>
              <h2>Edit Task</h2>
              <hr className="hr" />
              <label htmlFor="task">Task Name:</label>{" "}
              <input type="text" name="task" defaultValue={editTodo.task} />
              <br />
              <br />
              {"  "}
              <button
                type="button"
                className="closeBtn"
                onClick={() => setShowEditPopup(false)}
              >
                Close
              </button>
              <button type="submit" className="saveBtn">
                {" "}
                save
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPopUP;
