import { motion } from 'motion/react'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import { Link } from 'react-router'

import { contact, highlights, parcours, profileParagraphs, site } from '../../data/site'
import { Lines, Magnetic, Parallax, Reveal } from '../components/motion'
import { SectionTitle } from '../components/PageHeader'

const ease = [0.22, 1, 0.36, 1] as const

const sections = [
  {
    to: '/realisations',
    title: 'Réalisations professionnelles',
    body: 'Les projets et travaux pratiques documentés pendant la formation : contexte, démarche et compétences mobilisées.',
  },
  {
    to: '/formation',
    title: 'Formation et certifications',
    body: 'Le BTS SIO option SISR, l’établissement, les spécialités et les certifications obtenues ou en préparation.',
  },
  {
    to: '/entreprise',
    title: 'Expériences en entreprise',
    body: 'Les stages, les missions réalisées, le service d’accueil et les documents de validation.',
  },
  {
    to: '/competences',
    title: 'Tableau de synthèse',
    body: 'Chaque réalisation reliée aux compétences du référentiel BTS SIO, pour le jury.',
  },
  {
    to: '/veille',
    title: 'Veille technologique',
    body: 'Un sujet, des sources, une méthode et ce que j’en ai concrètement retiré.',
  },
]

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <HeroField />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-[13px] uppercase tracking-[0.18em] text-faint"
          >
            Portfolio — {site.title}
          </motion.p>
          <h1 className="font-display mt-4 text-[clamp(56px,12vw,190px)]">
            {site.name.split(' ').map((word, i) => (
              <span key={word} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.25 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-10 flex flex-col gap-8 border-t border-fg/15 pt-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="text-[15px] font-medium">{site.tagline}</p>
              <p className="mt-3 max-w-xl text-pretty text-[17px] leading-relaxed text-muted sm:text-[19px]">{site.intro}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <Link
                  to="/realisations"
                  className="inline-flex h-13 items-center gap-2 rounded-[16px] bg-fg px-6 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
                >
                  Voir mes réalisations
                  <ArrowUpRight className="size-4" />
                </Link>
              </Magnetic>
              <a
                href={contact.cv}
                className="inline-flex h-13 items-center gap-2 rounded-[16px] border border-line-strong px-6 text-[15px] font-medium transition-colors hover:bg-fg hover:text-bg"
              >
                <Download className="size-4" />
                Télécharger mon CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-5" aria-hidden>
        <ul className="font-display flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-[26px] text-fg/70 sm:text-[34px]">
          {[...site.marquee, ...site.marquee].map((item, i) => (
            <li key={i} className="flex items-center gap-10">
              {item}
              <span className="size-2 rounded-full bg-accent" />
            </li>
          ))}
        </ul>
      </div>

      {/* Présentation */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <Parallax src={`${import.meta.env.BASE_URL}images/portrait.jpg`} alt={site.name} className="aspect-[3/4] rounded-image" strength={6} />
            <dl className="mt-6 grid gap-3 text-[14px]">
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Statut</dt>
                <dd className="text-right">{site.available ? 'Disponible pour une alternance' : 'En formation'}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">Localisation</dt>
                <dd className="text-right">{site.location}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line pb-3">
                <dt className="text-muted">E-mail</dt>
                <dd className="text-right">
                  <a href={`mailto:${site.email}`} className="link-draw">
                    {site.email}
                  </a>
                </dd>
              </div>
              {site.linkedin ? (
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">LinkedIn</dt>
                  <dd className="text-right">
                    <a href={site.linkedin} className="link-draw" target="_blank" rel="noreferrer">
                      Profil
                    </a>
                  </dd>
                </div>
              ) : (
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">GitHub</dt>
                  <dd className="text-right">
                    <a href={site.github} className="link-draw" target="_blank" rel="noreferrer">
                      Profil
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Lines
              as="h2"
              className="font-display text-balance text-[38px] sm:text-[52px] lg:text-[60px]"
              lines={['Administrer, sécuriser,', 'documenter']}
            />
            <Reveal delay={0.15} className="mt-8 flex max-w-2xl flex-col gap-5 text-pretty text-[17px] leading-relaxed text-muted">
              {profileParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
            <Reveal delay={0.25} className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-[34px] leading-none sm:text-[44px]">{item.value}</p>
                  <p className="mt-2 text-[13px] leading-snug text-muted">{item.label}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-2">
              {site.quickSkills.map((skill) => (
                <span key={skill} className="rounded-[10px] border border-line-strong px-3 py-1.5 text-[13px] text-muted">
                  {skill}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* CV / parcours */}
      <section id="cv" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pt-28 sm:px-8 sm:pt-36">
        <SectionTitle aside="Formation, stages et alternance">Mon parcours</SectionTitle>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-20">
          <ol className="border-t border-line">
            {parcours.map((step) => (
              <li key={step.title + step.period} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[190px_1fr] sm:gap-6">
                <div>
                  <p className="text-[13px] tabular-nums text-faint">{step.period}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                    {step.type === 'stage' ? 'Stage' : 'Formation'}
                  </p>
                </div>
                <div>
                  <p className="text-[17px] font-medium">{step.title}</p>
                  <p className="mt-1 text-[14.5px] text-muted">{step.place}</p>
                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <Reveal delay={0.1} className="flex h-fit flex-col gap-4 rounded-card bg-surface-2/60 p-8">
            <p className="font-display text-[26px]">Mon CV</p>
            <p className="text-[15px] leading-relaxed text-muted">
              Le CV reprend la formation, les stages et les compétences techniques. Le fichier PDF est à déposer dans{' '}
              <code className="text-[13px]">public/documents</code>.
            </p>
            <a
              href={contact.cv}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-[14px] bg-fg px-5 text-[15px] font-medium text-bg transition-colors hover:bg-[#2b2925]"
            >
              <Download className="size-4" />
              Télécharger le CV
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-[14px] border border-line-strong px-5 text-[15px] font-medium transition-colors hover:bg-fg hover:text-bg"
            >
              <Mail className="size-4" />
              Me contacter
            </a>
            <Link to="/formation" className="link-draw mt-2 inline-flex items-center gap-1 text-[14px] font-medium">
              Voir la formation en détail
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Sommaire */}
      <section className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
        <SectionTitle aside="Ce que le jury trouvera ici">Sommaire du portfolio</SectionTitle>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((item, i) => (
            <Reveal key={item.to} delay={(i % 3) * 0.05}>
              <Link
                to={item.to}
                className="group flex h-full flex-col justify-between gap-6 rounded-card border border-line p-7 transition-colors hover:border-fg/40"
              >
                <div>
                  <h3 className="font-display text-[26px] leading-tight">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">{item.body}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-medium">
                  Ouvrir
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

// Champs de couleur lents derrière le héros, fondus dans le papier.
function HeroField() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent_96%)]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0"
      >
        <div className="absolute -top-[25%] right-[-12%] h-[95%] w-[70%] animate-drift-a rounded-full bg-[radial-gradient(closest-side,rgb(47_59_255/0.72),transparent)] blur-3xl" />
        <div className="absolute -top-[10%] left-[-12%] h-[80%] w-[62%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(255_106_61/0.62),transparent)] blur-3xl" />
        <div className="absolute top-[22%] left-[32%] h-[70%] w-[56%] animate-drift-c rounded-full bg-[radial-gradient(closest-side,rgb(255_196_120/0.7),transparent)] blur-3xl" />
        <div className="absolute top-[45%] right-[12%] h-[50%] w-[40%] animate-drift-b rounded-full bg-[radial-gradient(closest-side,rgb(196_170_255/0.55),transparent)] blur-3xl" />
      </motion.div>
      <div className="grain absolute inset-0" />
    </div>
  )
}
