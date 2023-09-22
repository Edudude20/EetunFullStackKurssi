/* eslint-disable react/prop-types */
const Notification = ({ message, type }) => {
  let className = type;

  if (message === null) {
    return null;
  } else {
    switch (type) {
      case "error":
        className = type;
        break;
      case "add":
        className = type;
        break;
      case "remove":
        className = type;
        break;
      case "update":
        className = type;
        break;
      default:
        break;
    }
  }
  return <div className={className}>{message}</div>;
};

export default Notification;
