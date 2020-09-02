import * as ActionType from "./../Constants";

const initialState = {
  taskList: [],
  taskEditting: {},
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_TASK_LIST_API:
      let taskList = [...state.taskList];
      taskList = action.taskList;
      return { ...state, taskList };
    case ActionType.HANDLE_ON_CHANGE_TASK:
      let taskEditting = { ...state.taskEditting };
      taskEditting = action.task;
      return { ...state, taskEditting };
    case ActionType.BTN_ADD_TASK:
      console.log(action);
      let clearTask = { ...state.taskEditting };
      clearTask = { ...clearTask, id: "", name: "", status: true };
      state.taskEditting = clearTask;
      return { ...state };
    default:
      return { ...state };
  }
};

export default taskReducer;
