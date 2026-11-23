import { motion } from 'motion/react'
import { ArrowLeft, ArrowUpRight, FileText } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router'

import { bySlug, realisations, referentiel } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

const ease = [0.22, 1, 0.36, 1] as const

function Block({ title, children, aside }: { title: string; children: ReactNode; aside?: string }) {
  return (
    <section className="border-t border-line pt-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="font-display text-[26px] sm:text-[32px]">{title}</h2>
        {aside && <p className="text-[13px] uppercase tracking-[0.14em] text-faint">{aside}</p>}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export function Work() {
  const { slug } = useParams()
  const realisation = slug ? bySlug(slug) : undefined
  if (!realisation) return <Navigate to="/realisations" replace />
  const index = realisations.findIndex((r) => r.slug === realisation.slug)
  const next = realisations[(index + 1) % realisations.length]
  const competenceLabels = referentiel.filter((c) => realisation.competences.includes(c.code))

  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Link
        to="/realisations"
        className="inline-flex h-9 items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        Toutes les réalisations
      </Link>

      <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-[13px] uppercase tracking-[0.16em] text-faint">
            {realisation.category} — {realisation.year}
          </p>
          <Lines as="h1" className="font-display mt-3 text-[clamp(40px,7vw,104px)]" lines={[realisation.title]} />
        </div>
        <Reveal delay={0.2} className="max-w-md text-pretty text-[17px] leading-relaxed text-muted lg:pb-4">
          {realisation.summary}
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease }}
        className="mt-12 overflow-hidden rounded-[32px]"
        style={{ background: realisation.tint }}
      >
        <Parallax src={realisation.cover} alt={realisation.title} className="aspect-[16/10] sm:aspect-[16/9]" strength={5} />
      </motion.div>

      {/* Fiche */}
      <div className="mt-16 grid gap-14 lg:grid-cols-[300px_1fr] lg:gap-20">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 text-[14px] lg:grid-cols-1">
            {[
              ['Client / cadre', realisation.client],
              ['Année', realisation.year],
              ['Outils et technologies', realisation.tools.join(', ')],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-line pt-3">
                <dt className="text-muted">{label}</dt>
                <dd className="mt-1 text-fg">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 border-t border-line pt-3">
            <p className="text-[14px] text-muted">Compétences mobilisées</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {competenceLabels.map((c) => (
                <li key={c.code}>
                  <Link
                    to="/competences"
                    className="inline-flex items-center gap-1.5 rounded-[8px] border border-line-strong px-2.5 py-1 text-[12.5px] text-muted transition-colors hover:border-fg hover:text-fg"
                    title={c.label}
                  >
                    <span className="font-medium">{c.code}</span>
                    <span className="hidden xl:inline">{c.label.split(' ').slice(0, 4).join(' ')}…</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 border-t border-line pt-3">
            <p className="text-[14px] text-muted">Preuves en annexe</p>
            <ul className="mt-3 flex flex-col gap-3">
              {realisation.annexes.map((annexe) => (
                <li key={annexe.label}>
                  <a
                    href={annexe.href}
                    className="link-draw inline-flex items-start gap-2 text-[13.5px] font-medium"
                  >
                    <FileText className="mt-0.5 size-4 shrink-0" />
                    <span>
                      {annexe.label}
                      {annexe.note && <span className="mt-0.5 block text-[12px] font-normal text-faint">{annexe.note}</span>}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex max-w-3xl flex-col gap-14">
          <Block title="Contexte et besoin" aside="Situation initiale">
            <p className="text-pretty text-[17px] leading-relaxed text-fg/90">{realisation.context}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {realisation.need.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Cahier des charges" aside="Contraintes">
            <ul className="flex flex-col gap-3">
              {realisation.specifications.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-fg/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Ce que j’ai fait" aside="Travail personnel">
            <ul className="flex flex-col gap-3">
              {realisation.personal.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-fg/90">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-fg" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Ce qui relevait du groupe" aside="Travail collectif">
            <ul className="flex flex-col gap-3">
              {realisation.group.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-fg/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Démarche" aside="Étapes">
            <ol className="flex flex-col">
              {realisation.steps.map((step, i) => (
                <li key={step} className="grid grid-cols-[40px_1fr] gap-3 border-b border-line py-4 last:border-b-0">
                  <span className="text-[13px] tabular-nums text-faint">0{i + 1}</span>
                  <span className="text-[16px] leading-relaxed text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="Schémas et captures" aside="À remplacer par vos preuves">
            <div className="grid gap-6 sm:grid-cols-2">
              {realisation.images.map((image) => (
                <figure key={image.caption}>
                  <div className="image-frame overflow-hidden rounded-image" style={{ background: realisation.tint }}>
                    <img src={image.src} alt={image.caption} className="aspect-[4/3] w-full object-cover" />
                  </div>
                  <figcaption className="mt-2 text-[13px] leading-snug text-muted">{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </Block>

          <Block title="Résultat" aside="Bilan">
            <p className="text-pretty text-[17px] leading-relaxed text-fg/90">{realisation.result}</p>
          </Block>

          <Block title="Difficultés et solutions" aside="Retour d’expérience">
            <ul className="flex flex-col gap-6">
              {realisation.difficulties.map((d) => (
                <li key={d.problem} className="rounded-card border border-line p-5">
                  <p className="text-[15.5px] font-medium">{d.problem}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{d.solution}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Ce que j’ai appris" aside="Acquis">
            <ul className="flex flex-col gap-3">
              {realisation.learned.map((item) => (
                <li key={item} className="flex gap-3 text-[16px] leading-relaxed text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      <Link to={`/realisations/${next.slug}`} className="group mt-32 block border-t border-line pt-10">
        <p className="text-[14px] text-muted">Réalisation suivante</p>
        <div className="mt-3 flex items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(32px,6vw,84px)] leading-tight transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
            {next.title}
          </h2>
          <span
            className="image-frame hidden aspect-[4/3] w-[220px] shrink-0 overflow-hidden rounded-[20px] sm:block"
            style={{ background: next.tint }}
          >
            <img
              src={next.cover}
              alt=""
              className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </span>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-muted">
          Ouvrir la fiche <ArrowUpRight className="size-3.5" />
        </span>
      </Link>
    </article>
  )
}
