import type { NextApiResponse, NextApiRequest } from "next";
import NotionServer from "../../lib/NotionServer";

type Data = any;

const id = process.env.NOTION_LIST_ID;

const notionServer = new NotionServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const queryId = req.query.id;
  console.log("deatilId: ", queryId);
  const data = await notionServer.detail(queryId as string);
  res.status(200).json(data);
}
