export type Language = 'en' | 'de' | 'fr' | 'es' | 'zh' | 'ja';

export const translations = {
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
      title: "About Me",
      subtitle: "Full-Stack Developer passionate about creating innovative digital solutions",
      personal: {
        title: "Personal Info",
        location: "Bielefeld, Germany",
        age: "33 years old",
        education: "Digital Career Institute",
        focus: "Full-Stack Development"
      },
      journey: {
        title: "My Journey",
        description1: "My coding journey began with curiosity and has evolved into a passion for creating meaningful digital experiences. I love solving complex problems and turning ideas into reality through code.",
        description2: "Currently focusing on modern web technologies and always eager to learn new frameworks and tools that can help me build better applications."
      },
      skills: {
        title: "Technical Skills",
        frontend: {
          title: "Frontend"
        },
        backend: {
          title: "Backend"
        },
        tools: {
          title: "Tools & Others"
        }
      },
      values: {
        title: "My Values",
        value1: "Clean, maintainable code that others can understand and build upon",
        value2: "Continuous learning and staying updated with industry best practices",
        value3: "Collaborative teamwork and effective communication"
      },
      interests: {
        title: "Interests",
        interest1: "Exploring new web technologies and frameworks",
        interest2: "Open source contribution and community involvement",
        interest3: "UI/UX design and user experience optimization"
      },
      cta: {
        title: "Let's Connect!",
        description: "I'm always interested in discussing new opportunities, projects, or just chatting about technology.",
        button: "Download My CV"
      }
    },

    // Contact Page
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a project in mind or just want to chat? I\'d love to hear from you. Let\'s build something amazing together!',
      form: {
        title: 'Send Me a Message',
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
        error: 'Sorry, something went wrong. Please try again or contact me directly via email.',
        placeholders: {
          name: 'Enter your full name',
          email: 'Enter your email address',
          subject: 'What\'s this about?',
          message: 'Tell me about your project or just say hello...'
        },
        errors: {
          nameRequired: 'Name is required',
          nameMinLength: 'Name must be at least 2 characters',
          emailRequired: 'Email is required',
          emailInvalid: 'Please enter a valid email address',
          subjectRequired: 'Subject is required',
          subjectMinLength: 'Subject must be at least 5 characters',
          messageRequired: 'Message is required',
          messageMinLength: 'Message must be at least 10 characters'
        }
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        website: 'Website'
      },
      social: {
        title: 'Connect With Me',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      },
      availability: {
        title: 'Availability',
        status: 'Available for new projects',
        responseTime: 'Usually responds within 24 hours'
      },
      location: {
        title: 'My Location',
        description: 'Based in Berlin, open to remote work worldwide'
      }
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
      title: "Über Mich",
      subtitle: "Full-Stack Entwickler mit Leidenschaft für innovative digitale Lösungen",
      personal: {
        title: "Persönliche Informationen",
        location: "Bielefeld, Deutschland",
        age: "33 Jahre alt",
        education: "Digital Career Institute",
        focus: "Full-Stack Entwicklung"
      },
      journey: {
        title: "Meine Reise",
        description1: "Meine Programmierreise begann mit Neugier und hat sich zu einer Leidenschaft für die Erstellung bedeutsamer digitaler Erfahrungen entwickelt. Ich liebe es, komplexe Probleme zu lösen und Ideen durch Code in die Realität umzusetzen.",
        description2: "Derzeit konzentriere ich mich auf moderne Webtechnologien und bin immer begierig darauf, neue Frameworks und Tools zu lernen, die mir helfen können, bessere Anwendungen zu erstellen."
      },
      skills: {
        title: "Technische Fähigkeiten",
        frontend: {
          title: "Frontend"
        },
        backend: {
          title: "Backend"
        },
        tools: {
          title: "Tools & Andere"
        }
      },
      values: {
        title: "Meine Werte",
        value1: "Sauberer, wartbarer Code, den andere verstehen und erweitern können",
        value2: "Kontinuierliches Lernen und Aktualisierung mit Industriestandards",
        value3: "Kollaborative Teamarbeit und effektive Kommunikation"
      },
      interests: {
        title: "Interessen",
        interest1: "Erforschung neuer Webtechnologien und Frameworks",
        interest2: "Open-Source-Beiträge und Community-Beteiligung",
        interest3: "UI/UX-Design und Benutzererfahrungsoptimierung"
      },
      cta: {
        title: "Lass uns vernetzen!",
        description: "Ich bin immer interessiert daran, neue Möglichkeiten, Projekte zu diskutieren oder einfach über Technologie zu sprechen.",
        button: "Meinen Lebenslauf herunterladen"
      }
    },

    // Contact Page
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Haben Sie ein Projekt im Kopf oder möchten Sie einfach nur chatten? Ich würde gerne von Ihnen hören. Lassen Sie uns gemeinsam etwas Großartiges schaffen!',
      form: {
        title: 'Schreiben Sie mir eine Nachricht',
        name: 'Vollständiger Name',
        email: 'E-Mail-Adresse',
        subject: 'Betreff',
        message: 'Nachricht',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Danke! Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich bald bei Ihnen melden.',
        error: 'Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt per E-Mail.',
        placeholders: {
          name: 'Geben Sie Ihren vollständigen Namen ein',
          email: 'Geben Sie Ihre E-Mail-Adresse ein',
          subject: 'Worum geht es?',
          message: 'Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo...'
        },
        errors: {
          nameRequired: 'Name ist erforderlich',
          nameMinLength: 'Der Name muss aus mindestens 2 Zeichen bestehen',
          emailRequired: 'E-Mail ist erforderlich',
          emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
          subjectRequired: 'Betreff ist erforderlich',
          subjectMinLength: 'Der Betreff muss aus mindestens 5 Zeichen bestehen',
          messageRequired: 'Nachricht ist erforderlich',
          messageMinLength: 'Die Nachricht muss aus mindestens 10 Zeichen bestehen'
        }
      },
      info: {
        title: 'Kontaktinformationen',
        email: 'E-Mail',
        phone: 'Telefon',
        location: 'Standort',
        website: 'Webseite'
      },
      social: {
        title: 'Verbinden Sie sich mit mir',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      },
      availability: {
        title: 'Verfügbarkeit',
        status: 'Verfügbar für neue Projekte',
        responseTime: 'Antwortet normalerweise innerhalb von 24 Stunden'
      },
      location: {
        title: 'Mein Standort',
        description: 'Ansässig in Berlin, offen für Remote-Arbeit weltweit'
      }
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

    // Contact Page
    contact: {
      title: 'Entrer en contact',
      subtitle: 'Vous avez un projet en tête ou vous voulez simplement discuter ? J\'aimerais avoir de vos nouvelles. Construisons quelque chose d\'incroyable ensemble !',
      form: {
        title: 'Envoyez-moi un message',
        name: 'Nom complet',
        email: 'Adresse e-mail',
        subject: 'Sujet',
        message: 'Message',
        send: 'Envoyer le message',
        sending: 'Envoi en cours...',
        success: 'Merci ! Votre message a été envoyé avec succès. Je reviendrai vers vous bientôt.',
        error: 'Désolé, quelque chose a mal tourné. Veuillez réessayer ou me contacter directement par e-mail.',
        placeholders: {
          name: 'Entrez votre nom complet',
          email: 'Entrez votre adresse e-mail',
          subject: 'De quoi s\'agit-il ?',
          message: 'Parlez-moi de votre projet ou dites simplement bonjour...'
        },
        errors: {
          nameRequired: 'Le nom est requis',
          nameMinLength: 'Le nom doit comporter au moins 2 caractères',
          emailRequired: 'L\'email est requis',
          emailInvalid: 'Veuillez entrer une adresse e-mail valide',
          subjectRequired: 'Le sujet est requis',
          subjectMinLength: 'Le sujet doit comporter au moins 5 caractères',
          messageRequired: 'Le message est requis',
          messageMinLength: 'Le message doit comporter au moins 10 caractères'
        }
      },
      info: {
        title: 'Informations de contact',
        email: 'Email',
        phone: 'Téléphone',
        location: 'Emplacement',
        website: 'Site web'
      },
      social: {
        title: 'Connectez-vous avec moi',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      },
      availability: {
        title: 'Disponibilité',
        status: 'Disponible pour de nouveaux projets',
        responseTime: 'Répond généralement dans les 24 heures'
      },
      location: {
        title: 'Mon emplacement',
        description: 'Basé à Berlin, ouvert au travail à distance dans le monde entier'
      }
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

    // Contact Page
    contact: {
      title: 'Ponerse en contacto',
      subtitle: 'Hablemos de tu próximo proyecto',
      form: {
        title: 'Envíame un mensaje',
        name: 'Tu nombre',
        email: 'Tu email',
        subject: 'Asunto',
        message: 'Tu mensaje',
        send: 'Enviar mensaje',
        sending: 'Enviando...',
        success: '¡Mensaje enviado exitosamente!',
        error: 'Error enviando mensaje. Por favor intenta de nuevo.',
        placeholders: {
          name: 'Ingresa tu nombre completo',
          email: 'Ingresa tu dirección de correo electrónico',
          subject: '¿De qué se trata esto?',
          message: 'Cuéntame sobre tu proyecto o simplemente di hola...'
        },
        errors: {
          nameRequired: 'El nombre es obligatorio',
          nameMinLength: 'El nombre debe tener al menos 2 caracteres',
          emailRequired: 'El correo electrónico es obligatorio',
          emailInvalid: 'Por favor ingresa una dirección de correo electrónico válida',
          subjectRequired: 'El asunto es obligatorio',
          subjectMinLength: 'El asunto debe tener al menos 5 caracteres',
          messageRequired: 'El mensaje es obligatorio',
          messageMinLength: 'El mensaje debe tener al menos 10 caracteres'
        }
      },
      info: {
        title: 'Información de contacto',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        website: 'Sitio web'
      },
      social: {
        title: 'Sígueme',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      },
      availability: {
        title: 'Disponibilidad',
        status: 'Disponible para nuevos proyectos',
        responseTime: 'Normalmente responde dentro de 24 horas'
      },
      location: {
        title: 'Mi ubicación',
        description: 'Con base en Berlín, abierto al trabajo remoto en todo el mundo'
      }
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

    // Contact Page
    contact: {
      title: '联系我',
      subtitle: '让我们讨论您的下一个项目',
      form: {
        title: '给我发消息',
        name: '您的姓名',
        email: '您的邮箱',
        subject: '主题',
        message: '您的消息',
        send: '发送消息',
        sending: '发送中...',
        success: '消息发送成功！我会尽快回复您。',
        error: '发送消息时出错。请重试或直接通过电子邮件联系我。',
        placeholders: {
          name: '输入您的全名',
          email: '输入您的电子邮件地址',
          subject: '这是什么主题？',
          message: '告诉我关于您的项目或只是打个招呼...'
        },
        errors: {
          nameRequired: '姓名是必填的',
          nameMinLength: '姓名至少需要2个字符',
          emailRequired: '电子邮件是必填的',
          emailInvalid: '请输入有效的电子邮件地址',
          subjectRequired: '主题是必填的',
          subjectMinLength: '主题至少需要5个字符',
          messageRequired: '消息是必填的',
          messageMinLength: '消息至少需要10个字符'
        }
      },
      info: {
        title: '联系信息',
        email: '邮箱',
        phone: '电话',
        location: '位置',
        website: '网站'
      },
      social: {
        title: '关注我',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      },
      availability: {
        title: '可用性',
        status: '接受新项目',
        responseTime: '通常在24小时内回复'
      },
      location: {
        title: '我的位置',
        description: '常驻柏林，接受全球远程工作'
      }
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

    // Contact Page
    contact: {
      title: 'お問い合わせ',
      subtitle: 'あなたの次のプロジェクトについて話しましょう',
      form: {
        title: 'メッセージを送信',
        name: 'お名前',
        email: 'メールアドレス',
        subject: '件名',
        message: 'メッセージ',
        send: 'メッセージを送信',
        sending: '送信中...',
        success: 'メッセージが正常に送信されました！すぐに返信いたします。',
        error: 'メッセージの送信エラー。もう一度お試しください。',
        placeholders: {
          name: 'お名前を入力してください',
          email: 'メールアドレスを入力してください',
          subject: 'これは何についてですか？',
          message: 'プロジェクトについて教えてください、またはただ挨拶してください...'
        },
        errors: {
          nameRequired: '名前は必須です',
          nameMinLength: '名前は2文字以上である必要があります',
          emailRequired: 'メールは必須です',
          emailInvalid: '有効なメールアドレスを入力してください',
          subjectRequired: '件名は必須です',
          subjectMinLength: '件名は5文字以上である必要があります',
          messageRequired: 'メッセージは必須です',
          messageMinLength: 'メッセージは10文字以上である必要があります'
        }
      },
      info: {
        title: '連絡先情報',
        email: 'メール',
        phone: '電話',
        location: '場所',
        website: 'ウェブサイト'
      },
      social: {
        title: 'フォローしてください',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      },
      availability: {
        title: '可用性',
        status: '新しいプロジェクトの受け入れ中',
        responseTime: '通常24時間以内に返信'
      },
      location: {
        title: '私の位置',
        description: 'ベルリンに拠点を置き、世界中のリモートワークに対応'
      }
    }
  }
};