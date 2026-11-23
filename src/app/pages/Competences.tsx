import { Link } from 'react-router'

import { competenceMatrix, referentiel } from '../../data/site'
import { PageHeader, SectionTitle } from '../components/PageHeader'
import { Reveal } from '../components/motion'

const groups = [...new Set(referentiel.map((c) => c.group))]

export function Competences() {
  return (
    <>
      <PageHeader
        kicker="Tableau de synthèse"
        title={['Compétences', 'du référentiel']}
        intro="Ce tableau relie chaque réalisation aux compétences du référentiel du BTS SIO. Il permet au jury de repérer rapidement ce qui a été couvert, et par quel projet."
      />

      <section className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="overflow-x-auto rounded-card border border-line">
          <table className="w-full min-w-[900px] border-collapse text-left text-[13.5px]">
            <caption className="sr-only">Réalisations et compétences mobilisées</caption>
            <thead>
              <tr className="bg-surface-2/60">
                <th scope="col" className="sticky left-0 z-10 bg-surface-2/95 px-5 py-4 font-medium backdrop-blur">
                  Réalisation
                </th>
                {referentiel.map((c) => (
                  <th key={c.code} scope="col" className="px-3 py-4 text-center align-bottom">
                    <span className="block whitespace-nowrap font-medium">{c.code}</span>
                    <span className="mt-1 block max-w-[110px] text-[10.5px] font-normal leading-tight text-muted">
                      {c.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competenceMatrix.map((row) => (
                <tr key={row.slug} className="border-t border-line">
                  <th scope="row" className="sticky left-0 z-10 bg-bg px-5 py-4 font-normal">
                    <Link to={`/realisations/${row.slug}`} className="link-draw font-medium">
                      {row.title}
                    </Link>
                  </th>
                  {referentiel.map((c) => {
                    const active = row.competences.includes(c.code)
                    return (
                      <td key={c.code} className="px-3 py-4 text-center">
                        {active ? (
                          <span className="inline-block size-2.5 rounded-full bg-accent" aria-label="Compétence mobilisée" />
                        ) : (
                          <span className="text-faint" aria-hidden>
                            ·
                          </span>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
              <tr className="border-t border-line bg-surface-2/40">
                <th scope="row" className="sticky left-0 z-10 bg-surface-2/95 px-5 py-4 text-[13px] font-medium">
                  Total par compétence
                </th>
                {referentiel.map((c) => {
                  const total = competenceMatrix.filter((row) => row.competences.includes(c.code)).length
                  return (
                    <td key={c.code} className="px-3 py-4 text-center tabular-nums text-muted">
                      {total}
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 flex items-center gap-2 text-[13px] text-muted">
          <span className="inline-block size-2.5 rounded-full bg-accent" />
          Compétence mobilisée par la réalisation
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Référentiel BTS SIO">Détail des compétences</SectionTitle>
        <div className="mt-8 grid gap-10 md:grid-cols-2 lg:gap-16">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-[13px] uppercase tracking-[0.16em] text-faint">{group}</h3>
              <ul className="mt-4 border-t border-line">
                {referentiel
                  .filter((c) => c.group === group)
                  .map((c) => (
                    <li key={c.code} className="flex gap-4 border-b border-line py-4">
                      <span className="w-20 shrink-0 text-[13px] font-medium">{c.code}</span>
                      <span className="text-[15px] leading-relaxed text-muted">{c.label}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="max-w-2xl text-[14px] leading-relaxed text-muted">
            Les codes utilisés ici sont une simplification lisible du référentiel : adaptez-les aux intitulés exacts de
            votre établissement et de votre tableau de synthèse officiel.
          </p>
        </Reveal>
      </section>
    </>
  )
}
