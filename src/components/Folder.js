import { useState } from "react";

const Folder = (props) => {
  const { name, children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const direction = isOpen ? "up" : "down";

  return (
    <div>
      <h4>
        <span onClick={handleClick}>
          <i className="blue folder icon"></i>
          {name}
          <i className={`caret ${direction} icon`}></i>
        </span>
      </h4>
      <div>{isOpen ? children : null}</div>
    </div>
  );
};

export default Folder;
