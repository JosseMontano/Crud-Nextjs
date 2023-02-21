import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/api/user/controllers/userGet";
import { Put } from "@/api/user/controllers/userPut";
import { deleteMeth } from "@/api/user/controllers/user.Delete";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req;
  const { id } = query;
  const idNumber = Number(id);
  switch (method) {
    case "GET":
      await getUser(idNumber, res);
      break;
    case "PUT":
      await Put(idNumber, res, body);
      break;
    case "DELETE":
     await deleteMeth(idNumber, res)
     break;
    default:
      return res.status(400).json("invalid method");
  }
};
