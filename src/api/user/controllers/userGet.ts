import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const getUsers = async (res: NextApiResponse) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        salary: true,
      },
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUser = async (id: number, res: NextApiResponse) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        salary: true,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};
