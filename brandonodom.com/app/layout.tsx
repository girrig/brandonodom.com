import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Odom",
  description:
    "Software engineer with 10+ years across industry and academia, designing and building cloud infrastructure, APIs, and UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-sans antialiased"}>
        <div className="min-h-screen flex flex-col bg-white">{children}</div>
      </body>
    </html>
  );
}
