// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	data: any;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const data = await axios.get('https://js-post-api.herokuapp.com/api/posts');
	res.status(200).json({ data: data.data });
}
