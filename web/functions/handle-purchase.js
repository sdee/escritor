const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sgMail = require("@sendgrid/mail");
const { EventEmitter } = require("stream");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async ({ body, headers }) => {
  try {
    // check the webhook to make sure it’s valid
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // only do stuff if this is a successful Stripe Checkout purchase
    if (stripeEvent.type === "checkout.session.completed") {
      const eventObject = stripeEvent.data.object;
      const customerEmail = eventObject.customer_email;
      // Send and email to our fulfillment provider using Sendgrid.
      const msg = {
        to: eventObject.customer_details.email,
        from: process.env.FROM_EMAIL_ADDRESS,
        template_id: process.env.SENDGRID_TEMPLATE_ID,
      };
      await sgMail.send(msg);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    console.log(`Stripe webhook failed with ${err}`);

    return {
      statusCode: 400,
      body: `Webhook Error: ${err.message}`,
    };
  }
};
