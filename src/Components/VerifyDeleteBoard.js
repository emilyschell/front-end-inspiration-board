import React from "react";
import PropTypes from "prop-types";
import "./Styles/VerifyDeleteBoard.css";

const VerifyDeleteBoard = ({ onDeleteBoardCallback, onCancelCallback, id }) => {
  return (
    <div className="verify-delete-board">
      <h3>Delete Board</h3>
      <p>Are you sure you want to delete this board?</p>
      <button
        className="verify-delete-board__button"
        onClick={() => {
          onDeleteBoardCallback(id);
        }}
      >
        Delete Board
      </button>
      <button
        className="verify-delete-board__button"
        onClick={() => onCancelCallback()}
      >
        Cancel
      </button>
    </div>
  );
};

VerifyDeleteBoard.propTypes = {
  onDeleteBoardCallback: PropTypes.func.isRequired,
  onCancelCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default VerifyDeleteBoard;
