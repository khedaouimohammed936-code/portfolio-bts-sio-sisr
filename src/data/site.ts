// Tout le contenu du portfolio vit dans ce fichier.
// Les documents (CV, attestations, annexes) vont dans public/documents,
// les images et captures dans public/images.

// Les documents suivent la base de build : racine sur Freebuff Sites,
// sous /<depot>/ sur GitHub Pages.
const doc = (file: string) => `${import.meta.env.BASE_URL}documents/${file}`

export const site = {
  name: 'Mohammed-Houssam Khedaoui',
  title: 'Étudiant en BTS SIO — option SISR',
  tagline: 'Administration systèmes, réseaux et cybersécurité',
  location: 'Nantes',
  timezone: 'Europe/Paris',
  email: 'khedaoui.mohammedhoussam@gmail.com',
  linkedin: '',
  github: 'https://github.com/khedaouimohammed936-code',
  cv: doc('cv.pdf'),
  available: false,
  intro:
    'Étudiant en BTS SIO option SISR au lycée La Joliverie à Nantes, je me forme à l’administration des systèmes, des réseaux et à la sécurisation des infrastructures. Curieux et méthodique, j’aime comprendre comment les services communiquent avant de les faire tenir ensemble.',
  quickSkills: ['Windows Server / AD DS', 'Debian', 'Proxmox VE', 'Cisco', 'PowerShell', 'Supervision'],
  marquee: ['Active Directory', 'Réseaux & VLAN', 'Virtualisation', 'Debian', 'Cybersécurité', 'Supervision', 'PowerShell'],
}

export const contact = {
  email: site.email,
  linkedin: site.linkedin,
  github: site.github,
  location: site.location,
  cv: site.cv,
}

export const profileParagraphs = [
  'Je m’appelle Mohammed-Houssam Khedaoui et je suis étudiant en BTS SIO, option SISR (Solutions d’Infrastructure, Systèmes et Réseaux), au lycée La Joliverie à Nantes. J’ai auparavant obtenu un baccalauréat général avec les spécialités mathématiques et numérique et sciences informatiques (NSI), qui m’a donné le goût des systèmes et de la logique.',
  'Ce qui me plaît dans le SISR, c’est le côté concret : un réseau qui tombe, un service qui ne démarre pas, une sauvegarde qui n’a jamais été testée. J’apprends en manipulant, en documentant ce que je fais et en recommençant quand ça ne marche pas.',
  'Ce portfolio rassemble ma formation, mes stages en entreprise, les compétences du référentiel et ma veille technologique consacrée à la cybersécurité. Il est destiné au jury du BTS SIO : le CV et les attestations sont téléchargeables dans la rubrique annexes.',
]

export const highlights = [
  { value: '2025', label: 'entrée en BTS SIO' },
  { value: '2027', label: 'fin de formation prévue' },
  { value: '2', label: 'stages en entreprise' },
  { value: '1', label: 'sujet de veille documenté' },
]

export const parcours = [
  {
    period: '2025 — 2027',
    title: 'BTS SIO — option SISR',
    place: 'Lycée La Joliverie, Nantes',
    detail: 'Administration des systèmes et des réseaux, cybersécurité, support et supervision.',
    type: 'formation' as const,
  },
  {
    period: '1re année',
    title: 'Stage en entreprise',
    place: 'Entreprise d’accueil — Nantes',
    detail: 'Premier stage du BTS SIO, en service informatique.',
    type: 'stage' as const,
  },
  {
    period: '2e année',
    title: 'Stage de fin de formation',
    place: 'Entreprise d’accueil — Nantes',
    detail: 'Second stage du BTS SIO, en service informatique.',
    type: 'stage' as const,
  },
  {
    period: 'Jusqu’en 2025',
    title: 'Baccalauréat général',
    place: 'Nantes',
    detail: 'Spécialités mathématiques et numérique et sciences informatiques (NSI).',
    type: 'formation' as const,
  },
]

