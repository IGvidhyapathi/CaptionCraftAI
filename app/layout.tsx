import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";
import { DM_Sans} from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Light } from "three";


const font = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Caption Craft AI",
  description: "AI that Generate Socialmedia Captions",
  icons: {
    icon: "/icons/logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${font.className} bg-black text-white antialiased font-normal `}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
