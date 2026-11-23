// Tout le contenu du portfolio vit dans ce fichier.
// Remplacez les informations d'exemple par les vôtres : les pages se mettent
// à jour automatiquement. Les documents (CV, attestations, annexes) vont dans
// public/documents, les images et captures dans public/images.

// Les images suivent la base de build : racine sur Freebuff Sites,
// sous /<depot>/ sur GitHub Pages.
const image = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const site = {
  name: 'Votre Nom',
  title: 'Étudiant en BTS SIO — option SISR',
  tagline: 'Administration systèmes, réseaux et cybersécurité',
  location: 'Paris',
  timezone: 'Europe/Paris',
  email: 'prenom.nom@example.com',
  linkedin: 'https://www.linkedin.com/in/votre-profil',
  github: 'https://github.com/votre-profil',
  cv: '/documents/cv.pdf',
  available: true,
  intro:
    'Étudiant en deuxième année de BTS SIO option SISR, je me forme à l’administration des systèmes, des réseaux et à la sécurisation des infrastructures. Curieux et méthodique, j’aime comprendre comment les services communiquent avant de les faire tenir ensemble.',
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
  'Je m’appelle Votre Nom et je suis étudiant en BTS SIO, option SISR (Solutions d’Infrastructure, Systèmes et Réseaux). Avant le BTS, j’ai obtenu un baccalauréat général avec les spécialités mathématiques et numérique et sciences informatiques, qui m’a donné le goût des systèmes et de la logique.',
  'Ce qui me plaît dans le SISR, c’est le côté concret : un réseau qui tombe, un service qui ne démarre pas, une sauvegarde qui n’a jamais été testée. J’apprends en manipulant, en documentant ce que je fais et en recommençant quand ça ne marche pas.',
  'Je cherche aujourd’hui une alternance ou un stage en administration systèmes et réseaux, en support infrastructure ou en cybersécurité, pour continuer à apprendre sur des environnements réels.',
]

export const highlights = [
  { value: '2024', label: 'entrée en BTS SIO' },
  { value: '2', label: 'stages en entreprise' },
  { value: '4', label: 'certifications suivies' },
  { value: '6', label: 'réalisations documentées' },
]

export const parcours = [
  {
    period: '2024 — 2026',
    title: 'BTS SIO — option SISR',
    place: 'Lycée Votre Établissement, Paris',
    detail: 'Administration des systèmes et des réseaux, cybersécurité, support et supervision.',
    type: 'formation' as const,
  },
  {
    period: 'Mai — juin 2026',
    title: 'Stage de fin de formation',
    place: 'Nom de l’entreprise — service infrastructure',
    detail: 'Administration du réseau, supervision et gestion de parc.',
    type: 'stage' as const,
  },
  {
    period: 'Janvier — février 2026',
    title: 'Stage de première année',
    place: 'Nom de l’entreprise — service support',
    detail: 'Support utilisateurs, gestion des incidents et déploiement de postes.',
    type: 'stage' as const,
  },
  {
    period: '2021 — 2024',
    title: 'Baccalauréat général',
    place: 'Lycée Votre Établissement, Paris',
    detail: 'Spécialités mathématiques et numérique et sciences informatiques, mention bien.',
    type: 'formation' as const,
  },
]

