import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "./../Redux/Actions/task";
import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskList(props) {
  let { soft } = props;
  const dispatch = useDispatch();
  let taskList = useSelector((state) => state.taskReducer.taskList);
  const [filterName, setFilterName] = useState("");
  const [filterStatus, setFilterStatus] = useState(-1);

  useEffect(() => {
    dispatch(Action.getTaskListAPI());
  });

  const handleOnChangeTask = (task) => {
    dispatch(Action.handleOnChangeTask(task));
  };

  const handleOnChange = (event) => {
    let { name, value } = event.target;
    if (name === "filterName") setFilterName(value);
    if (name === "filterStatus") setFilterStatus(parseInt(value));
  };

  //render task item
  const renderTaskItem = () => {
    if (!Array.isArray(taskList) && taskList.lenght === 0) return;
    //SearchName
    taskList = taskList.filter((task) => {
      return task.name.toLowerCase().indexOf(filterName) !== -1;
    });

    //Search Status
    taskList = taskList.filter((task) => {
      if (filterStatus === -1) {
        return task;
      } else {
        return task.status === (filterStatus === 1 ? true : false);
      }
    });

    if (soft.by === "name") {
      taskList.sort((a, b) => {
        if (a.name < b.name) return soft.value;
        else if (a.name > b.name) return -soft.value;
        else return 0;
      });
    } else {
      taskList.sort((a, b) => {
        if (a.status < b.status) return soft.value;
        else if (a.status > b.status) return -soft.value;
        else return 0;
      });
    }

    //render afterFilter
    return taskList.map((task, index) => {
      return (
        <TaskItem
          task={task}
          key={index}
          serial={index + 1}
          handleOnChangeTask={handleOnChangeTask}
        />
      );
    });
  };

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td />
          <td>
            <input
              type="text"
              className="form-control"
              name="filterName"
              onChange={handleOnChange}
              value={filterName}
            />
          </td>
          <td>
            <select
              className="form-control"
              name="filterStatus"
              onChange={handleOnChange}
            >
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td />
        </tr>
        {renderTaskItem()}
      </tbody>
    </table>
  );
}

export default TaskList;
