import { realisations } from '../../data/site'
import { PageHeader } from '../components/PageHeader'
import { WorkCard } from '../components/WorkCard'

export function Realisations() {
  return (
    <>
      <PageHeader
        kicker="Réalisations professionnelles"
        title={['Projets, TP et', 'missions de stage']}
        intro="Chaque réalisation est présentée sous forme de fiche : contexte et besoin, travail personnel et travail de groupe, outils, démarche, résultat, difficultés rencontrées, acquis et compétences du référentiel mobilisées. Les preuves techniques sont listées en annexe de chaque fiche."
      />
      <section className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-x-6 gap-y-14 md:grid-cols-2 lg:gap-x-8 lg:gap-y-20">
          {realisations.map((r, i) => (
            <WorkCard key={r.slug} realisation={r} index={i} />
          ))}
        </div>
        <p className="mt-16 max-w-2xl border-t border-line pt-6 text-[14px] leading-relaxed text-muted">
          Les images de couverture sont des visuels provisoires : remplacez-les par vos schémas et captures d’écran
          dans <code className="text-[13px]">public/images</code>, puis mettez à jour les chemins dans{' '}
          <code className="text-[13px]">src/data/site.ts</code>.
        </p>
      </section>
    </>
  )
}
