import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RemindMecare - Person-Centred Care Technology",
  description:
    "Transform care delivery with RemindMecare's innovative person-centred care technology. Enhance resident engagement, streamline care processes, and improve outcomes.",
  keywords:
    "care technology, person-centred care, care homes, dementia care, activity management, care software",
  authors: [{ name: "RemindMecare" }],
  creator: "RemindMecare",
  publisher: "RemindMecare",
  robots: "index, follow",
  openGraph: {
    title: "RemindMecare - Person-Centred Care Technology",
    description:
      "Transform care delivery with RemindMecare's innovative person-centred care technology.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "RemindMecare - Person-Centred Care Technology",
    description:
      "Transform care delivery with RemindMecare's innovative person-centred care technology.",
  },
  icons: {
    icon: "/images/reme-logo.png",
    shortcut: "/images/reme-logo.png",
    apple: "/images/reme-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
