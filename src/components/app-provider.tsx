"use client"

import { ThemeProvider } from "next-themes"

import useMounted from "@/hooks/use-mounted"

import { CommandPaletteProvider } from "./command-palette"
import { TooltipProvider } from "./ui/tooltip"

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useMounted()
  if (!isMounted) return null

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CommandPaletteProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </CommandPaletteProvider>
    </ThemeProvider>
  )
}

export default AppProvider
