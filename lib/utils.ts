import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 80; // Height of the fixed navbar
    const elementPosition = element.offsetTop - navbarHeight - 20; // Extra 20px padding
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}
