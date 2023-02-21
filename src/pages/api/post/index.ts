import { getPosts } from "@/api/post/get";
import { NextApiRequest, NextApiResponse } from "next";

export default async function(req: NextApiRequest, res: NextApiResponse){
    const { method, body } = req;

    switch (method) {
      case "GET":
        await getPosts(res);
        break;
      case "POST":
/*         await post(body, res); */
        break;
      default:
        return res.status(400).json("invalid method");
    }
}