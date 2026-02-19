import { Moon, Layers, Home, Code, Send, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#about', label: 'About', icon: User },
  { href: '#skills', label: 'Skills', icon: Code },
  { href: '#portfolio', label: 'Portfolio', icon: Layers },
  { href: '#contact', label: 'Contact', icon: Send },
]

function FloatingNavbar({ className = '' }) {
  return (
    <nav
      className={cn(
        'fixed top-4 left-1/2 z-50 w-[min(90vw,640px)] -translate-x-1/2 rounded-full border bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md',
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            MC
          </span>
          <span className="hidden sm:inline">Maisha</span>
        </a>

        <ul className="flex flex-1 items-center justify-center gap-1 sm:gap-3">
          {navItems.map(({ href, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="flex items-center gap-2 rounded-full px-2 py-2 text-xs font-medium text-black transition hover:bg-black/5 sm:px-3 sm:text-sm"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" className="text-black hover:bg-black/5">
            <Moon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default FloatingNavbar
