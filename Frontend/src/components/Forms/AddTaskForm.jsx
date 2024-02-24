import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAction, editTaskAction } from "../../store/actions/taskActions";

const AddTaskForm = () => {
  const { isEditingTask, editTask } = useSelector((state) => state.taskSlice);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditingTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    }
  }, [isEditingTask, editTask]);

  //  add a new task handeler
  const addTaskHandeler = (e) => {
    e.preventDefault();
    if (!isEditingTask) {
      const addedTask = {
        title,
        description,
        completed: false,
      };
      dispatch(addTaskAction(addedTask));
    } else {
      const editedTask = {
        title,
        description,
      };
      dispatch(editTaskAction(editedTask));
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form
      className=" font-poppins flex gap-4 justify-center items-center mt-5"
      onSubmit={addTaskHandeler}
    >
      <div className="flex gap-2 justify-center items-center">
        <label className=" font-cabin text-xl">Task Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          className="bg-gray-100 p-2 rounded-md"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </div>
      <div className="flex gap-2 justify-center items-center w-[30%]">
        <label className=" font-cabin text-xl">Description</label>
        <input
          type="text"
          placeholder="Enter Discription"
          className="bg-gray-100 p-2 rounded-md w-full"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-md"
      >
        {isEditingTask ? "Update Task" : " Add Task"}
      </button>
    </form>
  );
};

export default AddTaskForm;
