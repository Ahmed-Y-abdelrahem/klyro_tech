'use client';
import { useTheme } from "next-themes";
import Navbar from "./components/Navbar";
import AnimatedTechBackground from "./components/AnimatedTechBackground"

import Footer from "./components/Footer";
import LogoToCodeAnimation from "./LogoToCodeAnimation";

export default function ClientLayout({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <>
    <AnimatedTechBackground />
    
      <LogoToCodeAnimation />
      <Navbar
        isDarkMode={theme === "dark"}
        setDarkMode={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main className="min-h-screen">{children}</main>
      <Footer isDarkMode={theme === "dark"} />
    </>
  );
}
