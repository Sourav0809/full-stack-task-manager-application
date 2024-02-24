import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../../store/actions/taskActions";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  //  add a new task handeler
  const addTaskHandeler = (e) => {
    e.preventDefault();
    const addedTask = {
      title,
      description,
      completed: false,
    };
    dispatch(addTaskAction(addedTask));
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
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
