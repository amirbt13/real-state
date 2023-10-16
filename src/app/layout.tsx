import "./globals.css";
import type { Metadata } from "next";
import { yekan } from "@/utils/font";
import Layout from "@/layouts/Layout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={yekan.className}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
