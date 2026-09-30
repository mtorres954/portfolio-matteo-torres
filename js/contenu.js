// =====================================================
//  CONTENU DU PORTFOLIO — MODIFIE PRINCIPALEMENT CE FICHIER
// =====================================================

const portfolio = {
  email: "A_COMPLETER@example.com",

  intro: "Passionné par les systèmes, les réseaux et la cybersécurité, je souhaite développer mes compétences dans l’administration des infrastructures informatiques.",

  resume: [
    { titre: "Ma formation", texte: "BTS SIO – Option SISR • Lycée Robert Schuman – Dugny • 2025–2027" },
    { titre: "Mon expérience", texte: "Mairie de Saint-Brice-sous-Forêt • Alternance – DSI • 2026–2027" },
    { titre: "Mon projet professionnel", texte: "Administration des systèmes et réseaux avec une orientation cybersécurité" }
  ],

  parcours: [
    { date: "2022 – 2025", titre: "Bac Professionnel Systèmes Numériques", lieu: "Lycée Robert Schuman – Dugny" },
    { date: "2025 – 2027", titre: "BTS SIO – Option SISR", lieu: "Lycée Robert Schuman – Dugny" },
    { date: "Après le BTS", titre: "Licence Pro Métiers de l’informatique", lieu: "Administration et sécurité des systèmes et des réseaux — établissement à déterminer" },
    { date: "Objectif", titre: "Administrateur systèmes et réseaux", lieu: "Avec une orientation vers la cybersécurité" }
  ],

 experiences: [
  { titre: "Alternance – en cours", entreprise: "Mairie de Saint-Brice-sous-Forêt", texte: "Support utilisateur, création de comptes Active Directory, masterisation et remplacement de postes, gestion du parc avec GLPI, Intune et Autopilot.", annee: "2026 – 2027" },
  { titre: "Stage Terminale", entreprise: "IT Department of JJA", texte: "Configuration de PC, Active Directory, JIRA, ManageEngine, Windows Server 2022 et déploiement d’applications.", annee: "Novembre – Décembre 2024" },
  { titre: "Stage 1ère", entreprise: "IT Department of JJA", texte: "Aide à l’utilisateur, configuration d’imprimantes et préparation de postes utilisateurs.", annee: "Février – Avril 2024" },
  { titre: "Stage Seconde", entreprise: "À compléter", texte: "À compléter avec les missions réalisées durant ce stage.", annee: "À compléter" }
],

  projets: [
    {
      titre: "LPRS – Infrastructure réseau",
      statut: "Projet BTS • En cours",
      description: "Conception et mise en œuvre progressive d’une infrastructure réseau : simulation sous Packet Tracer, VLAN, adressage IP, DHCP, ACL, VTP et déploiement sur un switch Cisco réel. Création du diagramme de Gantt en parallèle.",
      technologies: ["Cisco", "Packet Tracer", "VLAN", "VTP", "DHCP", "ACL"],
      image: "images/Projet_LPRS.png"
    },
    {
      titre: "Diag Auto IA",
      statut: "Réalisation personnelle • En cours",
      description: "Diag Auto IA est un projet visant à intégrer une intelligence artificielle à une valise de diagnostic Launch-x431 automobile Launch X-431. L’objectif est d’analyser les données du véhicule (codes défauts, calculateurs, valeurs en temps réel, etc.) afin d’identifier les anomalies détectées. L’IA génère ensuite un compte rendu complet présentant l’état du véhicule, les défauts relevés, leurs causes possibles, les principaux axes de recherche pour localiser l’origine de la panne ainsi que des contrôles et solutions possibles pour la résoudre.",
      technologies: ["API GPT/OPEN AI","Android","Python","HTML","CSS", "HTTPS/TLS",],
      image: "images/Diag_Auto.png"
    },
    {
      titre: "A definir",
      statut: "A definir",
      description: "A definir.",
      technologies: ["A definir"],
      icone: "◫"
    },
    {
      titre: "A definir",
      statut: "A definir",
      description: "A definir",
      technologies: ["A definir"],
      icone: "◎"
    }
  ],

 competences: [
  { titre: "Support", items: ["Gestion d’incidents", "Assistance utilisateur", "Diagnostic et résolution de problèmes", "Préparation de postes utilisateurs", "Déploiement d’applications"] },
  { titre: "Systèmes", items: ["Windows Server 2022", "Linux Debian", "Active Directory", "Gestion des utilisateurs", "Gestion des droits et habilitations"] },
  { titre: "Gestion de parc", items: ["GLPI", "Inventaire matériel", "Gestion des demandes d’assistance", "Déploiement de postes", "Gestion du matériel"] },
  { titre: "Réseaux", items: ["Configuration Cisco", "VLAN / Switching", "DHCP", "LAN / WAN / DMZ", "Pare-feu et contrôle d’accès"] },
  { titre: "Cloud Microsoft & Virtualisation", items: ["Microsoft Intune", "Entra ID", "Autopilot", "Hyper-V", "Proxmox / VirtualBox", "Docker"] },
  { titre: "Cybersécurité", items: ["RGPD & CNIL", "Gestion des habilitations", "Règles de filtrage firewall", "Certificats et clés privées", "Clés SSH", "Sauvegarde et journalisation"] }
],

  // Pour ajouter un article de veille : copie un bloc entre { } et modifie-le.
  veille: [
    {
      date: "Septembre 2026",
      titre: "Veille en cours",
      resume: "Suivi des actualités concernant la sécurité des véhicules connectés, les réseaux automobiles et les nouvelles méthodes d’attaque et de protection."
    }
  ]
};
