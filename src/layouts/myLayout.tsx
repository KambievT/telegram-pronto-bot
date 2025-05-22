"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppRoot } from "@telegram-apps/telegram-ui";

export default function LayoutPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <AppRoot>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </AppRoot>
    </ThemeProvider>
  );
}
