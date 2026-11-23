import { ArrowUpRight, Download, Mail } from 'lucide-react'

import { annexes, contact, site } from '../../data/site'
import { Lines, Magnetic, Reveal } from './motion'
import { useLocalTime } from './Nav'

export function Footer() {
  const time = useLocalTime()

  return (
    <footer id="contact" className="mt-32 border-t border-line sm:mt-44">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <div>
            <Lines
              as="h2"
              className="font-display text-[clamp(40px,7vw,104px)]"
              lines={['Parlons de votre', <>projet <span className="text-accent">système</span></>]}
            />
            <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex h-14 items-center gap-2 rounded-[16px] bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
                >
                  <Mail className="size-4" />
                  {contact.email}
                </a>
              </Magnetic>
              <a
                href={contact.cv}
                className="inline-flex h-14 items-center gap-2 rounded-[16px] border border-line-strong px-6 text-[15px] font-medium transition-colors hover:bg-fg hover:text-bg"
              >
                <Download className="size-4" />
                CV en PDF
              </a>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[14.5px]">
              <a href={contact.linkedin} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1.5">
                LinkedIn
                <ArrowUpRight className="size-3.5" />
              </a>
              <a href={contact.github} target="_blank" rel="noreferrer" className="link-draw inline-flex items-center gap-1.5">
                GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
              <span className="text-muted">
                {site.available ? 'Disponible pour une alternance ou un stage' : 'En formation'}
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <p className="text-[13px] uppercase tracking-[0.16em] text-faint">Annexes et documents</p>
            <ul className="mt-5 flex flex-col">
              {annexes.map((annexe) => (
                <li key={annexe.label} className="border-b border-line py-3">
                  <a href={annexe.href} className="link-draw inline-flex items-center gap-2 text-[14.5px]">
                    {annexe.label}
                    <ArrowUpRight className="size-3.5 text-muted" />
                  </a>
                  {annexe.note && <p className="mt-1 text-[12.5px] text-faint">{annexe.note}</p>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-4 border-t border-line pt-8 text-[14px] sm:grid-cols-3">
          <p className="text-faint">
            {site.location}, {time}
          </p>
          <p className="text-faint sm:text-center">Portfolio — {site.title}</p>
          <p className="text-faint sm:text-right">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
