import React, { useState, useEffect } from "react";
import Tree from "../components/Tree";
import { useUser } from "../contexts/UserContext";
import { generateTree } from "../utils/tree";

const IndexPage = () => {
  const { username, setUsername, tree, setTree } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated && !tree) {
      fetch(`/api/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.tree) {
            setTree(data.tree);
          } else {
            setTree(generateTree(10000));
          }
        });
    }
  }, [isAuthenticated, tree, setTree, username]);

  const handleLogin = () => {
    if (username) {
      fetch(`/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      }).then(() => setIsAuthenticated(true));
    }
  };

  const handleSave = () => {
    fetch(`/api/users/${username}/tree`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tree }),
    });
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          {tree && <Tree tree={tree} setTree={setTree} />}
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default IndexPage;
