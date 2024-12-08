import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./layout.css";
// import StyledComponentsRegistry from "./lib/registry";
// import styles from "./layout.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div id="viewport_container">
          <div id="viewport_left"></div>
          <div id="viewport_center">{children}</div>
          <div id="viewport_right"></div>
          {/* <Head>
        <title>123123</title>
      </Head> */}
        </div>
      </body>
    </html>
  );
}
