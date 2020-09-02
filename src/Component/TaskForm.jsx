import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: true,
    };
  }

  handleOnChange = (event) => {
    let { name, value } = event.target;
    if (name === "status") value = value === "true" ? true : false;
    this.setState({
      [name]: value,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (!nextProps && !nextProps.taskEditting) return;
    this.setState({
      id: nextProps.taskEditting.id,
      name: nextProps.taskEditting.name,
      status: nextProps.taskEditting.status,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      Axios({
        method: "POST",
        url: `https://5ea82b1635f3720016608993.mockapi.io/todolist`,
        data: this.state,
      }).catch((err) => {
        console.log(err);
      });
    } else {
      Axios({
        method: "PUT",
        url: `https://5ea82b1635f3720016608993.mockapi.io/todolist/${this.state.id}`,
        data: this.state,
      }).catch((err) => {
        console.log(err);
      });
    }
    this.onClear();
  };

  onClear = () => {
    this.setState({
      id: "",
      name: "",
      status: true,
    });
  };

  render() {
    return (
      <div className="card card-warning">
        <div className="card-header bg-warning w-100 d-flex justify-content-around align-items-center">
          <span className="font-weight-bold">
            {this.state.id === "" ? "Thêm công việc" : "Cập nhật công việc"}
          </span>
          <i
            type="button"
            className="fa fa-times-circle"
            onClick={() => this.props.onCloseForm()}
          />
        </div>
        <div className="card-body">
          <form onSubmit={this.handleOnSubmit}>
            <div className="form-group">
              <p>Tên :</p>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
            </div>
            <p>Trạng Thái :</p>
            <select
              className="form-control"
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.handleOnChange}
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              {this.state.id === "" ? (
                <button type="submit" className="btn btn-warning">
                  Thêm
                </button>
              ) : (
                <button type="submit" className="btn btn-warning">
                  Cập nhật
                </button>
              )}
              &nbsp;
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => this.onClear()}
              >
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskEditting: state.taskReducer.taskEditting,
  };
};

export default connect(mapStateToProps, null)(TaskForm);