export const formation = {
  program: 'BTS SIO — option SISR',
  school: 'Lycée La Joliverie',
  place: 'Nantes',
  period: '2025 — 2027',
  context: [
    'Le BTS Services Informatiques aux Organisations forme en deux ans aux métiers de l’informatique en entreprise. La formation est organisée autour de deux options : SISR pour les infrastructures, systèmes et réseaux, et SLAM pour le développement d’applications.',
    'J’ai choisi l’option SISR parce que je préfère concevoir et maintenir les fondations : réseaux, serveurs, annuaires, sauvegardes et sécurité. Les projets sont menés en groupe, avec un cahier des charges et une soutenance devant un jury.',
    'Je suis la formation au lycée La Joliverie, à Nantes, de 2025 à 2027. Les travaux pratiques s’appuient sur des machines virtuelles et des équipements réseau pour reproduire des situations d’entreprise.',
  ],
  specialties: [
    {
      title: 'SISR — mon option',
      body: 'Conception d’infrastructures, administration de serveurs Windows et Linux, routage et commutation, virtualisation, supervision, sauvegarde et sécurisation des accès.',
    },
    {
      title: 'SLAM — l’autre option',
      body: 'Développement d’applications, bases de données, applications web et mobile, gestion de version. Suivie en tronc commun la première année.',
    },
  ],
  certifications: [] as { name: string; issuer: string; year: string; status: string }[],
  note: 'Aucune certification n’est encore obtenue : cette liste sera complétée au fur et à mesure, avec les attestations déposées dans public/documents.',
}

export interface Realisation {
  slug: string
  title: string
  category: string
  client: string
  year: string
  cover: string
  tint: string
  summary: string
  context: string
  need: string[]
  specifications: string[]
  personal: string[]
  group: string[]
  tools: string[]
  steps: string[]
  result: string
  difficulties: { problem: string; solution: string }[]
  learned: string[]
  competences: string[]
  images: { src: string; caption: string }[]
  annexes: { label: string; href: string; note?: string }[]
  size: 'large' | 'small'
}

// Les fiches de réalisation seront ajoutées au fil de la formation.
// Chaque entrée suit l'interface Realisation ci-dessus (voir l'historique du
// dépôt pour un exemple complet).
export const realisations: Realisation[] = []

export const bySlug = (slug: string) => realisations.find((r) => r.slug === slug)

export const stages = [
  {
    company: 'Entreprise d’accueil',
    sector: 'Secteur d’activité à préciser',
    place: 'Nantes',
    period: '1re année',
    service: 'Service informatique',
    context: 'Premier stage du BTS SIO option SISR, effectué à Nantes.',
    missions: [] as string[],
    tools: [] as string[],
    proof: { label: 'Attestation de stage', href: doc('attestation-stage-1.pdf'), note: 'Document à déposer dans public/documents' },
    linked: [] as string[],
  },
  {
    company: 'Entreprise d’accueil',
    sector: 'Secteur d’activité à préciser',
    place: 'Nantes',
    period: '2e année',
    service: 'Service informatique',
    context: 'Second stage du BTS SIO option SISR, effectué à Nantes.',
    missions: [] as string[],
    tools: [] as string[],
    proof: { label: 'Attestation de stage', href: doc('attestation-stage-2.pdf'), note: 'Document à déposer dans public/documents' },
    linked: [] as string[],
  },
]

export const referentiel = [
  { code: 'B1.1', label: 'Gérer le patrimoine informatique', group: 'Support et mise à disposition' },
  { code: 'B1.2', label: 'Répondre aux incidents et aux demandes d’assistance', group: 'Support et mise à disposition' },
  { code: 'B1.3', label: 'Développer la présence en ligne de l’organisation', group: 'Support et mise à disposition' },
  { code: 'B1.4', label: 'Travailler en mode projet', group: 'Organisation' },
  { code: 'B1.5', label: 'Mettre à disposition des utilisateurs un service informatique', group: 'Support et mise à disposition' },
  { code: 'SISR-1', label: 'Concevoir une solution d’infrastructure réseau', group: 'Spécialité SISR' },
  { code: 'SISR-2', label: 'Installer, tester et déployer une solution d’infrastructure réseau', group: 'Spécialité SISR' },
  { code: 'SISR-3', label: 'Exploiter, dépanner et superviser une solution d’infrastructure réseau', group: 'Spécialité SISR' },
  { code: 'SISR-4', label: 'Organiser et sécuriser l’accès aux données et aux services', group: 'Spécialité SISR' },
]

// Tableau de synthèse : chaque réalisation et les compétences qu'elle mobilise.
export const competenceMatrix = realisations.map((r) => ({
  slug: r.slug,
  title: r.title,
  competences: r.competences,
}))

