import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {/* Header挿入予定 */}
        <main>{children}</main>
        {/* Footer挿入予定 */}
      </body>
    </html>
  );
}
