import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tibor Ótott-Kovács — Senior Software Engineer",
  description:
    "Senior Software Engineer building secure, scalable cloud platforms. Specializing in backend architecture, cloud infrastructure, security, and developer tooling.",
  metadataBase: new URL("https://oktibor.com"),
  openGraph: {
    title: "Tibor Ótott-Kovács — Senior Software Engineer",
    description:
      "Building secure, scalable cloud platforms. Backend architecture, cloud infrastructure, security & compliance, developer tooling.",
    url: "https://oktibor.com",
    siteName: "oktibor.com",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tibor Ótott-Kovács — Senior Software Engineer",
    description:
      "Building secure, scalable cloud platforms. Backend architecture, cloud infrastructure, security & compliance, developer tooling.",
  },
  verification: {
    google: "uUrKswSQDhrpqDynrHcV6rO5YtmSSbXr-eMR73eIed8",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex">
        <Sidebar />
        <main className="flex-1 min-h-screen lg:ml-64">{children}</main>
      </body>
    </html>
  );
}
