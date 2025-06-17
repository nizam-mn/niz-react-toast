let addToastCallback = null;

const Toast = (message) => {
  // Default toast behavior
  addToastCallback && addToastCallback({ message, type: "default" });
};

// Add specific methods for each type of toast
Toast.success = (message) => {
  addToastCallback && addToastCallback({ message, type: "success" });
};
Toast.error = (message) => {
  addToastCallback && addToastCallback({ message, type: "error" });
};
Toast.warning = (message) => {
  addToastCallback && addToastCallback({ message, type: "warning" });
};
Toast.info = (message) => {
  addToastCallback && addToastCallback({ message, type: "info" });
};
Toast.loading = (message) => {
  addToastCallback && addToastCallback({ message, type: "loading" });
};


// Updated Toast.promise to handle toast updates correctly
Toast.promise = (promise, { pending, success, error }) => {
  const toastId = Date.now();
  
  // Show loading state
  addToastCallback && addToastCallback({ 
    message: pending, 
    type: "loading", 
    id: toastId 
  });

  return promise
    .then((result) => {
      // Replace loading toast with success toast
      addToastCallback && addToastCallback({ 
        message: success, 
        type: "success", 
        id: toastId,
        update: true  // Flag to indicate this is an update
      });
      return result;
    })
    .catch((err) => {
      // Replace loading toast with error toast
      addToastCallback && addToastCallback({ 
        message: error, 
        type: "error", 
        id: toastId,
        update: true  // Flag to indicate this is an update
      });
      throw err; // Re-throw the error to maintain promise chain
    });
};


export const setToastCallback = (callback) => {
  addToastCallback = callback;
};

export { Toast };

