import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-04-30.basil',
});

// You must set this secret in your environment variables from your Stripe dashboard webhook settings
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'] as string;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return res.status(400).send(`Webhook Error: ${message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    // Here you would send an email using nodemailer, sendgrid, etc.
    // Example: sendEmail(session.customer_details.email, ...)
    // For now, just log the event
    console.log('Payment completed for:', session.customer_details?.email || session.customer_email);
  }

  res.json({ received: true });
}
