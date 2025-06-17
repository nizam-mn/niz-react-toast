# React Toast Package

A lightweight, customizable, and feature-rich toast notification package for React applications.

## Features
- Multiple toast types: `success`, `error`, `warning`, `info`, `loading`
- Promise-based toast notifications
- Auto-close functionality with customizable durations
- Update existing toasts seamlessly
- Flexible positioning
- Support for custom themes

## Installation
```bash
npm install niz-react-toast
```

## Usage

### Basic Setup

Import the required components in your application.

```javascript
import React from 'react';
import Toast, { ToastCenter } from 'niz-react-toast';

function App() {
  return (
    <div>
      <ToastCenter position="top-right" autoClose={true} autoCloseDuration={5} theme="solid" />
      <button onClick={() => Toast.success("This is a success toast!")}>Show Toast</button>
    </div>
  );
}

export default App;
```

### Toast Methods

- **Default Toast**
```javascript
Toast("This is a default toast!");
```

- **Success Toast**
```javascript
Toast.success("This is a success message!");
```

- **Error Toast**
```javascript
Toast.error("An error occurred!");
```

- **Warning Toast**
```javascript
Toast.warning("This is a warning!");
```

- **Info Toast**
```javascript
Toast.info("Some informational message.");
```

- **Loading Toast**
```javascript
Toast.loading("Loading...");
```

### Promise-based Toast
Handle async operations with toast updates:
```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded successfully!"), 2000);
  });
};

Toast.promise(
  fetchData(),
  {
    pending: "Loading data...",
    success: "Data loaded successfully!",
    error: "Failed to load data."
  }
);
```

### Customization Options

#### `ToastCenter` Props
| Prop                | Type    | Default      | Description                                           |
|---------------------|---------|--------------|-------------------------------------------------------|
| `position`          | String  | `top-right`  | Position of the toast notifications.                 |
| `autoClose`         | Boolean | `true`       | Automatically close the toast after a duration.       |
| `autoCloseDuration` | Number  | `5`          | Duration (in seconds) before auto-closing.           |
| `theme`             | String  | `""`         | Theme for the toasts (e.g., `light-colored`, `colored`, `dark`, `soft-glow`, `solid`). |

#### Themes
Use `theme` to apply predefined styles or create your custom styles.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Thank you for using this toast package. Feedback and suggestions are always appreciated!