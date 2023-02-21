import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";

export const deleteMeth = async (id: number, res: NextApiResponse) => {
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    res.status(200).json({ message: "User deleted", user: user });
  } catch (error) {
    res.status(500).json(error);
  }
};
