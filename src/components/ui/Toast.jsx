import { useState, useEffect } from "react";
import { MdCheckCircle, MdError, MdClose } from "react-icons/md";

const Toast = ({ 
  message, 
  type = "success", 
  duration = 5000, 
  onClose, 
  isVisible = true 
}) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Wait for animation to complete
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return <MdCheckCircle className="w-6 h-6 text-green-500" />;
      case "error":
        return <MdError className="w-6 h-6 text-red-500" />;
      default:
        return <MdCheckCircle className="w-6 h-6 text-green-500" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
      case "error":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800";
      default:
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800";
    }
  };

  if (!show) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full mx-4 transform transition-all duration-300 ease-in-out ${
        show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`${getStyles()} border rounded-lg shadow-lg p-4 flex items-start space-x-3`}
      >
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {message}
          </p>
        </div>
        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
        >
          <MdClose className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
