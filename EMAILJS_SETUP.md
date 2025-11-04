# EmailJS Setup Guide

To enable email functionality in your contact form, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Create an Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Message from {{from_name}}

**Content:**
```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Set **To Email** to: `ssn9077@nyu.edu`
5. Note down your **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Add Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Replace the values with your actual keys from EmailJS.

## Step 6: Restart Development Server

After adding the environment variables, restart your Next.js dev server:

```bash
npm run dev
```

## Fallback Option

If you don't set up EmailJS, the form will automatically fall back to a `mailto:` link that opens the user's email client with the message pre-filled.

## Testing

1. Fill out the contact form
2. Submit it
3. Check your email inbox (ssn9077@nyu.edu)
4. You should receive the message!

---

**Note:** The free tier of EmailJS allows 200 emails per month, which should be plenty for a portfolio contact form.


