import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../lib/db';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  suppliers: {
    id: string;
    price: string;
    stock: string;
    distance: string;
    supplierId: string;
  }[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { id } = req.query;
      const product = await db.product.findUnique({
        where: { id: String(id) },
        include: {
          suppliers: true,
        },
      });
      res.status(200).json(product as unknown as Product);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
