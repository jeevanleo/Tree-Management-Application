import React, { useCallback } from "react";
import TreeNode from "./TreeNode";

const Tree = ({ tree, setTree }) => {
  const handleValueChange = useCallback(
    (newValue, path) => {
      const updateNodeValue = (node, currentPath) => {
        if (currentPath.length === 0) {
          return { ...node, value: newValue };
        }
        const [nextIndex, ...restPath] = currentPath;
        return {
          ...node,
          children: node.children.map((child, index) =>
            index === nextIndex ? updateNodeValue(child, restPath) : child
          ),
        };
      };
      setTree((prevTree) => updateNodeValue(prevTree, path));
    },
    [setTree]
  );

  return <TreeNode {...tree} onValueChange={handleValueChange} />;
};

export default Tree;
