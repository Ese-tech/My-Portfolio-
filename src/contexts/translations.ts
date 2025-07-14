export type Language = 'en' | 'de' | 'fr' | 'es' | 'zh' | 'ja';

export const translations: Record<Language, any> = {
  en: {
    // Navigation
    navigation: {
      home: 'Home',
      about: 'About Me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      settings: 'Settings'
    },
    
    // Home Page
    home: {
      welcome: 'Hi, I\'m',
      subtitle: 'Full Stack Developer & Creative Problem Solver',
      description: 'Passionate about creating exceptional digital experiences with modern technologies like React, TypeScript, and Node.js.',
      buttons: {
        viewProjects: 'View My Projects',
        aboutMe: 'About Me',
        downloadCV: 'Download CV'
      },
      stats: {
        projects: 'Projects',
        technologies: 'Technologies', 
        experience: 'Years Learning',
        passion: 'Passion'
      },
      cta: {
        title: 'Let\'s Work Together!',
        description: 'I\'m always interested in new opportunities and exciting projects.',
        button: 'Get In Touch'
      },
      scrollIndicator: 'Explore my work below'
    },

    // About Me Page
    about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      introduction: 'Hello! I\'m Ese Osagie, a passionate Full Stack Developer based in Germany.',
      description: 'I specialize in creating modern, responsive web applications using cutting-edge technologies. My journey in web development started with a curiosity about how websites work, and it has evolved into a passion for building exceptional digital experiences.',
      journey: {
        title: 'My Journey',
        content: 'Currently studying at DCI Digital Career Institute, I\'m constantly learning and improving my skills in web development. I believe in writing clean, maintainable code and creating user-friendly interfaces.'
      },
      passions: {
        title: 'What I Love',
        development: 'Full Stack Development',
        learning: 'Continuous Learning',
        problemSolving: 'Problem Solving',
        teamwork: 'Team Collaboration'
      },
      approach: {
        title: 'My Approach',
        content: 'I believe in combining technical excellence with creative problem-solving. Every project is an opportunity to learn something new and push the boundaries of what\'s possible.'
      },
      cta: {
        title: 'Let\'s Connect',
        description: 'I\'m always open to discussing new opportunities and interesting projects.',
        button: 'Get In Touch'
      }
    },

    // Skills Page
    skills: {
      title: 'My Skills',
      subtitle: 'Technologies and tools I work with',
      categories: {
        technical: 'Technical Skills',
        soft: 'Soft Skills',
        tools: 'Tools & Technologies'
      },
      softSkills: {
        problemSolving: 'Problem Solving',
        teamwork: 'Teamwork',
        communication: 'Communication',
        creativity: 'Creativity',
        adaptability: 'Adaptability',
        leadership: 'Leadership'
      }
    },

    // Projects Page
    projects: {
      title: 'My Projects',
      subtitle: 'A showcase of my recent work',
      search: 'Search projects...',
      filter: 'Filter by language',
      all: 'All',
      loading: 'Loading projects...',
      error: 'Error loading projects',
      noResults: 'No projects found',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      technologies: 'Technologies',
      createdAt: 'Created',
      updatedAt: 'Last Updated'
    },

    // Contact Page
    contact: {
      title: 'Get In Touch',
      subtitle: 'Let\'s discuss your next project',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Error sending message. Please try again.'
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        location: 'Location',
        availability: 'Available for freelance work'
      },
      social: {
        title: 'Follow Me',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },

    // Settings Page
    settings: {
      title: 'Settings',
      subtitle: 'Customize your experience',
      appearance: {
        title: 'Appearance',
        theme: 'Theme',
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      },
      language: {
        title: 'Language',
        select: 'Select Language',
        current: 'Current Language'
      },
      accessibility: {
        title: 'Accessibility',
        reducedMotion: 'Reduce Motion',
        highContrast: 'High Contrast'
      },
      about: {
        title: 'About This Site',
        version: 'Version',
        built: 'Built with React, TypeScript, and Tailwind CSS',
        updated: 'Last Updated'
      }
    },

    // Common
    common: {
      loading: 'Loading...',
      error: 'Something went wrong',
      retry: 'Try Again',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      menu: 'Menu'
    }
  },

  de: {
    // Navigation
    navigation: {
      home: 'Startseite',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
      settings: 'Einstellungen'
    },
    
    // Home Page
    home: {
      welcome: 'Hallo, ich bin',
      subtitle: 'Full Stack Entwickler & Kreativer Problemlöser',
      description: 'Leidenschaftlich für die Erstellung außergewöhnlicher digitaler Erlebnisse mit modernen Technologien wie React, TypeScript und Node.js.',
      buttons: {
        viewProjects: 'Meine Projekte ansehen',
        aboutMe: 'Über mich',
        downloadCV: 'Lebenslauf herunterladen'
      },
      stats: {
        projects: 'Projekte',
        technologies: 'Technologien',
        experience: 'Jahre Lernen',
        passion: 'Leidenschaft'
      },
      cta: {
        title: 'Lass uns zusammenarbeiten!',
        description: 'Ich bin immer interessiert an neuen Möglichkeiten und spannenden Projekten.',
        button: 'Kontakt aufnehmen'
      },
      scrollIndicator: 'Entdecke meine Arbeit unten'
    },

    // About Me Page
    about: {
      title: 'Über mich',
      subtitle: 'Lerne mich besser kennen',
      introduction: 'Hallo! Ich bin Ese Osagie, ein leidenschaftlicher Full Stack Entwickler aus Deutschland.',
      description: 'Ich spezialisiere mich auf die Erstellung moderner, responsiver Webanwendungen mit modernsten Technologien. Meine Reise in der Webentwicklung begann mit der Neugier darauf, wie Websites funktionieren, und hat sich zu einer Leidenschaft für außergewöhnliche digitale Erlebnisse entwickelt.',
      journey: {
        title: 'Meine Reise',
        content: 'Derzeit studiere ich am DCI Digital Career Institute und lerne ständig dazu und verbessere meine Fähigkeiten in der Webentwicklung. Ich glaube an sauberen, wartbaren Code und benutzerfreundliche Oberflächen.'
      },
      passions: {
        title: 'Was ich liebe',
        development: 'Full Stack Entwicklung',
        learning: 'Kontinuierliches Lernen',
        problemSolving: 'Problemlösung',
        teamwork: 'Teamarbeit'
      },
      approach: {
        title: 'Mein Ansatz',
        content: 'Ich glaube an die Kombination von technischer Exzellenz mit kreativer Problemlösung. Jedes Projekt ist eine Gelegenheit, etwas Neues zu lernen und die Grenzen des Möglichen zu erweitern.'
      },
      cta: {
        title: 'Lass uns verbinden',
        description: 'Ich bin immer offen für Diskussionen über neue Möglichkeiten und interessante Projekte.',
        button: 'Kontakt aufnehmen'
      }
    },

    // Skills Page
    skills: {
      title: 'Meine Fähigkeiten',
      subtitle: 'Technologien und Tools, mit denen ich arbeite',
      categories: {
        technical: 'Technische Fähigkeiten',
        soft: 'Soft Skills',
        tools: 'Tools & Technologien'
      },
      softSkills: {
        problemSolving: 'Problemlösung',
        teamwork: 'Teamarbeit',
        communication: 'Kommunikation',
        creativity: 'Kreativität',
        adaptability: 'Anpassungsfähigkeit',
        leadership: 'Führung'
      }
    },

    // Projects Page
    projects: {
      title: 'Meine Projekte',
      subtitle: 'Eine Auswahl meiner neuesten Arbeiten',
      search: 'Projekte suchen...',
      filter: 'Nach Sprache filtern',
      all: 'Alle',
      loading: 'Projekte werden geladen...',
      error: 'Fehler beim Laden der Projekte',
      noResults: 'Keine Projekte gefunden',
      viewCode: 'Code ansehen',
      liveDemo: 'Live Demo',
      technologies: 'Technologien',
      createdAt: 'Erstellt',
      updatedAt: 'Zuletzt aktualisiert'
    },

    // Contact Page
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Lass uns über dein nächstes Projekt sprechen',
      form: {
        name: 'Dein Name',
        email: 'Deine E-Mail',
        subject: 'Betreff',
        message: 'Deine Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Nachricht erfolgreich gesendet!',
        error: 'Fehler beim Senden der Nachricht. Bitte versuche es erneut.'
      },
      info: {
        title: 'Kontaktinformationen',
        email: 'E-Mail',
        location: 'Standort',
        availability: 'Verfügbar für Freelance-Arbeit'
      },
      social: {
        title: 'Folge mir',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },

    // Settings Page
    settings: {
      title: 'Einstellungen',
      subtitle: 'Personalisiere deine Erfahrung',
      appearance: {
        title: 'Erscheinungsbild',
        theme: 'Design',
        light: 'Hell',
        dark: 'Dunkel',
        system: 'System'
      },
      language: {
        title: 'Sprache',
        select: 'Sprache auswählen',
        current: 'Aktuelle Sprache'
      },
      accessibility: {
        title: 'Barrierefreiheit',
        reducedMotion: 'Bewegung reduzieren',
        highContrast: 'Hoher Kontrast'
      },
      about: {
        title: 'Über diese Seite',
        version: 'Version',
        built: 'Erstellt mit React, TypeScript und Tailwind CSS',
        updated: 'Zuletzt aktualisiert'
      }
    },

    // Common
    common: {
      loading: 'Lädt...',
      error: 'Etwas ist schief gelaufen',
      retry: 'Erneut versuchen',
      close: 'Schließen',
      save: 'Speichern',
      cancel: 'Abbrechen',
      back: 'Zurück',
      next: 'Weiter',
      previous: 'Vorherige',
      menu: 'Menü'
    }
  },

  fr: {
    // Navigation
    navigation: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      settings: 'Paramètres'
    },
    
    // Home Page
    home: {
      welcome: 'Salut, je suis',
      subtitle: 'Développeur Full Stack & Résolveur de Problèmes Créatif',
      description: 'Passionné par la création d\'expériences numériques exceptionnelles avec des technologies modernes comme React, TypeScript et Node.js.',
      buttons: {
        viewProjects: 'Voir mes projets',
        aboutMe: 'À propos de moi',
        downloadCV: 'Télécharger CV'
      },
      stats: {
        projects: 'Projets',
        technologies: 'Technologies',
        experience: 'Années d\'apprentissage',
        passion: 'Passion'
      },
      cta: {
        title: 'Travaillons ensemble !',
        description: 'Je suis toujours intéressé par de nouvelles opportunités et des projets passionnants.',
        button: 'Prendre contact'
      },
      scrollIndicator: 'Explorez mon travail ci-dessous'
    },

    // About Me Page  
    about: {
      title: 'À propos de moi',
      subtitle: 'Apprenez à mieux me connaître',
      introduction: 'Bonjour ! Je suis Ese Osagie, un développeur Full Stack passionné basé en Allemagne.',
      description: 'Je me spécialise dans la création d\'applications web modernes et responsives en utilisant des technologies de pointe. Mon parcours dans le développement web a commencé par une curiosité sur le fonctionnement des sites web, et cela a évolué en une passion pour créer des expériences numériques exceptionnelles.',
      journey: {
        title: 'Mon parcours',
        content: 'Actuellement étudiant au DCI Digital Career Institute, j\'apprends constamment et améliore mes compétences en développement web. Je crois en l\'écriture de code propre et maintenable et en la création d\'interfaces conviviales.'
      },
      passions: {
        title: 'Ce que j\'aime',
        development: 'Développement Full Stack',
        learning: 'Apprentissage continu',
        problemSolving: 'Résolution de problèmes',
        teamwork: 'Collaboration d\'équipe'
      },
      approach: {
        title: 'Mon approche',
        content: 'Je crois en la combinaison de l\'excellence technique avec la résolution créative de problèmes. Chaque projet est une opportunité d\'apprendre quelque chose de nouveau et de repousser les limites du possible.'
      },
      cta: {
        title: 'Connectons-nous',
        description: 'Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants.',
        button: 'Prendre contact'
      }
    },

    // Skills Page
    skills: {
      title: 'Mes compétences',
      subtitle: 'Technologies et outils avec lesquels je travaille',
      categories: {
        technical: 'Compétences techniques',
        soft: 'Compétences interpersonnelles',
        tools: 'Outils et technologies'
      },
      softSkills: {
        problemSolving: 'Résolution de problèmes',
        teamwork: 'Travail d\'équipe',
        communication: 'Communication',
        creativity: 'Créativité',
        adaptability: 'Adaptabilité',
        leadership: 'Leadership'
      }
    },

    // Projects Page
    projects: {
      title: 'Mes projets',
      subtitle: 'Une vitrine de mon travail récent',
      search: 'Rechercher des projets...',
      filter: 'Filtrer par langage',
      all: 'Tous',
      loading: 'Chargement des projets...',
      error: 'Erreur lors du chargement des projets',
      noResults: 'Aucun projet trouvé',
      viewCode: 'Voir le code',
      liveDemo: 'Démo en direct',
      technologies: 'Technologies',
      createdAt: 'Créé',
      updatedAt: 'Dernière mise à jour'
    },

    // Contact Page
    contact: {
      title: 'Prendre contact',
      subtitle: 'Discutons de votre prochain projet',
      form: {
        name: 'Votre nom',
        email: 'Votre email',
        subject: 'Sujet',
        message: 'Votre message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Message envoyé avec succès !',
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
      },
      info: {
        title: 'Informations de contact',
        email: 'Email',
        location: 'Localisation',
        availability: 'Disponible pour du travail freelance'
      },
      social: {
        title: 'Suivez-moi',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },

    // Settings Page
    settings: {
      title: 'Paramètres',
      subtitle: 'Personnalisez votre expérience',
      appearance: {
        title: 'Apparence',
        theme: 'Thème',
        light: 'Clair',
        dark: 'Sombre',
        system: 'Système'
      },
      language: {
        title: 'Langue',
        select: 'Sélectionner la langue',
        current: 'Langue actuelle'
      },
      accessibility: {
        title: 'Accessibilité',
        reducedMotion: 'Réduire le mouvement',
        highContrast: 'Contraste élevé'
      },
      about: {
        title: 'À propos de ce site',
        version: 'Version',
        built: 'Construit avec React, TypeScript et Tailwind CSS',
        updated: 'Dernière mise à jour'
      }
    },

    // Common
    common: {
      loading: 'Chargement...',
      error: 'Quelque chose s\'est mal passé',
      retry: 'Réessayer',
      close: 'Fermer',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      back: 'Retour',
      next: 'Suivant',
      previous: 'Précédent',
      menu: 'Menu'
    }
  },

  es: {
    // Navigation
    navigation: {
      home: 'Inicio',
      about: 'Acerca de',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      settings: 'Configuración'
    },
    
    // Home Page
    home: {
      welcome: 'Hola, soy',
      subtitle: 'Desarrollador Full Stack y Solucionador Creativo de Problemas',
      description: 'Apasionado por crear experiencias digitales excepcionales con tecnologías modernas como React, TypeScript y Node.js.',
      buttons: {
        viewProjects: 'Ver mis proyectos',
        aboutMe: 'Acerca de mí',
        downloadCV: 'Descargar CV'
      },
      stats: {
        projects: 'Proyectos',
        technologies: 'Tecnologías',
        experience: 'Años aprendiendo',
        passion: 'Pasión'
      },
      cta: {
        title: '¡Trabajemos juntos!',
        description: 'Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes.',
        button: 'Ponerse en contacto'
      },
      scrollIndicator: 'Explora mi trabajo a continuación'
    },

    // About Me Page
    about: {
      title: 'Acerca de mí',
      subtitle: 'Conóceme mejor',
      introduction: '¡Hola! Soy Ese Osagie, un desarrollador Full Stack apasionado con base en Alemania.',
      description: 'Me especializo en crear aplicaciones web modernas y responsivas utilizando tecnologías de vanguardia. Mi viaje en el desarrollo web comenzó con curiosidad sobre cómo funcionan los sitios web, y ha evolucionado hacia una pasión por crear experiencias digitales excepcionales.',
      journey: {
        title: 'Mi viaje',
        content: 'Actualmente estudiando en DCI Digital Career Institute, estoy constantemente aprendiendo y mejorando mis habilidades en desarrollo web. Creo en escribir código limpio y mantenible y crear interfaces amigables para el usuario.'
      },
      passions: {
        title: 'Lo que amo',
        development: 'Desarrollo Full Stack',
        learning: 'Aprendizaje continuo',
        problemSolving: 'Resolución de problemas',
        teamwork: 'Colaboración en equipo'
      },
      approach: {
        title: 'Mi enfoque',
        content: 'Creo en combinar la excelencia técnica con la resolución creativa de problemas. Cada proyecto es una oportunidad para aprender algo nuevo y empujar los límites de lo posible.'
      },
      cta: {
        title: 'Conectemos',
        description: 'Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes.',
        button: 'Ponerse en contacto'
      }
    },

    // Skills Page
    skills: {
      title: 'Mis habilidades',
      subtitle: 'Tecnologías y herramientas con las que trabajo',
      categories: {
        technical: 'Habilidades técnicas',
        soft: 'Habilidades blandas',
        tools: 'Herramientas y tecnologías'
      },
      softSkills: {
        problemSolving: 'Resolución de problemas',
        teamwork: 'Trabajo en equipo',
        communication: 'Comunicación',
        creativity: 'Creatividad',
        adaptability: 'Adaptabilidad',
        leadership: 'Liderazgo'
      }
    },

    // Projects Page
    projects: {
      title: 'Mis proyectos',
      subtitle: 'Una muestra de mi trabajo reciente',
      search: 'Buscar proyectos...',
      filter: 'Filtrar por idioma',
      all: 'Todos',
      loading: 'Cargando proyectos...',
      error: 'Error cargando proyectos',
      noResults: 'No se encontraron proyectos',
      viewCode: 'Ver código',
      liveDemo: 'Demo en vivo',
      technologies: 'Tecnologías',
      createdAt: 'Creado',
      updatedAt: 'Última actualización'
    },

    // Contact Page
    contact: {
      title: 'Ponerse en contacto',
      subtitle: 'Hablemos de tu próximo proyecto',
      form: {
        name: 'Tu nombre',
        email: 'Tu email',
        subject: 'Asunto',
        message: 'Tu mensaje',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente!',
        error: 'Error enviando mensaje. Por favor intenta de nuevo.'
      },
      info: {
        title: 'Información de contacto',
        email: 'Email',
        location: 'Ubicación',
        availability: 'Disponible para trabajo freelance'
      },
      social: {
        title: 'Sígueme',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },

    // Settings Page
    settings: {
      title: 'Configuración',
      subtitle: 'Personaliza tu experiencia',
      appearance: {
        title: 'Apariencia',
        theme: 'Tema',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      },
      language: {
        title: 'Idioma',
        select: 'Seleccionar idioma',
        current: 'Idioma actual'
      },
      accessibility: {
        title: 'Accesibilidad',
        reducedMotion: 'Reducir movimiento',
        highContrast: 'Alto contraste'
      },
      about: {
        title: 'Acerca de este sitio',
        version: 'Versión',
        built: 'Construido con React, TypeScript y Tailwind CSS',
        updated: 'Última actualización'
      }
    },

    // Common
    common: {
      loading: 'Cargando...',
      error: 'Algo salió mal',
      retry: 'Intentar de nuevo',
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      back: 'Atrás',
      next: 'Siguiente',
      previous: 'Anterior',
      menu: 'Menú'
    }
  },

  zh: {
    // Navigation
    navigation: {
      home: '首页',
      about: '关于我',
      skills: '技能',
      projects: '项目',
      contact: '联系',
      settings: '设置'
    },
    
    // Home Page
    home: {
      welcome: '你好，我是',
      subtitle: '全栈开发者与创意问题解决者',
      description: '热衷于使用React、TypeScript和Node.js等现代技术创造卓越的数字体验。',
      buttons: {
        viewProjects: '查看我的项目',
        aboutMe: '关于我',
        downloadCV: '下载简历'
      },
      stats: {
        projects: '项目',
        technologies: '技术',
        experience: '学习年限',
        passion: '激情'
      },
      cta: {
        title: '让我们一起工作！',
        description: '我总是对新机会和令人兴奋的项目感兴趣。',
        button: '联系我'
      },
      scrollIndicator: '在下方探索我的作品'
    },

    // About Me Page
    about: {
      title: '关于我',
      subtitle: '更好地了解我',
      introduction: '你好！我是Ese Osagie，一名来自德国的热情全栈开发者。',
      description: '我专注于使用前沿技术创建现代、响应式的Web应用程序。我的Web开发之旅始于对网站工作原理的好奇，并发展为对创造卓越数字体验的热情。',
      journey: {
        title: '我的旅程',
        content: '目前在DCI数字职业学院学习，我不断学习并提升我的Web开发技能。我相信编写清洁、可维护的代码和创建用户友好的界面。'
      },
      passions: {
        title: '我的热爱',
        development: '全栈开发',
        learning: '持续学习',
        problemSolving: '问题解决',
        teamwork: '团队协作'
      },
      approach: {
        title: '我的方法',
        content: '我相信将技术卓越与创意问题解决相结合。每个项目都是学习新知识和突破可能性边界的机会。'
      },
      cta: {
        title: '让我们连接',
        description: '我总是乐于讨论新机会和有趣的项目。',
        button: '联系我'
      }
    },

    // Skills Page
    skills: {
      title: '我的技能',
      subtitle: '我使用的技术和工具',
      categories: {
        technical: '技术技能',
        soft: '软技能',
        tools: '工具和技术'
      },
      softSkills: {
        problemSolving: '问题解决',
        teamwork: '团队合作',
        communication: '沟通',
        creativity: '创造力',
        adaptability: '适应性',
        leadership: '领导力'
      }
    },

    // Projects Page
    projects: {
      title: '我的项目',
      subtitle: '我最近工作的展示',
      search: '搜索项目...',
      filter: '按语言筛选',
      all: '全部',
      loading: '加载项目中...',
      error: '加载项目时出错',
      noResults: '未找到项目',
      viewCode: '查看代码',
      liveDemo: '在线演示',
      technologies: '技术',
      createdAt: '创建于',
      updatedAt: '最后更新'
    },

    // Contact Page
    contact: {
      title: '联系我',
      subtitle: '让我们讨论您的下一个项目',
      form: {
        name: '您的姓名',
        email: '您的邮箱',
        subject: '主题',
        message: '您的消息',
        send: '发送消息',
        sending: '发送中...',
        success: '消息发送成功！',
        error: '发送消息时出错。请重试。'
      },
      info: {
        title: '联系信息',
        email: '邮箱',
        location: '位置',
        availability: '可接受自由职业工作'
      },
      social: {
        title: '关注我',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },

    // Settings Page
    settings: {
      title: '设置',
      subtitle: '自定义您的体验',
      appearance: {
        title: '外观',
        theme: '主题',
        light: '浅色',
        dark: '深色',
        system: '系统'
      },
      language: {
        title: '语言',
        select: '选择语言',
        current: '当前语言'
      },
      accessibility: {
        title: '无障碍',
        reducedMotion: '减少动画',
        highContrast: '高对比度'
      },
      about: {
        title: '关于此网站',
        version: '版本',
        built: '使用React、TypeScript和Tailwind CSS构建',
        updated: '最后更新'
      }
    },

    // Common
    common: {
      loading: '加载中...',
      error: '出现错误',
      retry: '重试',
      close: '关闭',
      save: '保存',
      cancel: '取消',
      back: '返回',
      next: '下一个',
      previous: '上一个',
      menu: '菜单'
    }
  },

  ja: {
    // Navigation
    navigation: {
      home: 'ホーム',
      about: '私について',
      skills: 'スキル',
      projects: 'プロジェクト',
      contact: 'お問い合わせ',
      settings: '設定'
    },
    
    // Home Page
    home: {
      welcome: 'こんにちは、私は',
      subtitle: 'フルスタック開発者＆クリエイティブな問題解決者',
      description: 'React、TypeScript、Node.jsなどのモダンテクノロジーを使用して、卓越したデジタル体験を創造することに情熱を注いでいます。',
      buttons: {
        viewProjects: '私のプロジェクトを見る',
        aboutMe: '私について',
        downloadCV: '履歴書をダウンロード'
      },
      stats: {
        projects: 'プロジェクト',
        technologies: 'テクノロジー',
        experience: '学習年数',
        passion: '情熱'
      },
      cta: {
        title: '一緒に働きましょう！',
        description: '新しい機会やエキサイティングなプロジェクトにいつも興味があります。',
        button: 'お問い合わせ'
      },
      scrollIndicator: '下で私の作品を探索してください'
    },

    // About Me Page
    about: {
      title: '私について',
      subtitle: '私をもっとよく知ってください',
      introduction: 'こんにちは！私はEse Osagie、ドイツを拠点とする情熱的なフルスタック開発者です。',
      description: '最先端のテクノロジーを使用してモダンでレスポンシブなWebアプリケーションを作成することを専門としています。Web開発の旅は、Webサイトがどのように機能するかという好奇心から始まり、卓越したデジタル体験を創造する情熱へと発展しました。',
      journey: {
        title: '私の旅',
        content: '現在DCI Digital Career Instituteで学んでおり、常に学習しWeb開発スキルを向上させています。きれいで保守可能なコードを書き、ユーザーフレンドリーなインターフェースを作成することを信じています。'
      },
      passions: {
        title: '私が愛するもの',
        development: 'フルスタック開発',
        learning: '継続的学習',
        problemSolving: '問題解決',
        teamwork: 'チーム協力'
      },
      approach: {
        title: '私のアプローチ',
        content: '技術的な卓越性と創造的な問題解決を組み合わせることを信じています。すべてのプロジェクトは新しいことを学び、可能性の境界を押し広げる機会です。'
      },
      cta: {
        title: 'つながりましょう',
        description: '新しい機会や興味深いプロジェクトについて話し合うことをいつも歓迎しています。',
        button: 'お問い合わせ'
      }
    },

    // Skills Page
    skills: {
      title: '私のスキル',
      subtitle: '私が使用するテクノロジーとツール',
      categories: {
        technical: '技術スキル',
        soft: 'ソフトスキル',
        tools: 'ツールとテクノロジー'
      },
      softSkills: {
        problemSolving: '問題解決',
        teamwork: 'チームワーク',
        communication: 'コミュニケーション',
        creativity: '創造性',
        adaptability: '適応性',
        leadership: 'リーダーシップ'
      }
    },

    // Projects Page
    projects: {
      title: '私のプロジェクト',
      subtitle: '最近の作品のショーケース',
      search: 'プロジェクトを検索...',
      filter: '言語でフィルター',
      all: 'すべて',
      loading: 'プロジェクトを読み込み中...',
      error: 'プロジェクトの読み込みエラー',
      noResults: 'プロジェクトが見つかりません',
      viewCode: 'コードを見る',
      liveDemo: 'ライブデモ',
      technologies: 'テクノロジー',
      createdAt: '作成日',
      updatedAt: '最終更新'
    },

    // Contact Page
    contact: {
      title: 'お問い合わせ',
      subtitle: 'あなたの次のプロジェクトについて話しましょう',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        send: 'メッセージを送信',
        sending: '送信中...',
        success: 'メッセージが正常に送信されました！',
        error: 'メッセージの送信エラー。もう一度お試しください。'
      },
      info: {
        title: '連絡先情報',
        email: 'メール',
        location: '場所',
        availability: 'フリーランス作業受付中'
      },
      social: {
        title: 'フォローしてください',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },

    // Settings Page
    settings: {
      title: '設定',
      subtitle: '体験をカスタマイズ',
      appearance: {
        title: '外観',
        theme: 'テーマ',
        light: 'ライト',
        dark: 'ダーク',
        system: 'システム'
      },
      language: {
        title: '言語',
        select: '言語を選択',
        current: '現在の言語'
      },
      accessibility: {
        title: 'アクセシビリティ',
        reducedMotion: 'モーションを減らす',
        highContrast: 'ハイコントラスト'
      },
      about: {
        title: 'このサイトについて',
        version: 'バージョン',
        built: 'React、TypeScript、Tailwind CSSで構築',
        updated: '最終更新'
      }
    },

    // Common
    common: {
      loading: '読み込み中...',
      error: '何かが間違っています',
      retry: '再試行',
      close: '閉じる',
      save: '保存',
      cancel: 'キャンセル',
      back: '戻る',
      next: '次へ',
      previous: '前へ',
      menu: 'メニュー'
    }
  }
};