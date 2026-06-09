"use client"

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // show button after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  // scroll to top
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-sky-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-300/50 ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-5"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}

export default ScrollToTop;