"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface StarContextType {
  showStars: boolean;
  setShowStars: (show: boolean) => void;
}

const StarContext = createContext<StarContextType | undefined>(undefined);

export const StarProvider = ({ children }: { children: ReactNode }) => {
  const [showStars, setShowStars] = useState(true);

  return (
    <StarContext.Provider value={{ showStars, setShowStars }}>
      {children}
    </StarContext.Provider>
  );
};

export const useStarContext = () => {
  const context = useContext(StarContext);
  if (context === undefined) {
    throw new Error("useStarContext must be used within a StarProvider");
  }
  return context;
};
