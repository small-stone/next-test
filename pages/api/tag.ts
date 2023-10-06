import type { NextApiRequest, NextApiResponse } from "next";
import NotionServer from "../../lib/NotionServer";

type Data = any;

const id = process.env.NOTION_TAG_ID;

const notionServer = new NotionServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await notionServer.query(id as string);
  res.status(200).json(data);
}
