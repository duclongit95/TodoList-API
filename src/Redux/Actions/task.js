import Axios from "axios";
import * as ActionType from "./../Constants";

export const getTaskListAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `https://5ea82b1635f3720016608993.mockapi.io/todolist`,
    })
      .then((res) => {
        dispatch({
          type: ActionType.GET_TASK_LIST_API,
          taskList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const handleOnChangeTask = (task) => ({
  type: ActionType.HANDLE_ON_CHANGE_TASK,
  task,
});

export const btnAddTask = () => ({
  type: ActionType.BTN_ADD_TASK,
});
