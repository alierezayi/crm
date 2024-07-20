import { createContext, useContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

const SidebarContext = createContext<SidebarContextType | null>(null);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (context === null) {
    throw new Error("useSidebar must be used within an SidebarProvider");
  }

  return context;
}
