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
