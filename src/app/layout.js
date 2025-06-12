import "./globals.css";

export const metadata = {
  title: "Happy Father's Day",
  description: "A heartfelt Father's Day website to celebrate your love and memories. Made with emotion, creativity, and code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
