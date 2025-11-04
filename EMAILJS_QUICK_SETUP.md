# Quick EmailJS Setup Guide

Follow these steps to enable direct email sending from your contact form:

## Step 1: Create EmailJS Account (Free)

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account allows 200 emails/month)
3. Verify your email

## Step 2: Create Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Click **Connect Account** and authorize EmailJS
5. Click **Create Service**
6. **Copy your Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template:

**Subject:** `New Contact Form Message: {{subject}}`

**Content:**
```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Set **To Email** to: `ssn9077@nyu.edu`
5. Click **Save**
6. **Copy your Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General** in your dashboard
2. Find **Public Key** (API Key)
3. **Copy your Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## Step 5: Add Environment Variables

1. Create a file named `.env.local` in your project root (`F:\subport2\.env.local`)
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Example:**
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbC123XyZ789
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
```

## Step 6: Restart Development Server

After creating `.env.local`, restart your Next.js server:

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 7: Test the Form

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. Check your email inbox (ssn9077@nyu.edu)
4. You should receive the email!

## Troubleshooting

### Form still opens mailto:
- Make sure `.env.local` file exists in project root
- Make sure environment variable names are exactly as shown (with `NEXT_PUBLIC_` prefix)
- Restart your dev server after adding environment variables

### "Email service not configured" error:
- Check that all three environment variables are set
- Verify the values match your EmailJS dashboard
- Restart dev server

### Email not received:
- Check spam folder
- Verify template has correct email address
- Check EmailJS dashboard for delivery status
- Verify Gmail connection is authorized

## Free Tier Limits

- **200 emails/month** (free tier)
- Perfect for portfolio contact forms
- Upgrade if you need more

---

**Need help?** Check EmailJS documentation: https://www.emailjs.com/docs/


