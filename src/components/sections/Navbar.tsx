import { ArrowUpRight } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
] as const

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-8 lg:px-16 py-3">
      <div className="flex items-center justify-between">
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
              className="px-3 py-2 text-sm font-medium text-foreground/90 font-body"
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
      </div>
    </nav>
  )
}
