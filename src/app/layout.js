import "./globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Corporate Intranet",
  description: "Modern employee engagement platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}