import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskAction,
  markAsCompletedAction,
} from "../../store/actions/taskActions";
import { editTask, setIsEditingTask } from "../../store/reducers/taskSlice";

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

  // for editing a task
  const onTaskEditHandeler = (id, title, description) => {
    const editedTaskValues = {
      id,
      title,
      description,
    };

    dispatch(setIsEditingTask(true));
    dispatch(editTask(editedTaskValues));
  };

  return (
    <>
      {tasks.length == 0 ? (
        <h1 className=" text-2xl text-center p-5 mt-5 font-poppins">
          No Task Added !!
        </h1>
      ) : (
        <div className=" px-20 py-5 flex flex-col gap-4">
          <div className="">
            <h1 className=" text-2xl font-poppins border border-blue-400 p-2">
              Added Tasks
            </h1>
          </div>
          <div className=" flex flex-col gap-3">
            {tasks.map((task) => {
              return (
                <div
                  key={task.id}
                  className={`${
                    task.completed ? "bg-green-200" : "bg-red-200"
                  } py-4 px-10 rounded-md flex justify-between items-center gap-2`}
                >
                  <div className=" flex flex-col gap-2">
                    <h1>Task Title: {task.title}</h1>
                    <h1>Task Description: {task.description}</h1>
                    <h1>
                      Task Status :{" "}
                      {task.completed ? "Completed" : "Not Completed"}
                    </h1>
                  </div>

                  <div className=" flex gap-2">
                    {!task.completed && (
                      <button
                        className=" bg-blue-400 px-4 py-2 rounded-md"
                        onClick={() => {
                          markAsCompletedHandeler(task.id);
                        }}
                      >
                        Mark As Complted
                      </button>
                    )}
                    <button
                      className=" bg-blue-400 px-4 py-1 rounded-md"
                      onClick={() => {
                        onTaskEditHandeler(
                          task.id,
                          task.title,
                          task.description
                        );
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="  bg-blue-400 px-4 py-1 rounded-md"
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
        </div>
      )}
    </>
  );
};

export default TasksContainer;
