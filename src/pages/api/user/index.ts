import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { post } from "@/api/user/controllers/userPost";
import { getUsers } from "@/api/user/controllers/userGet";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      await getUsers(res);
      break;
    case "POST":
      await post(body, res);
      break;
    default:
      return res.status(400).json("invalid method");
  }
};
