import React, { useState, memo } from "react";

const TreeNode = memo(({ value, children, onValueChange }) => {
  const [nodeValue, setNodeValue] = useState(value);

  const handleClick = () => {
    const newValue = nodeValue + 1;
    setNodeValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div>
      <span onClick={handleClick}>{nodeValue}</span>
      {children && (
        <div style={{ paddingLeft: "20px" }}>
          {children.map((child, index) => (
            <TreeNode key={index} {...child} onValueChange={onValueChange} />
          ))}
        </div>
      )}
    </div>
  );
});

export default TreeNode;
