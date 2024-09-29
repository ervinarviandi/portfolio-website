import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/commons/theme-provider";
import NextTopLoader from "nextjs-toploader";
import Cursor from "@/components/commons/particles/Cursor";
const signika = Signika_Negative({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ervin Arviandi personal website",
  description: "personal website by ervin arviandi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={signika.className} suppressHydrationWarning={true}>
        <Cursor/>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NextTopLoader
            initialPosition={0.08}
            // color="#e0ff7d"
            color="#93c5fd"
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #93c5fd,0 0 5px #93c5fd"
          />
          <link
            rel="icon"
            href="/brands ico.ico"
            sizes="any"
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
