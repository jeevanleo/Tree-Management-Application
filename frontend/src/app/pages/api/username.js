import { NextApiRequest, NextApiResponse } from "next";

export default async (req = NextApiRequest, res = NextApiResponse) => {
  const { username } = req.query;

  if (req.method === "GET") {
    const response = await fetch(`http://localhost:3001/users/${username}`);
    const data = await response.json();
    res.status(200).json(data);
  } else if (req.method === "PUT") {
    const response = await fetch(
      `http://localhost:3001/users/${username}/tree`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: req.body,
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  }
};
