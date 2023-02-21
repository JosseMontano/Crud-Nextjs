import { prisma } from "@/lib/prisma";
import { NextApiResponse } from "next";
import { ZodError } from "zod";
import UserType from "../interfaces/user";
import { UserSchema } from "../validations/user";


export const post = async (body: UserType, res: NextApiResponse) => {
  const { name, salary } = body;
  try {
    UserSchema.parse(body);

    const user = await prisma.user.create({
      data: {
        name,
        salary,
      },
    });

    res.status(200).json({ message: "User created", user: user });
  } catch (error) {

    if (error instanceof ZodError) {
      return res
        .status(400)
        .json(error.issues.map((v) => ({ message: v.message })));
    }

    return res.status(500).json(error);
  }
};
