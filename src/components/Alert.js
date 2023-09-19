import React from "react";

const Alert = (props) => {
  // const Capitalize = (word) => {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
  return (
    <div style={{height:"3vh"}}>
      {props.alert &&
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
       <strong>{props.alert.alertType}</strong>: {props.alert.msg}
      </div>}
    </div>

    /* <button
    type="button"
    className="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  /> */
  );
};

export default Alert;
