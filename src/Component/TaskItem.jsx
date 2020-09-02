import Axios from "axios";
import React from "react";

TaskItem.propTypes = {};

function TaskItem(props) {
  const { task, serial } = props;

  const handleOnDeleteTask = (taskID) => {
    Axios({
      method: "DELETE",
      url: `https://5ea82b1635f3720016608993.mockapi.io/todolist/${taskID}`,
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleOnToggleStatus = (task) => {
    console.log(task);
    task.status = !task.status;
    Axios({
      method: "PUT",
      url: `https://5ea82b1635f3720016608993.mockapi.io/todolist/${task.id}`,
      data: task,
    });
  };

  return (
    <tr>
      <td>{serial}</td>
      <td>{task.name}</td>
      <td className="text-center">
        {task.status ? (
          <span
            className="badge badge-success"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleOnToggleStatus(task);
            }}
          >
            Kích Hoạt
          </span>
        ) : (
          <span
            className="badge badge-danger"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handleOnToggleStatus(task);
            }}
          >
            Ẩn
          </span>
        )}
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => props.handleOnChangeTask(task)}
        >
          <span className="fa fa-pencil mr-2" />
          Sửa
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            handleOnDeleteTask(task.id);
          }}
        >
          <span className="fa fa-trash mr-2" />
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default TaskItem;
