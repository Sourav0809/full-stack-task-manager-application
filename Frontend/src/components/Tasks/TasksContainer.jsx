import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskAction,
  markAsCompletedAction,
} from "../../store/actions/taskActions";

const TasksContainer = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.taskSlice);

  // delete task handeler for dispatch delete action
  const deleteTaskHandeler = (id) => {
    dispatch(deleteTaskAction(id));
  };

  // dispatch mark as completed action
  const markAsCompletedHandeler = (id) => {
    dispatch(markAsCompletedAction(id));
  };

  return (
    <div className=" flex flex-col gap-2 px-20 py-5">
      {tasks.map((task) => {
        return (
          <div key={task.id} className=" bg-blue-300 p-4 rounded-md">
            <h1>{task.title}</h1>
            <h1>{task.description}</h1>
            <h1>{task.completed ? "Completed" : "Not Completed"}</h1>
            <div className=" flex gap-2">
              <button
                className=" bg-blue-400 p-2"
                onClick={() => {
                  markAsCompletedHandeler(task.id);
                }}
              >
                Mark As Complted
              </button>
              <button className=" bg-blue-400 p-2">Edit</button>
              <button
                className=" bg-blue-400 p-2"
                onClick={() => {
                  deleteTaskHandeler(task.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TasksContainer;
