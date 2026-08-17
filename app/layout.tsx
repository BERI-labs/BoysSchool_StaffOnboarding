import type { Metadata } from "next";
import "./globals.css";
import { SCHOOL_NAME, LOGO_PATH } from "./lib/school-config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: `${SCHOOL_NAME} — Staff Assistant`,
  description: `Beri, the AI staff assistant for ${SCHOOL_NAME}. Ask about school policies, procedures, pastoral care, the curriculum, and more.`,
  icons: {
    icon: `${basePath}${LOGO_PATH}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8fa3c4" />
        <link rel="icon" href={`${basePath}${LOGO_PATH}`} type="image/png" />
      </head>
      <body style={{ background: "#ffffff", minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}
