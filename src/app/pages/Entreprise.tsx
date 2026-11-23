import { ArrowRight, Building2, FileText, Wrench } from 'lucide-react'
import { Link } from 'react-router'

import { bySlug, stages } from '../../data/site'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/motion'

export function Entreprise() {
  return (
    <>
      <PageHeader
        kicker="Expériences en entreprise"
        title={['Stages et', 'missions en entreprise']}
        intro="Deux périodes de stage en entreprise, encadrées par des professionnels du service informatique. Pour chacune : l’entreprise, le service d’accueil, les missions et les documents de validation."
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="flex flex-col gap-6">
          {stages.map((stage, i) => (
            <Reveal key={stage.company + stage.period} delay={i * 0.05}>
              <article className="rounded-card border border-line p-7 sm:p-10">
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                  <div>
                    <p className="text-[13px] uppercase tracking-[0.16em] text-faint">
                      Stage {i + 1} — {stage.period}
                    </p>
                    <h2 className="font-display mt-3 text-[32px] leading-tight sm:text-[44px]">{stage.company}</h2>
                    <p className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14.5px] text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="size-4" />
                        {stage.sector}
                      </span>
                      <span>{stage.place}</span>
                    </p>
                  </div>
                  <a
                    href={stage.proof.href}
                    className="inline-flex h-11 w-fit items-center gap-2 rounded-[12px] border border-line-strong px-4 text-[13.5px] font-medium transition-colors hover:bg-fg hover:text-bg"
                  >
                    <FileText className="size-4" />
                    {stage.proof.label}
                  </a>
                </div>

                <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="text-[13px] text-muted">Service d’accueil</p>
                      <p className="mt-1.5 text-[15.5px]">{stage.service}</p>
                    </div>
                    <div>
                      <p className="text-[13px] text-muted">L’entreprise</p>
                      <p className="mt-1.5 text-[15.5px] leading-relaxed text-fg/90">{stage.context}</p>
                    </div>
                    <div>
                      <p className="flex items-center gap-1.5 text-[13px] text-muted">
                        <Wrench className="size-3.5" />
                        Outils utilisés
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {stage.tools.map((tool) => (
                          <li key={tool} className="rounded-[8px] border border-line px-2.5 py-1 text-[12.5px] text-muted">
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {stage.proof.note && <p className="text-[13px] text-faint">{stage.proof.note}</p>}
                  </div>

                  <div>
                    <p className="text-[13px] text-muted">Missions réalisées</p>
                    {stage.missions.length > 0 ? (
                      <ul className="mt-3 flex flex-col gap-3">
                        {stage.missions.map((mission) => (
                          <li key={mission} className="flex gap-3 text-[15.5px] leading-relaxed text-fg/90">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                            {mission}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-[15.5px] leading-relaxed text-muted">
                        Le détail des missions sera ajouté prochainement.
                      </p>
                    )}
                    {stage.linked.length > 0 && (
                    <div className="mt-8 border-t border-line pt-4">
                      <p className="text-[13px] text-muted">Réalisations détaillées pendant ce stage</p>
                      <ul className="mt-3 flex flex-col gap-2">
                        {stage.linked.map((slug) => {
                          const realisation = bySlug(slug)
                          if (!realisation) return null
                          return (
                            <li key={slug}>
                              <Link
                                to={`/realisations/${slug}`}
                                className="link-draw inline-flex items-center gap-1.5 text-[14.5px] font-medium"
                              >
                                {realisation.title}
                                <ArrowRight className="size-3.5" />
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
          Vérifiez qu’aucune information confidentielle (noms de clients, adresses IP réelles, captures d’écran
          internes) n’apparaît dans les documents avant de les publier. Les attestations de stage se déposent dans{' '}
          <code className="text-[13px]">public/documents</code>.
        </p>
      </section>
    </>
  )
}