export const veille = {
  subject: 'Cybersécurité : ransomware et phishing avancé',
  why:
    'Les rançongiciels figurent parmi les menaces les plus coûteuses pour les organisations, et le phishing reste leur principal vecteur d’entrée. J’ai choisi ce sujet pour comprendre comment une attaque se construit, d’un mail frauduleux jusqu’au chiffrement des données, et quelles mesures de prévention et de sauvegarde réduisent réellement le risque.',
  method: [
    { tool: 'Feedly', usage: 'Abonnement aux flux RSS de l’ANSSI, du CERT-FR et de Cybermalveillance.gouv.fr', frequency: 'Consultation 2 fois par semaine' },
    { tool: 'Newsletter ANSSI', usage: 'Alertes et guides de recommandations', frequency: 'À chaque publication' },
    { tool: 'YouTube / webinaires', usage: 'Conférences techniques et retours d’expérience d’incidents', frequency: '1 fois par mois' },
    { tool: 'Notion', usage: 'Fiches de synthèse et sources classées par thème', frequency: 'Mise à jour après chaque lecture' },
  ],
  sources: [
    { name: 'ANSSI — recommandations et guides', href: 'https://www.ssi.gouv.fr' },
    { name: 'CERT-FR — alertes et avis', href: 'https://www.cert.ssi.gouv.fr' },
    { name: 'Cybermalveillance.gouv.fr — fiches menaces', href: 'https://www.cybermalveillance.gouv.fr' },
    { name: 'CNIL — sécurité des données personnelles', href: 'https://www.cnil.fr' },
  ],
  learnings: [
    {
      title: 'Le phishing reste la première porte d’entrée',
      what:
        'La plupart des rançongiciels documentés par l’ANSSI commencent par un mail, un lien ou une pièce jointe qui exécute un code malveillant. Les campagnes récentes imitent des services connus et ciblent des fonctions précises (comptabilité, direction) plutôt que d’envoyer le même message à tout le monde.',
      action:
        'J’ai appris à repérer les signaux d’un mail frauduleux (domaine expéditeur, lien réel derrière le texte, urgence artificielle) et à vérifier une demande sensible par un autre canal avant d’agir.',
    },
    {
      title: 'Une sauvegarde hors ligne change tout',
      what:
        'Les groupes de rançongiciels chiffrent d’abord les sauvegardes accessibles depuis le réseau, puis les données de production. Une copie hors ligne ou immuable est souvent la seule voie de restauration sans payer.',
      action:
        'J’ai retenu la règle 3-2-1 (trois copies, deux supports, une hors site) et l’importance de tester une restauration plutôt que de se contenter de constater qu’une sauvegarde existe.',
    },
    {
      title: 'MFA et moindre privilège limitent la casse',
      what:
        'Un compte à privilèges volé suffit à déployer un rançongiciel sur tout un domaine. La double authentification, les comptes d’administration séparés et la limitation des droits réduisent fortement la progression de l’attaquant.',
      action:
        'Dans les travaux pratiques d’administration, j’applique désormais la séparation entre compte quotidien et compte d’administration, et je documente les droits accordés.',
    },
  ],
  articles: [
    {
      title: 'Panorama de la cybermenace',
      source: 'ANSSI',
      date: '2025',
      summary: 'Tendances des attaques par rançongiciel, secteurs visés et modes opératoires observés.',
    },
    {
      title: 'Recommandations pour la protection contre les rançongiciels',
      source: 'ANSSI',
      date: '2025',
      summary: 'Mesures de prévention, sauvegarde, cloisonnement du système d’information et gestion de crise.',
    },
    {
      title: 'Ransomware : comment réagir ?',
      source: 'Cybermalveillance.gouv.fr',
      date: '2026',
      summary: 'Réflexes en cas d’infection : isoler, préserver les preuves, porter plainte, restaurer.',
    },
  ],
}

export const annexes = [
  { label: 'CV (PDF)', href: doc('cv.pdf'), note: 'À déposer dans public/documents' },
  { label: 'Attestation de stage — première année', href: doc('attestation-stage-1.pdf'), note: 'Document à déposer' },
  { label: 'Attestation de stage — deuxième année', href: doc('attestation-stage-2.pdf'), note: 'Document à déposer' },
  { label: 'Tableau de synthèse des compétences (PDF)', href: '#', note: 'À générer à partir de la page Compétences' },
]

export const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/formation', label: 'Formation' },
  { to: '/entreprise', label: 'Entreprise' },
  { to: '/competences', label: 'Compétences' },
  { to: '/veille', label: 'Veille' },
]
