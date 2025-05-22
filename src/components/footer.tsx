import { Home, NotebookText, ShoppingBag, UserPen } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-700 flex justify-center my_rounded fixed bottom-0 w-full text-white py-5">
      <nav className="flex items-center gap-13">
        <div>
          <Home size={32} />
        </div>
        <div>
          <NotebookText size={32} />
        </div>
        <div>
          <ShoppingBag size={32} />
        </div>
        <div>
          <UserPen size={32} />
        </div>
      </nav>
    </footer>
  );
}
