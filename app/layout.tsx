import Footer from "./_component/Footer";
import Header from "./_component/Header";
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
        <Header />
        <main>{children}</main>
        {/* Footer挿入予定 */}
        <Footer />
      </body>
    </html>
  );
}
