import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Sort from "./Component/Sort";
import TaskForm from "./Component/TaskForm";
import TaskList from "./Component/TaskList";
import * as Action from "./Redux/Actions/task";

function App() {
  const dispatch = useDispatch();
  const btnAddTask = () => {
    dispatch(Action.btnAddTask());
    setCloseForm(true);
  };

  const [soft, setSoft] = useState({
    by: "",
    value: null,
  });

  const [closeForm, setCloseForm] = useState(true);

  const onSoft = (newSoft) => {
    setSoft({ ...soft, by: newSoft.softBy, value: newSoft.softValue });
  };

  const onCloseForm = () => {
    setCloseForm(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          {closeForm ? (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm onCloseForm={onCloseForm} />
            </div>
          ) : (
            ""
          )}
          <div
            className={
              closeForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button
                  className="btn btn-primary mb-2"
                  onClick={() => btnAddTask()}
                >
                  <span className="fa fa-plus mr-2" />
                  Thêm Công Việc
                </button>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Sort onSoft={onSoft} />
              </div>
            </div>

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList soft={soft} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
