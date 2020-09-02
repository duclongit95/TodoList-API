// import React, { useState } from "react";

// Sort.propTypes = {};

// function Sort(props) {
//   const [soft, setSoft] = useState({
//     softBy: "",
//     softValue: 1,
//   });
//   const onClickSoft = (softBy, softValue) => {
//     setSoft({ ...soft, softBy: softBy, softValue: softValue });
//   };

//   return (

//   );
// }

// export default Sort;

import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soft: {
        softBy: "",
        softValue: 1,
      },
    };
  }

  onClickSoft = (softBy, softValue) => {
    this.setState(
      {
        soft: {
          softBy: softBy,
          softValue: softValue,
        },
      },
      () => this.props.onSoft(this.state.soft)
    );
  };
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sắp Xếp <span className="fa fa-caret-square-o-down ml-2" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li onClick={() => this.onClickSoft("name", 1)}>
              <p
                type="button"
                className={
                  this.state.soft.softBy === "name" &&
                  this.state.soft.softValue === 1
                    ? "active"
                    : ""
                }
              >
                <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
              </p>
            </li>
            <li onClick={() => this.onClickSoft("name", -1)}>
              <p
                type="button"
                className={
                  this.state.soft.softBy === "name" &&
                  this.state.soft.softValue === -1
                    ? "active"
                    : ""
                }
              >
                <span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span>
              </p>
            </li>
            <hr />
            <li onClick={() => this.onClickSoft("status", 1)}>
              <p
                type="button"
                className={
                  this.state.soft.softBy === "status" &&
                  this.state.soft.softValue === 1
                    ? "active"
                    : ""
                }
              >
                Trạng Thái Kích Hoạt
              </p>
            </li>
            <li onClick={() => this.onClickSoft("status", -1)}>
              <p
                type="button"
                className={
                  this.state.soft.softBy === "status" &&
                  this.state.soft.softValue === -1
                    ? "active"
                    : ""
                }
              >
                Trạng Thái Ẩn
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sort;
