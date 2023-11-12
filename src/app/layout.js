import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeContextApi from "@/lib/ThemeContext";
import ThemeProvider from "@/lib/providers/ThemeProvider";
import { Inter } from "next/font/google";
import AuthProvider from "../utils/AuthProvider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Blog App",
  description: "This is a Modern full stack blog appp",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextApi>
          <ThemeProvider>
            <AuthProvider>
              <div className={`${inter.className}   `}>
                <div className=" mx-3 xl:mx-auto sm:mx-5">
                  <div className="max-w-[1200px]  mx-auto  ">
                    <Navbar />
                    {children}
                    <Footer />
                  </div>
                </div>
              </div>
            </AuthProvider>
          </ThemeProvider>
        </ThemeContextApi>
      </body>
    </html>
  );
}
