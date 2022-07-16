import type {NextApiHandler} from 'next';

const handler: NextApiHandler = (req, res) => {
    res.status(200).json('success');
}

export default handler;
