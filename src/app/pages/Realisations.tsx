import { realisations } from '../../data/site'
import { PageHeader } from '../components/PageHeader'
import { WorkCard } from '../components/WorkCard'

export function Realisations() {
  return (
    <>
      <PageHeader
        kicker="Réalisations professionnelles"
        title={['Projets, TP et', 'missions de stage']}
        intro="Chaque réalisation est présentée sous forme de fiche : contexte et besoin, travail personnel et travail de groupe, outils, démarche, résultat, difficultés rencontrées, acquis et compétences du référentiel mobilisées."
      />
      <section className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 sm:pt-24">
        {realisations.length > 0 ? (
          <>
            <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
              {realisations.map((r, i) => (
                <WorkCard key={r.slug} realisation={r} index={i} />
              ))}
            </div>
            <p className="mt-16 max-w-2xl border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
              Les images de couverture sont des visuels provisoires, à remplacer par vos schémas et captures d’écran.
            </p>
          </>
        ) : (
          <div className="max-w-2xl rounded-card border border-line p-8 sm:p-10">
            <p className="font-display text-[28px] leading-tight">Fiches en cours de rédaction</p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              Les réalisations professionnelles (travaux pratiques, projets et missions de stage) seront publiées ici
              sous forme de fiches détaillées au fur et à mesure de la formation : contexte, besoin, travail personnel
              et de groupe, outils, démarche, résultat, difficultés et compétences mobilisées.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              En attendant, le parcours, les stages et le référentiel de compétences sont consultables dans les
              rubriques Formation, Entreprise et Compétences.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
