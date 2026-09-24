import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srtroney.com"),
  title: { default: "SRT Roney | Independent Builder & Digital Experiments", template: "%s | SRT Roney" },
  description: "SRT Roney builds useful web products, conversion systems, and honest experiments from Savar, Bangladesh.",
  keywords: ["SRT Roney", "web development", "automation", "digital experiments", "Bangladesh"],
  openGraph: { title: "SRT Roney | Independent Builder & Digital Experiments", description: "Web products, conversion systems, and honest experiments for ambitious ideas.", type: "website", locale: "en_US", url: "https://srtroney.com", siteName: "SRT Roney" },
  twitter: { card: "summary_large_image", title: "SRT Roney | Independent Builder", description: "Useful web products and honest experiments." },
  icons: {
    icon: "/FAVICON-01.svg",
    shortcut: "/FAVICON-01.svg",
    apple: "/FAVICON-01.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>
  );
}
