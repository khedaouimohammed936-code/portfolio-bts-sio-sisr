import type { ReactNode } from 'react'

import { Lines, Reveal } from './motion'

export function PageHeader({ kicker, title, intro }: { kicker: string; title: ReactNode[]; intro?: string }) {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Reveal>
        <p className="text-[13px] uppercase tracking-[0.18em] text-faint">{kicker}</p>
      </Reveal>
      <Lines as="h1" className="font-display mt-4 text-balance text-[clamp(42px,7vw,104px)]" lines={title} />
      {intro && (
        <Reveal delay={0.15} className="mt-8 max-w-2xl text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">
          <p>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

export function SectionTitle({ children, aside }: { children: ReactNode; aside?: ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
      <h2 className="font-display text-[30px] sm:text-[40px]">{children}</h2>
      {aside && <div className="text-[14px] text-muted">{aside}</div>}
    </div>
  )
}
