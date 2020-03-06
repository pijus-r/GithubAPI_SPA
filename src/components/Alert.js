import React from "react";


function Alert() {
  return (
    <div
      class="alert alert-warning alert-dismissible fade show alert-c"
      role="alert"
    >
      <strong>Does it look good?</strong> Well, if it does, be sure to check
      my portfolio at<a href="https://www.behance.net/pijusrancevas"> Behance </a>
      and<a href="https://github.com/pijus-r"> Github </a>
      && message me at <a href="https://lt.linkedin.com/in/pijus-rancevas"> LinkedIn </a>!
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Alert;
