/* eslint-disable react/prop-types */

const Button = (props) => {
    const { handleClick, label } = props;
    return (
      <div>
        <button onClick={handleClick}>{label}</button>
      </div>
    );
  };

  export default Button;