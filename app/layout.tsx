import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Andrew Borders",
  description: "Personal site for Andrew Borders, a software engineer with a passion for computer graphics",
  icons: {icon: "./favicon.svg"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
