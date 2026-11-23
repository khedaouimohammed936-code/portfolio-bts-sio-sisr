import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'

import { nav, site } from '../../data/site'
import { cx } from '../lib/cx'

export function useLocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () =>
      setTime(new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: site.timezone }).format(new Date()))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])
  return time
}

export function Nav() {
  const time = useLocalTime()
  const location = useLocation()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 120)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        hidden && !open && '-translate-y-full',
      )}
    >
      <div className="border-b border-line/70 bg-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <Link to="/" className="text-[15px] font-medium">
            {site.name}
            <span className="ml-2 hidden text-[12px] text-faint sm:inline">BTS SIO SISR</span>
          </Link>

          <nav className="hidden items-center gap-5 md:flex" aria-label="Navigation principale">
            {nav.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cx(
                    'link-draw text-[13.5px] transition-colors',
                    isActive || location.pathname.startsWith(item.to) ? 'text-fg' : 'text-muted hover:text-fg',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a href={`mailto:${site.email}`} className="link-draw text-[13.5px] text-muted transition-colors hover:text-fg">
              Contact
            </a>
            <span className="hidden text-[12.5px] tabular-nums text-faint lg:inline">
              {site.location} {time}
            </span>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid size-10 place-items-center rounded-[10px] border border-line-strong md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-line px-5 py-4 md:hidden" aria-label="Navigation mobile">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cx('block rounded-[8px] px-3 py-2.5 text-[15px]', isActive ? 'bg-surface-2 text-fg' : 'text-muted')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.email}`} className="block px-3 py-2.5 text-[15px] text-muted">
                  Contact — {site.email}
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
