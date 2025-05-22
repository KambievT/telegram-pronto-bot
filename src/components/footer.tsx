import { Home, NotebookText, ShoppingBag, UserPen } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#1070a4] flex justify-center my_rounded fixed bottom-0 w-full text-white py-5">
      <nav className="flex items-center gap-16">
        <div>
          <Home size={35} />
        </div>
        <div>
          <NotebookText size={35} />
        </div>
        <div>
          <ShoppingBag size={35} />
        </div>
        <div>
          <UserPen size={35} />
        </div>
      </nav>
    </footer>
  );
}
