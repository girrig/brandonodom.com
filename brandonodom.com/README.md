# brandonodom.com

Personal website built with Next.js.

## Getting Started

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Server Requirements

This project uses puppeteer to generate the resume PDF at runtime, which downloads and runs a real Chrome binary. Chrome requires system-level libraries that Debian's base install does not ship. Install them once on a fresh server before the first deploy:

```bash
sudo apt-get install -y \
  unzip \
  libnss3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 \
  libxkbcommon0 libxcomposite1 libxdamage1 libxrandr2 libgbm1 \
  libpango-1.0-0 libcairo2 libasound2 libxshmfence1
```

## Contact Form / Email Setup

The `/contact` page has a "Send a Message" form that emails submissions to you
via your own Gmail account over SMTP (no third-party service). Reply-To is set
to the visitor's address, so hitting **Reply** in Gmail writes back to them.

The required values are listed in `.env.example`. They are **not** committed to
git (`.env*` is git-ignored, except the example), so they must be recreated on
every server. Without them, the form shows an error and sends nothing.

- **`GMAIL_USER`** (required) — the Gmail address that **sends** the emails (and
  receives them by default).
- **`GMAIL_APP_PASSWORD`** (required) — a 16-char Google App Password, not your
  normal password. See step 1.
- **`CONTACT_RECIPIENT`** (optional) — deliver messages to a different inbox than
  `GMAIL_USER`. Defaults to the sender.

### 1. Create a Gmail App Password (one time)

1. Enable **2-Step Verification** on the Google account: <https://myaccount.google.com/security>
2. Create an **App Password**: <https://myaccount.google.com/apppasswords>
3. Copy the 16-character password (this is used instead of your normal password).

### 2. Configure the environment

Both locally and on the server, the values live in a `.env` file in the project
root. It is git-ignored, so it stays on the machine and never lands in the repo,
and Next.js reads it automatically on start. Create it by copying the example
and filling in your real values:

```bash
cp .env.example .env
nano .env   # set GMAIL_USER and GMAIL_APP_PASSWORD
```

Locally, `yarn dev` picks it up. On the server, rebuild and restart so the
running process re-reads it:

```bash
yarn build
pm2 restart brandonodom.com
```
