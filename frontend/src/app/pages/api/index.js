import { NextApiRequest, NextApiResponse } from "next";

export default async (req = NextApiRequest, res = NextApiResponse) => {
  if (req.method === "POST") {
    const response = await fetch(`http://localhost:3001/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: req.body,
    });
    const data = await response.json();
    res.status(200).json(data);
  }
};