export const formation = {
  program: 'BTS SIO — option SISR',
  school: 'Lycée Votre Établissement',
  place: 'Paris',
  period: '2024 — 2026',
  context: [
    'Le BTS Services Informatiques aux Organisations forme en deux ans aux métiers de l’informatique en entreprise. La formation est organisée autour de deux options : SISR pour les infrastructures, systèmes et réseaux, et SLAM pour le développement d’applications.',
    'J’ai choisi l’option SISR parce que je préfère concevoir et maintenir les fondations : réseaux, serveurs, annuaires, sauvegardes et sécurité. Les projets sont menés en groupe de deux à quatre étudiants, avec un cahier des charges et une soutenance devant un jury.',
    'L’établissement met à disposition une salle serveur, des hôtes de virtualisation et des équipements réseau Cisco pour les travaux pratiques.',
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
  certifications: [
    { name: 'CCNA 1 — Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2025', status: 'Obtenue' },
    { name: 'MOOC SecNumacadémie', issuer: 'ANSSI', year: '2025', status: 'Obtenue' },
    { name: 'PIX+ Compétences numériques', issuer: 'PIX', year: '2025', status: 'Obtenue' },
    { name: 'Microsoft AZ-900 — Azure Fundamentals', issuer: 'Microsoft', year: '2026', status: 'En préparation' },
  ],
  note: 'Remplacez cette liste par vos certifications réelles et déposez les attestations dans public/documents.',
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

export const realisations: Realisation[] = [
  {
    slug: 'active-directory',
    title: 'Déploiement d’un domaine Active Directory',
    category: 'TP — Administration Windows',
    client: 'Travaux pratiques encadrés — BTS SIO',
    year: '2025',
    cover: image('aurora.jpg'),
    tint: '#efe4d8',
    summary:
      'Mise en place d’un contrôleur de domaine Windows Server pour une maquette de 30 postes : comptes, groupes, stratégies de groupe et partages.',
    context:
      'Dans le cadre des travaux pratiques de première année, l’établissement simule une PME de 30 salariés répartis en trois services (direction, commercial, technique). Chaque binôme doit fournir un annuaire centralisé et une politique de sécurité applicable à tous les postes.',
    need: [
      'Centraliser la gestion des comptes et des mots de passe des 30 utilisateurs.',
      'Appliquer une politique de mot de passe et un verrouillage automatique des sessions.',
      'Fournir des partages de fichiers par service avec des droits différenciés.',
      'Automatiser la création des comptes à partir d’un fichier CSV.',
    ],
    specifications: [
      'Un contrôleur de domaine Windows Server 2022 et deux clients Windows 11.',
      'Un domaine unique en sous-réseau 192.168.10.0/24, DNS et DHCP portés par le serveur.',
      'Trois unités d’organisation par service et deux groupes de sécurité par partage.',
      'Documentation technique et procédure de restauration remises au formateur.',
    ],
    personal: [
      'Installation et promotion du contrôleur de domaine, configuration du DNS et du DHCP.',
      'Création de l’arborescence des unités d’organisation, des groupes et des comptes utilisateurs.',
      'Écriture d’un script PowerShell d’import de comptes depuis un CSV avec création des dossiers personnels.',
      'Configuration des GPO de mot de passe, de restriction des périphériques et de lecteurs réseau.',
    ],
    group: [
      'Le binôme a défini ensemble l’arborescence et le plan d’adressage.',
      'Mon camarade a rédigé la partie plan de test et exécuté les tests de connexion des clients.',
      'La documentation finale a été relue et corrigée à deux.',
    ],
    tools: ['Windows Server 2022', 'Active Directory DS', 'DNS / DHCP', 'PowerShell', 'VMware Workstation'],
    steps: [
      'Installation du serveur, adressage fixe et renommage de la machine.',
      'Promotion en contrôleur de domaine, création du domaine et vérification du DNS.',
      'Création des unités d’organisation, groupes de sécurité et comptes de test.',
      'Import des 30 comptes par script PowerShell, puis affectation aux groupes.',
      'Création des partages, des droits NTFS et montage par GPO.',
      'Tests de connexion, de refus d’accès et de verrouillage de session.',
    ],
    result:
      'Les 30 comptes sont créés et fonctionnels en moins de cinq minutes grâce au script. Les tests montrent que chaque service n’accède qu’à son partage et que la politique de mot de passe s’applique correctement. Le TP a été validé avec la note de 18/20.',
    difficulties: [
      {
        problem: 'Les clients ne rejoignaient pas le domaine : le serveur DNS n’était pas utilisé par les postes.',
        solution: 'Correction de l’adressage DHCP pour distribuer l’adresse du contrôleur de domaine comme DNS, puis rejointure réussie.',
      },
      {
        problem: 'Le script PowerShell échouait sur les accents des noms de famille.',
        solution: 'Passage du CSV en UTF-8 et ajout d’un paramètre -Encoding UTF8 à l’import.',
      },
    ],
    learned: [
      'Un annuaire mal servi en DNS ne fonctionne pas, même si tout le reste est correct.',
      'Les GPO se testent toujours avec un compte utilisateur réel, pas seulement en théorie.',
      'Documenter les droits NTFS et partages évite les mauvaises surprises lors de la restauration.',
    ],
    competences: ['B1.1', 'B1.5', 'SISR-2', 'SISR-4'],
    images: [
      { src: image('aurora.jpg'), caption: 'Schéma de l’architecture du domaine (à remplacer par votre schéma).' },
      { src: image('meridian.jpg'), caption: 'Console « Utilisateurs et ordinateurs Active Directory » (à remplacer par votre capture).' },
    ],
    annexes: [
      { label: 'Documentation technique du TP (PDF)', href: '#', note: 'À déposer dans public/documents' },
      { label: 'Script PowerShell d’import CSV', href: '#', note: 'Fichier .ps1 à joindre' },
    ],
    size: 'large',
  },
  {
    slug: 'proxmox-debian',
    title: 'Infrastructure virtualisée Proxmox et Debian',
    category: 'Projet — Virtualisation',
    client: 'Projet de groupe — BTS SIO SISR',
    year: '2026',
    cover: image('meridian.jpg'),
    tint: '#dbe0f5',
    summary:
      'Un hôte Proxmox VE hébergeant quatre machines Debian : serveur web, serveur de fichiers, DNS et pare-feu, avec sauvegardes planifiées.',
    context:
      'Le projet consistait à remplacer une maquette de serveurs physiques par une infrastructure virtualisée pour un club sportif associatif. Le budget imposait un seul serveur et des logiciels libres.',
    need: [
      'Héberger quatre services sur une seule machine physique.',
      'Isoler les services dans des réseaux virtuels distincts.',
      'Sauvegarder automatiquement les machines chaque semaine.',
      'Permettre la restauration d’un service en moins de trente minutes.',
    ],
    specifications: [
      'Proxmox VE 8 installé sur un serveur du lycée, stockage local et stockage réseau.',
      'Quatre conteneurs ou machines virtuelles Debian 12.',
      'Un réseau interne par service et un accès administrateur restreint.',
      'Script de sauvegarde et procédure de restauration documentés.',
    ],
    personal: [
      'Installation et configuration de Proxmox VE, création des ponts réseau virtuels.',
      'Déploiement du serveur web Debian avec Nginx et certificat Let’s Encrypt.',
      'Mise en place du serveur de fichiers Samba avec utilisateurs et permissions.',
      'Écriture des tâches de sauvegarde vzdump et test de restauration complète.',
    ],
    group: [
      'Répartition en binôme : j’ai pris Proxmox, le web et les sauvegardes, mon camarade le DNS et le pare-feu.',
      'Nous avons conçu ensemble le plan d’adressage et la segmentation.',
      'Soutenance préparée et présentée à deux devant le jury.',
    ],
    tools: ['Proxmox VE', 'Debian 12', 'Nginx', 'Samba', 'UFW', 'vzdump', 'SSH'],
    steps: [
      'Installation de Proxmox VE et mise à jour du système.',
      'Création des ponts réseau et du plan d’adressage interne.',
      'Déploiement des quatre services et configuration de chacun.',
      'Mise en place des règles de pare-feu et des accès SSH par clé.',
      'Planification des sauvegardes et test de restauration d’un conteneur.',
    ],
    result:
      'Les quatre services tournent sur un seul serveur et restent joignables depuis le réseau du lycée. Une restauration de test a pris moins de vingt minutes, sauvegarde comprise. Le projet a été présenté en soutenance et retenu comme exemple pour les promotions suivantes.',
    difficulties: [
      {
        problem: 'Les conteneurs ne communiquaient pas entre eux malgré un plan d’adressage correct.',
        solution: 'Les ponts réseau n’étaient pas rattachés au bon VLAN : correction de la configuration Proxmox et test avec ping et traceroute.',
      },
      {
        problem: 'La sauvegarde échouait faute d’espace sur le stockage local.',
        solution: 'Ajout d’un stockage dédié et rotation des sauvegardes avec conservation sur quatre semaines.',
      },
    ],
    learned: [
      'La segmentation réseau se vérifie avec des tests, pas seulement sur le schéma.',
      'Une sauvegarde non testée n’est pas une sauvegarde.',
      'Un bon plan d’adressage fait gagner des heures de dépannage.',
    ],
    competences: ['B1.1', 'B1.4', 'SISR-1', 'SISR-2', 'SISR-4'],
    images: [
      { src: image('meridian.jpg'), caption: 'Schéma de l’infrastructure virtualisée (à remplacer par votre schéma).' },
      { src: image('halcyon.jpg'), caption: 'Interface Proxmox avec les conteneurs en fonctionnement (à remplacer par votre capture).' },
    ],
    annexes: [
      { label: 'Dossier de projet et plan d’adressage (PDF)', href: '#', note: 'À déposer dans public/documents' },
      { label: 'Script de sauvegarde', href: '#', note: 'Fichier .sh à joindre' },
    ],
    size: 'large',
  },
  {
    slug: 'segmentation-vlan',
    title: 'Segmentation réseau et VLAN',
    category: 'TP — Réseaux Cisco',
    client: 'Travaux pratiques — Packet Tracer',
    year: '2025',
    cover: image('halcyon.jpg'),
    tint: '#ebe3d6',
    summary:
      'Conception d’un réseau d’entreprise segmenté en quatre VLAN, avec routage inter-VLAN et listes de contrôle d’accès sur Packet Tracer.',
    context:
      'Une entreprise fictive de 60 postes souhaite séparer les services administratif, technique, invités et le serveur, tout en conservant un routeur unique pour sortir vers Internet.',
    need: [
      'Segmenter le réseau en quatre VLAN pour limiter la propagation des incidents.',
      'Autoriser les flux nécessaires et bloquer tout le reste.',
      'Fournir un adressage automatique par service.',
      'Documenter le plan d’adressage et les règles de filtrage.',
    ],
    specifications: [
      'Un switch Cisco 2960 et un routeur 2911 dans Packet Tracer.',
      'VLAN 10 administration, 20 technique, 30 invités, 40 serveurs.',
      'Routage inter-VLAN par sub-interfaces et DHCP sur le routeur.',
      'ACL empêchant le VLAN invités d’accéder aux autres réseaux.',
    ],
    personal: [
      'Configuration des VLAN, des ports en mode access et des liens trunk.',
      'Configuration du routage inter-VLAN en router-on-a-stick.',
      'Mise en place du DHCP et des pools par VLAN.',
      'Écriture des ACL et vérification par tests de connectivité.',
    ],
    group: [
      'Exercice individuel sur Packet Tracer, corrigé en classe.',
      'Comparaison des configurations et des tests avec un camarade avant validation.',
    ],
    tools: ['Cisco Packet Tracer', 'IOS Cisco', 'VLAN / 802.1Q', 'DHCP', 'ACL'],
    steps: [
      'Création du plan d’adressage et des VLAN.',
      'Configuration du switch et des ports trunk.',
      'Configuration du routeur, des sub-interfaces et du DHCP.',
      'Application des ACL et des tests ping / traceroute.',
      'Sauvegarde de la configuration et rédaction de la documentation.',
    ],
    result:
      'Les quatre réseaux communiquent comme prévu et le VLAN invités est isolé. Les tests de ping et l’accès au serveur web confirment les règles. Le TP a été validé et la configuration archivée comme modèle.',
    difficulties: [
      {
        problem: 'Les postes du VLAN technique recevaient une adresse du mauvais pool DHCP.',
        solution: 'Le port du switch était resté en VLAN 1 : correction en access VLAN 20 et renouvellement des baux.',
      },
      {
        problem: 'L’ACL bloquait aussi les serveurs DNS nécessaires aux invités.',
        solution: 'Ajout d’une règle autorisant uniquement le DNS vers le serveur, avant la règle de refus.',
      },
    ],
    learned: [
      'Le sens des ACL se raisonne par interface et par direction, jamais de mémoire.',
      'Toujours vérifier le VLAN d’un port avant de chercher plus loin.',
      'Un plan d’adressage écrit évite les conflits pendant la configuration.',
    ],
    competences: ['B1.1', 'SISR-1', 'SISR-3'],
    images: [
      { src: image('halcyon.jpg'), caption: 'Topologie Packet Tracer (à remplacer par votre capture).' },
      { src: image('fold.jpg'), caption: 'Plan d’adressage et tableau des VLAN (à remplacer).' },
    ],
    annexes: [
      { label: 'Configuration des équipements (texte)', href: '#', note: 'Fichier .txt à joindre' },
      { label: 'Schéma de topologie', href: '#', note: 'Image ou PDF à joindre' },
    ],
    size: 'small',
  },
  {
    slug: 'supervision-zabbix',
    title: 'Supervision d’un parc avec Zabbix',
    category: 'Stage — Supervision',
    client: 'Entreprise du stage',
    year: '2026',
    cover: image('kite.jpg'),
    tint: '#d9e6dc',
    summary:
      'Mise en place d’une supervision des serveurs et du réseau d’une PME, avec alertes par mail et tableau de bord pour l’équipe infrastructure.',
    context:
      'Pendant le stage de première année, l’équipe informatique découvrait les pannes par les utilisateurs. Personne ne savait qu’un serveur était saturé avant qu’il ne tombe.',
    need: [
      'Surveiller la disponibilité des serveurs et des équipements réseau.',
      'Détecter la saturation disque et les services arrêtés.',
      'Prévenir l’équipe par mail avant l’incident.',
      'Fournir un tableau de bord lisible par tous.',
    ],
    specifications: [
      'Serveur Zabbix sur une machine virtuelle Debian.',
      'Supervision de huit serveurs, deux switches et un pare-feu.',
      'Alertes mail pour les seuils critiques et les services arrêtés.',
      'Procédure d’installation et de mise en service documentée.',
    ],
    personal: [
      'Installation du serveur Zabbix et configuration de l’agent sur les machines.',
      'Création des hôtes, des modèles et des déclencheurs (disque, CPU, services).',
      'Configuration des alertes mail et test des notifications.',
      'Création d’un tableau de bord et d’une procédure de reprise.',
    ],
    group: [
      'Travail en autonomie encadré par le responsable infrastructure.',
      'Un technicien m’a fourni la liste des équipements et validé les seuils d’alerte.',
    ],
    tools: ['Zabbix', 'Debian', 'SNMP', 'Postfix', 'Bash'],
    steps: [
      'Installation de Zabbix sur une VM Debian et sécurisation de l’accès.',
      'Déploiement des agents sur les serveurs et activation SNMP sur le réseau.',
      'Création des modèles et des déclencheurs adaptés au parc.',
      'Mise en place des alertes mail et des tests de panne simulée.',
      'Formation rapide de l’équipe et remise de la documentation.',
    ],
    result:
      'Les serveurs et équipements sont supervisés en continu. Trois incidents ont été détectés avant l’impact utilisateur pendant les deux semaines suivant la mise en service. La procédure a été reprise par l’équipe après mon départ.',
    difficulties: [
      {
        problem: 'Les alertes mail n’arrivaient pas : le serveur SMTP refusait les messages.',
        solution: 'Ajout du relais interne dans Postfix et autorisation de l’adresse d’expédition par l’administrateur.',
      },
      {
        problem: 'Trop d’alertes pour des seuils trop bas, l’équipe ne les lisait plus.',
        solution: 'Revue des seuils avec le responsable et passage en alerte uniquement après deux mesures consécutives.',
      },
    ],
    learned: [
      'Une supervision trop bavarde ne sert à rien : il faut hiérarchiser les alertes.',
      'Les seuils se définissent avec l’exploitant, pas seulement techniquement.',
      'Une procédure écrite survit au départ du stagiaire.',
    ],
    competences: ['B1.2', 'B1.5', 'SISR-3', 'SISR-4'],
    images: [
      { src: image('kite.jpg'), caption: 'Tableau de bord Zabbix (à remplacer par votre capture).' },
      { src: image('nocturne.jpg'), caption: 'Alerte reçue par mail lors d’un test (à remplacer).' },
    ],
    annexes: [
      { label: 'Procédure d’installation Zabbix (PDF)', href: '#', note: 'À déposer dans public/documents' },
      { label: 'Documentation de supervision', href: '#', note: 'Version publique, sans données internes' },
    ],
    size: 'small',
  },
  {
    slug: 'poste-securise',
    title: 'Déploiement de postes sécurisés avec WSUS et GPO',
    category: 'Stage — Administration de parc',
    client: 'Entreprise du stage',
    year: '2026',
    cover: image('nocturne.jpg'),
    tint: '#d8d4e4',
    summary:
      'Industrialisation du déploiement des postes Windows d’une PME : mises à jour centralisées, modèles de configuration et durcissement des sessions.',
    context:
      'L’entreprise installait chaque poste à la main, avec des versions de logiciels et des réglages différents. Les mises à jour étaient faites au cas par cas, quand un utilisateur se plaignait.',
    need: [
      'Standardiser l’installation des postes.',
      'Centraliser les mises à jour Windows.',
      'Appliquer des règles de sécurité communes.',
      'Réduire le temps d’installation d’un poste.',
    ],
    specifications: [
      'Serveur WSUS sur Windows Server, 25 postes clients.',
      'GPO communes : mot de passe, sessions, télémétrie, lecteurs réseau.',
      'Procédure d’installation de poste en dix étapes maximum.',
      'Documentation remise à l’équipe support.',
    ],
    personal: [
      'Installation et configuration du serveur WSUS et des stratégies de GPO associées.',
      'Création des GPO de sécurité et de restriction des sessions.',
      'Rédaction de la procédure de préparation d’un poste.',
      'Tests et validation sur trois postes avant généralisation.',
    ],
    group: [
      'Stage individuel, sous la supervision du responsable du service support.',
      'Les GPO ont été relues puis validées par le responsable avant application.',
    ],
    tools: ['Windows Server 2022', 'WSUS', 'GPO', 'PowerShell', 'GLPI'],
    steps: [
      'Installation du rôle WSUS et validation des groupes de postes.',
      'Création des GPO et application progressive par unité d’organisation.',
      'Mise à jour de trois postes de test et contrôle de non-régression.',
      'Rédaction de la procédure puis généralisation aux 25 postes.',
    ],
    result:
      'Le temps de préparation d’un poste passe d’environ trois heures à moins d’une heure. Les mises à jour sont centralisées et les réglages de sécurité sont identiques partout. La procédure est utilisée par le service support.',
    difficulties: [
      {
        problem: 'Un poste ne recevait aucune mise à jour malgré son appartenance au bon groupe.',
        solution: 'L’identifiant SUSClientId était dupliqué après clonage : réinitialisation du client WSUS par script.',
      },
      {
        problem: 'Une GPO bloquait les lecteurs réseau des commerciaux.',
        solution: 'Filtrage de la GPO par groupe de sécurité plutôt que sur toute l’unité d’organisation.',
      },
    ],
    learned: [
      'Un clonage de poste demande toujours une remise à zéro des identifiants de mise à jour.',
      'Le filtrage des GPO par groupe évite de casser les usages métier.',
      'Une procédure courte est une procédure appliquée.',
    ],
    competences: ['B1.1', 'B1.2', 'B1.5', 'SISR-2'],
    images: [
      { src: image('nocturne.jpg'), caption: 'Console WSUS et groupes de postes (à remplacer par votre capture).' },
      { src: image('aurora.jpg'), caption: 'Console de gestion des stratégies de groupe (à remplacer).' },
    ],
    annexes: [
      { label: 'Procédure de préparation de poste (PDF)', href: '#', note: 'Document anonymisé' },
      { label: 'Export des GPO (HTML)', href: '#', note: 'Sans données confidentielles' },
    ],
    size: 'small',
  },
  {
    slug: 'serveur-web-securise',
    title: 'Serveur web sécurisé derrière un reverse proxy',
    category: 'Projet — Systèmes et sécurité',
    client: 'Projet personnel encadré',
    year: '2026',
    cover: image('fold.jpg'),
    tint: '#e8e2d6',
    summary:
      'Hébergement d’une application web sur Debian, derrière Nginx en reverse proxy, avec HTTPS, pare-feu et durcissement du serveur.',
    context:
      'Pour approfondir l’hébergement et la sécurité, j’ai monté un environnement complet sur une machine virtuelle : une application web, un reverse proxy et un durcissement du système.',
    need: [
      'Publier une application web sans exposer directement le serveur d’application.',
      'Chiffrer les échanges avec un certificat valide.',
      'Limiter les accès aux seuls ports nécessaires.',
      'Mettre en place une sauvegarde simple de la configuration.',
    ],
    specifications: [
      'Debian 12, Nginx en reverse proxy et application Node.js en service systemd.',
      'Certificat Let’s Encrypt avec renouvellement automatique.',
      'Pare-feu UFW : seuls 22, 80 et 443 ouverts.',
      'Journalisation et script de sauvegarde de la configuration.',
    ],
    personal: [
      'Installation et durcissement de Debian (SSH par clé, comptes, mises à jour automatiques).',
      'Configuration de Nginx en reverse proxy et obtention du certificat.',
      'Création du service systemd et des journaux applicatifs.',
      'Mise en place du pare-feu, des tests d’exposition et de la sauvegarde.',
    ],
    group: [
      'Projet individuel, présenté en classe.',
      'Revue de configuration avec le formateur avant mise en ligne de test.',
    ],
    tools: ['Debian', 'Nginx', 'Node.js', 'systemd', 'Certbot', 'UFW', 'SSH'],
    steps: [
      'Installation de Debian et durcissement des accès.',
      'Déploiement de l’application et création du service systemd.',
      'Configuration du reverse proxy et du certificat TLS.',
      'Activation du pare-feu et vérification des ports ouverts.',
      'Tests de renouvellement du certificat et de restauration de la configuration.',
    ],
    result:
      'L’application est accessible en HTTPS, le serveur d’application n’est pas exposé et le renouvellement du certificat fonctionne. Les tests de scan montrent uniquement les ports prévus ouverts.',
    difficulties: [
      {
        problem: 'Le renouvellement du certificat échouait car le port 80 était fermé.',
        solution: 'Autorisation temporaire du port 80 pour la validation ACME et renouvellement automatisé par Certbot.',
      },
      {
        problem: 'L’application ne redémarrait pas après une mise à jour.',
        solution: 'Ajout d’une étape de vérification et d’un redémarrage automatique dans le service systemd.',
      },
    ],
    learned: [
      'Exposer le strict nécessaire réduit déjà une grande partie de la surface d’attaque.',
      'Les certificats et les sauvegardes doivent être testés, pas seulement configurés.',
      'Un service systemd bien écrit vaut mieux qu’un script lancé à la main.',
    ],
    competences: ['B1.3', 'B1.5', 'SISR-2', 'SISR-4'],
    images: [
      { src: image('fold.jpg'), caption: 'Schéma de l’architecture proxy / application (à remplacer).' },
      { src: image('meridian.jpg'), caption: 'Résultat du scan de ports (à remplacer par votre capture).' },
    ],
    annexes: [
      { label: 'Configuration Nginx commentée', href: '#', note: 'Fichier .conf à joindre' },
      { label: 'Dossier technique du projet (PDF)', href: '#', note: 'À déposer dans public/documents' },
    ],
    size: 'small',
  },
]

export const bySlug = (slug: string) => realisations.find((r) => r.slug === slug)

export const stages = [
  {
    company: 'Nom de l’entreprise',
    sector: 'PME — 45 salariés, secteur industriel',
    place: 'Paris',
    period: 'Janvier — février 2026 (6 semaines)',
    service: 'Service informatique, 2 personnes',
    context:
      'L’entreprise dispose d’un serveur Windows, d’un pare-feu et de 25 postes. Le service informatique gère le support, les sauvegardes et les évolutions du parc.',
    missions: [
      'Support utilisateurs de niveau 1 et 2 : incidents matériels et logiciels.',
      'Installation et configuration du serveur WSUS et des GPO de sécurité.',
      'Mise en place de la supervision Zabbix et des alertes mail.',
      'Documentation des procédures et mise à jour du parc dans GLPI.',
    ],
    tools: ['Windows Server', 'WSUS', 'GPO', 'Zabbix', 'GLPI', 'PowerShell'],
    proof: { label: 'Attestation de stage', href: '#', note: 'À déposer dans public/documents' },
    linked: ['supervision-zabbix', 'poste-securise'],
  },
  {
    company: 'Nom de l’entreprise',
    sector: 'Association — 12 salariés',
    place: 'Montreuil',
    period: 'Mai — juin 2026 (5 semaines)',
    service: 'Service support et infrastructure',
    context:
      'Structure associative équipée d’un réseau local et de services hébergés. Le stage portait sur la fiabilisation des sauvegardes et l’amélioration du support.',
    missions: [
      'Audit des sauvegardes existantes et test de restauration.',
      'Réorganisation des comptes et des droits sur le serveur de fichiers.',
      'Rédaction d’un guide utilisateur pour les sauvegardes.',
      'Participation aux interventions sur site et au suivi des tickets.',
    ],
    tools: ['Debian', 'Samba', 'rsync', 'Proxmox Backup Server', 'GLPI'],
    proof: { label: 'Attestation de stage', href: '#', note: 'À déposer dans public/documents' },
    linked: ['proxmox-debian'],
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
  subject: 'La sécurité des accès distants et le Zero Trust',
  why:
    'Avec le télétravail, les entreprises exposent de plus en plus leurs services à Internet. J’ai choisi ce sujet pour comprendre comment sécuriser ces accès autrement qu’avec un simple VPN, et pour suivre les recommandations de l’ANSSI.',
  method: [
    { tool: 'Feedly', usage: 'Abonnement aux flux RSS de l’ANSSI, de la CNIL et de éditeurs sécurité', frequency: 'Consultation 2 fois par semaine' },
    { tool: 'Newsletter ANSSI', usage: 'Alertes et guides de recommandations', frequency: 'À chaque publication' },
    { tool: 'YouTube / webinaires', usage: 'Conférences techniques et démonstrations', frequency: '1 fois par mois' },
    { tool: 'Notion', usage: 'Fiches de synthèse et sources classées par thème', frequency: 'Mise à jour après chaque lecture' },
  ],
  sources: [
    { name: 'ANSSI — recommandations et guides', href: 'https://www.ssi.gouv.fr' },
    { name: 'CERT-FR — alertes et avis', href: 'https://www.cert.ssi.gouv.fr' },
    { name: 'CNIL — sécurité des données', href: 'https://www.cnil.fr' },
    { name: 'Microsoft Learn — Zero Trust', href: 'https://learn.microsoft.com' },
  ],
  learnings: [
    {
      title: 'Le VPN ne suffit plus seul',
      what:
        'Un accès VPN place l’utilisateur sur le réseau interne : s’il est compromis, il peut atteindre beaucoup de services. Les modèles Zero Trust vérifient chaque accès, pas seulement la connexion.',
      action: 'J’ai repris mon projet de serveur web pour n’exposer que le reverse proxy et vérifier chaque service séparément.',
    },
    {
      title: 'Le moindre privilège se configure',
      what:
        'Les recommandations de l’ANSSI insistent sur les comptes à privilèges limités et la séparation des rôles d’administration.',
      action: 'Dans le TP Active Directory, j’ai créé un compte d’administration distinct du compte quotidien et documenté la procédure.',
    },
    {
      title: 'La journalisation fait partie de la sécurité',
      what:
        'Sans journaux conservés et exploitables, un incident ne peut pas être compris. Les recommandations décrivent une durée et une centralisation des logs.',
      action: 'J’ai ajouté la journalisation et la rotation des journaux dans mon projet de serveur web.',
    },
  ],
  articles: [
    {
      title: 'Recommandations pour l’administration à distance',
      source: 'ANSSI',
      date: '2025',
      summary: 'Bonnes pratiques de durcissement des accès d’administration et journalisation des connexions.',
    },
    {
      title: 'Zero Trust : principes et mise en œuvre',
      source: 'Microsoft Learn',
      date: '2026',
      summary: 'Vérification continue, moindre privilège et segmentation des accès aux ressources.',
    },
  ],
}

export const annexes = [
  { label: 'CV (PDF)', href: '/documents/cv.pdf', note: 'À déposer dans public/documents' },
  { label: 'Tableau de synthèse des compétences (PDF)', href: '#', note: 'Version imprimable du tableau' },
  { label: 'Attestation de stage — première année', href: '#', note: 'Document à déposer' },
  { label: 'Attestation de stage — deuxième année', href: '#', note: 'Document à déposer' },
  { label: 'Documentation technique — Active Directory', href: '#', note: 'PDF à déposer' },
  { label: 'Scripts PowerShell et Bash', href: '#', note: 'Archive .zip à déposer' },
]

export const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/formation', label: 'Formation' },
  { to: '/entreprise', label: 'Entreprise' },
  { to: '/competences', label: 'Compétences' },
  { to: '/veille', label: 'Veille' },
]
