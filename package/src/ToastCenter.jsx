import React, { useState, useEffect, useRef } from "react";
import { setToastCallback } from "./ToastService.js";
import PropTypes from "prop-types";
import Toast from "./Toast.jsx";
import "./App.css";

const ToastCenter = ({ position = "top-right", autoClose = true, autoCloseDuration = 5, theme = "" }) => {
  const [toasts, setToasts] = useState([]);
  const listRef = useRef(null);

  const handleScrolling = () => {
    const el = listRef.current;
    const isTopPosition = ["top-left", "top-right"].includes(position);
    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight);
    } else {
      el?.scrollTo(0, 0);
    }
  };

  // useEffect(() => {
  //   setToastCallback((toast) => {
  //     setToasts((prevToasts) => [...prevToasts, { ...toast, id: Date.now() }]);
  //   });
  // }, []);

  useEffect(() => {
    setToastCallback((toast) => {
      setToasts((prevToasts) => {
        if (toast.update) {
          // If it's an update, replace the existing toast
          return prevToasts.map((t) => 
            t.id === toast.id ? { ...toast } : t
          );
        }
        // Otherwise add new toast
        return [...prevToasts, { ...toast, id: toast.id || Date.now() }];
      });
    });
  }, []);

  useEffect(() => {
    handleScrolling();
  }, [toasts]);

  useEffect(() => {
    if (autoClose) {
      const timers = toasts.map((toast) =>
        setTimeout(() => {
          removeToast(toast.id);
        }, autoCloseDuration * 1000)
      );
      return () => timers.forEach((timer) => clearTimeout(timer));
    }
  }, [toasts, autoClose, autoCloseDuration]);

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const sortedToasts = position.includes("bottom")
    ? [...toasts].reverse()
    : [...toasts];

  return (
    <div className={`toast-list toast-list--${position}`} ref={listRef}>
      {sortedToasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type || "default"}
          theme={theme}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

ToastCenter.propTypes = {
  position: PropTypes.string,
  autoClose: PropTypes.bool,
  autoCloseDuration: PropTypes.number,
};

export default ToastCenter;

