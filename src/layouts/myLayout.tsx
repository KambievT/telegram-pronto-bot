"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppRoot } from "@telegram-apps/telegram-ui";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <ThemeProvider>
          <AppRoot>
            <div>
              <Header />
              {children}
              <Footer />
            </div>
          </AppRoot>
        </ThemeProvider>
      ) : (
        // Optional: Render a loading spinner or placeholder while mounting
        <div className="flex items-center justify-center min-h-screen">
          {/* Loading... */}
        </div>
      )}
    </>
  );
}
