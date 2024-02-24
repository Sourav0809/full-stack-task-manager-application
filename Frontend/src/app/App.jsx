import Header from "../components/Header/Header";
import AddTaskForm from "../components/Forms/AddTaskForm";
import TasksContainer from "../components/Tasks/TasksContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTasksAction } from "../store/actions/taskActions";

const App = () => {
  const dispatch = useDispatch();

  // useffect for fetching all the tasks
  useEffect(() => {
    dispatch(getAllTasksAction());
  }, []);

  return (
    <>
      <Header />
      <AddTaskForm />
      <TasksContainer />
    </>
  );
};

export default App;
