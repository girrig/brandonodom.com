import localFont from "next/font/local";

export const urbanist = localFont({
  src: "./urbanist.woff2",
  weight: "100 900",
  display: "block",
  // Exposed as a CSS variable so globals.css can map it to --font-sans
  variable: "--font-urbanist",
  adjustFontFallback: false,
});

export const bitter = localFont({
  src: "./bitter.woff2",
  weight: "100 900",
  display: "block",
  adjustFontFallback: false,
  fallback: ["serif"],
});

export const caveat = localFont({
  src: "./caveat.woff2",
  weight: "400 700",
  display: "block",
  adjustFontFallback: false,
  fallback: ["sans-serif"],
});
