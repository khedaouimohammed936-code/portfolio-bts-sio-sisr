import { ArrowUpRight, BadgeCheck, Clock } from 'lucide-react'
import { Link } from 'react-router'

import { formation, parcours } from '../../data/site'
import { PageHeader, SectionTitle } from '../components/PageHeader'
import { Reveal } from '../components/motion'

export function Formation() {
  return (
    <>
      <PageHeader
        kicker="Formation"
        title={['BTS SIO,', 'option SISR']}
        intro={`${formation.program} — ${formation.school}, ${formation.place}, ${formation.period}.`}
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <Reveal className="flex flex-col gap-5 text-pretty text-[17px] leading-relaxed text-muted">
            {formation.context.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="h-fit rounded-card border border-line p-7">
            <p className="text-[13px] uppercase tracking-[0.16em] text-faint">En résumé</p>
            <dl className="mt-5 flex flex-col gap-4 text-[14.5px]">
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Diplôme</dt>
                <dd className="text-right font-medium">BTS SIO</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Option</dt>
                <dd className="text-right font-medium">SISR</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Établissement</dt>
                <dd className="text-right">{formation.school}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Période</dt>
                <dd className="text-right">{formation.period}</dd>
              </div>
            </dl>
            <Link to="/#cv" className="link-draw mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium">
              Voir le parcours complet
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Spécialités */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Deux options en deuxième année">Les spécialités</SectionTitle>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {formation.specialties.map((specialty, i) => (
            <Reveal key={specialty.title} delay={i * 0.05}>
              <div className={i === 0 ? 'h-full rounded-card bg-fg p-8 text-bg' : 'h-full rounded-card border border-line p-8'}>
                <h3 className="font-display text-[26px]">{specialty.title}</h3>
                <p className={i === 0 ? 'mt-3 text-[15.5px] leading-relaxed text-bg/70' : 'mt-3 text-[15.5px] leading-relaxed text-muted'}>
                  {specialty.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Attestations à déposer dans public/documents">Certifications</SectionTitle>
        <ul className="mt-8 border-t border-line">
          {formation.certifications.map((certification) => {
            const done = certification.status === 'Obtenue'
            return (
              <li key={certification.name} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-[17px] font-medium">{certification.name}</p>
                  <p className="mt-1 text-[14px] text-muted">
                    {certification.issuer} — {certification.year}
                  </p>
                </div>
                <span
                  className={
                    done
                      ? 'inline-flex w-fit items-center gap-1.5 rounded-[8px] bg-fg px-3 py-1.5 text-[12.5px] font-medium text-bg'
                      : 'inline-flex w-fit items-center gap-1.5 rounded-[8px] border border-line-strong px-3 py-1.5 text-[12.5px] font-medium text-muted'
                  }
                >
                  {done ? <BadgeCheck className="size-3.5" /> : <Clock className="size-3.5" />}
                  {certification.status}
                </span>
              </li>
            )
          })}
        </ul>
        <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-muted">{formation.note}</p>
      </section>

      {/* Parcours résumé */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Formation et stages">Chronologie</SectionTitle>
        <ol className="mt-8 border-t border-line">
          {parcours.map((step) => (
            <li key={step.title + step.period} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
              <span className="text-[13.5px] tabular-nums text-faint">{step.period}</span>
              <span>
                <span className="block text-[16.5px] font-medium">{step.title}</span>
                <span className="block text-[14.5px] text-muted">{step.place}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
