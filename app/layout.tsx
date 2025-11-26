import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Project No.2",
  description: "Test Project No.2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
