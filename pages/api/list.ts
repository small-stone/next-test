import type { NextApiRequest, NextApiResponse } from "next";
import NotionServer from "../../lib/NotionServer";

type Data = any;

const id = process.env.NOTION_LIST_ID;

const notionServer = new NotionServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const queryId = req.query.id;
  // 这里没有用 queryId，因为返回的每一个都一样
  const data = await notionServer.query(id as string);
  res.status(200).json(data);
}
