import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import UserType from "../interfaces/user";
import { UserSchema } from "../validations/user";

export const Put = async (
  id: number,
  res: NextApiResponse,
  body: UserType
) => {
  const { name, salary } = body;
  try {

    UserSchema.parse(body);

    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: name,
        salary: salary,
      },
    });
    return res.status(200).json({ message: "User updated", user: user });
  } catch (error) {
    return res.status(500).json(error);
  }
};
