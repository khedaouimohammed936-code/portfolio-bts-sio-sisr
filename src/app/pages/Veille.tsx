import { ArrowUpRight, Bell, BookOpen, Rss } from 'lucide-react'

import { veille } from '../../data/site'
import { PageHeader, SectionTitle } from '../components/PageHeader'
import { Reveal } from '../components/motion'

export function Veille() {
  return (
    <>
      <PageHeader kicker="Veille technologique" title={['Sécurité des accès', 'distants et Zero Trust']} intro={veille.subject} />

      <section className="mx-auto max-w-[1400px] px-5 pt-16 sm:px-8 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="h-fit rounded-card bg-fg p-8 text-bg">
            <h2 className="font-display text-[28px] leading-tight">Pourquoi ce sujet</h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-bg/75">{veille.why}</p>
            <a
              href={veille.sources[0].href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-bg"
            >
              Recommandations ANSSI
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
          <div>
            <SectionTitle aside="Outils et fréquence">Méthode de veille</SectionTitle>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {veille.method.map((item) => (
                <li key={item.tool} className="rounded-card border border-line p-5">
                  <p className="flex items-center gap-2 text-[15px] font-medium">
                    <Rss className="size-4 text-accent" />
                    {item.tool}
                  </p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{item.usage}</p>
                  <p className="mt-3 text-[12.5px] uppercase tracking-[0.12em] text-faint">{item.frequency}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Consultées régulièrement">Sources</SectionTitle>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {veille.sources.map((source) => (
            <li key={source.name}>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-card border border-line px-5 py-4 text-[15px] transition-colors hover:border-fg/40"
              >
                <span className="inline-flex items-center gap-2">
                  <BookOpen className="size-4 text-muted" />
                  {source.name}
                </span>
                <ArrowUpRight className="size-4 text-muted transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Acquis */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Ce que j’en ai fait">Apprentissages concrets</SectionTitle>
        <ol className="mt-8 flex flex-col gap-4">
          {veille.learnings.map((learning, i) => (
            <Reveal key={learning.title} delay={i * 0.05}>
              <li className="grid gap-6 rounded-card border border-line p-6 sm:grid-cols-[60px_1fr] sm:p-8">
                <span className="font-display text-[32px] leading-none text-faint">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[24px] leading-snug">{learning.title}</h3>
                  <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed text-muted">{learning.what}</p>
                  <p className="mt-4 border-l-2 border-accent pl-4 text-[15px] leading-relaxed text-fg/90">
                    <span className="text-[12px] uppercase tracking-[0.14em] text-faint">Mise en pratique — </span>
                    {learning.action}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Lectures */}
      <section className="mx-auto max-w-[1400px] px-5 pt-24 sm:px-8 sm:pt-32">
        <SectionTitle aside="Fiches de lecture">Articles retenus</SectionTitle>
        <ul className="mt-8 border-t border-line">
          {veille.articles.map((article) => (
            <li key={article.title} className="grid gap-2 border-b border-line py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
              <span className="text-[13px] text-faint">
                {article.source}
                <span className="block tabular-nums">{article.date}</span>
              </span>
              <span>
                <span className="flex items-center gap-2 text-[16.5px] font-medium">
                  <Bell className="size-3.5 text-muted" />
                  {article.title}
                </span>
                <span className="mt-1 block text-[15px] leading-relaxed text-muted">{article.summary}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-[14px] leading-relaxed text-muted">
          Ajoutez vos propres fiches de lecture et captures : le sujet, les sources et la fréquence de veille doivent
          être vérifiables par le jury.
        </p>
      </section>
    </>
  )
}
