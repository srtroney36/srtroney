import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://srtroney.com"),
  title: { default: "SRT Roney | Problem-Solver & Multidisciplinary Builder", template: "%s | SRT Roney" },
  description: "I investigate real problems, test solutions, and build what works. Independent multidisciplinary builder in Savar, Bangladesh.",
  keywords: ["SRT Roney", "problem solving", "web development", "automation", "digital experiments", "Bangladesh"],
  openGraph: { title: "SRT Roney | Problem-Solver & Multidisciplinary Builder", description: "I investigate real problems, test solutions, and build what works.", type: "website", locale: "en_US", url: "https://srtroney.com", siteName: "SRT Roney" },
  twitter: { card: "summary_large_image", title: "SRT Roney | Problem-Solver & Multidisciplinary Builder", description: "I investigate real problems, test solutions, and build what works." },
  icons: {
    icon: "/FAVICON-01.svg",
    shortcut: "/FAVICON-01.svg",
    apple: "/FAVICON-01.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
