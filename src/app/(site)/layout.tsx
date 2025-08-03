"use client";


// import AuthProvider from "../context/AuthContext";
// import ToasterContext from "../context/ToastContext";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import CustomNavbar from "@/components/Navbar/CustomNavbar"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " relative min-h-screen text-white"}>
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-repeat z-0"
          style={{
            backgroundImage: "url('/images/circuit-board.svg')",
            backgroundSize: "fit",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        />

        {/* Main content layer */}
        <div className="relative z-10">
          <NextTopLoader
            color="#006BFF"
            crawlSpeed={300}
            showSpinner={false}
            shadow="none"
          />
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
          >
            {/* <AuthProvider>
              <ToasterContext />
              <Navbar />
              <Footer />
            </AuthProvider> */}
            <CustomNavbar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}

