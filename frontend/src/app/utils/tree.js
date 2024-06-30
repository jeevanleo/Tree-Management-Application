export const generateTree = (depth) => {
  const createNode = (currentDepth) => {
    if (currentDepth === depth) {
      return { value: 1, children: [] };
    }
    return { value: 1, children: [createNode(currentDepth + 1)] };
  };
  return createNode(0);
};
