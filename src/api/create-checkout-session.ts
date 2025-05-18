import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-04-30.basil',
});

// Map your product IDs to Stripe price IDs (replace with your real price IDs)
const PRICE_IDS: Record<string, string> = {
  'prod_SKw3QFSuk84g9x': 'price_xxx1', // Enquête de crédit en ligne
  'prod_SKw3gc3JtGtntj': 'price_xxx2', // Antécédents judiciaires au Québec
  'prod_SKw4BGhYItIEGF': 'price_xxx3', // Régie du logement au Québec
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { productIds } = req.body;
  if (!Array.isArray(productIds) || productIds.length === 0) {
    return res.status(400).json({ error: 'No products selected' });
  }

  try {
    const line_items = productIds.map((pid: string) => ({
      price: PRICE_IDS[pid],
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    return res.status(200).json({ url: session.url });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An unknown error occurred' });
  }
}
