import "./globals.css";

export const metadata = {
  title: "DM Amazon Web Scraper",
  description: "Amazon Web Scraper",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
