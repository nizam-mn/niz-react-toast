import React from "react";
import PropTypes from "prop-types";
import "./App.css";

import {
  SuccessIcon,
  FailureIcon,
  WarningIcon,
  CloseIcon,
  InfoIcon,
  LoadingIcon,
} from "./Icons.jsx";

const Toast = ({ message, type, onClose, theme }) => {
  const iconMap = {
    success: <SuccessIcon />,
    error: <FailureIcon />,
    warning: <WarningIcon />,
    info: <InfoIcon />,
    loading: <LoadingIcon/> 
  };

  const toastIcon = iconMap[type] || null;

  return (
    <div className={`toast ${theme} toast--${type}`} role="alert">
      <div className="toast-message">
        {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <p>{message}</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">
          <CloseIcon />
        </span>
      </button>
    </div>
  );
};

Toast.defaultProps = {
  type: "default",
  message: "Add a meaningful toast message here.",
};

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
