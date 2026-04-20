import { useState, useEffect } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
] as const

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 py-3">
      <div className={`flex items-center justify-between transition-colors duration-300 ${scrolled ? "liquid-glass rounded-2xl mx-4" : "px-8 lg:px-16"}`}>
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/logo-icon.svg"
            alt="Logo"
            className="h-12 w-12"
          />
        </a>

        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 bg-white text-black rounded-full px-3.5 py-1.5 text-sm font-medium"
          >
            Get Started
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <button
          type="button"
          className="md:hidden liquid-glass rounded-full p-2 text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              type="button"
              className="absolute top-8 right-8 text-white"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-heading italic text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="inline-flex items-center gap-1 bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Get Started
              <ArrowUpRight className="size-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
