// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

interface IResponse {
  name: string
  ok: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
  res.status(200).json({ 
    name: 'John Doe',
    ok: true 
  })
}
