import { FaUsers, FaCheckCircle, FaBullhorn, FaServer, FaCode, FaChartBar, FaSnapchat, FaShapes } from 'react-icons/fa';
import psbanner from "./../assets/images/pscbanner.jpg";
import psdmark from "./../assets/images/psdigital.jpg";
import psmusik from "./../assets/images/musique.webp";
import afrijeune from "./../assets/images/afrijeune-banner.jpg";

export const pscreativedetails = [
  {
    id: 0,
    service_name: "Ps Studio Creative",
    service_short_description: "Découvrez notre studio créatif.",
    service_banner_image: psbanner,
    main_service_name: "Services de Photographie",
    main_short_description:
      "Notre studio créatif offre une gamme complète de services de photographie pour capturer vos moments spéciaux avec éclat. Que ce soit pour des portraits, des événements ou des projets commerciaux, notre équipe expérimentée garantit des résultats exceptionnels.",
    subServices: [
      {
        id: 0,
        name: "Shooting photo pro",
        description:
          "Nos séances de shooting photo professionnelles sont conçues pour capturer vos moments les plus précieux avec une qualité exceptionnelle. Que ce soit pour des portraits, des événements spéciaux ou des projets commerciaux, notre équipe de photographes expérimentés saura mettre en valeur votre sujet et créer des images impressionnantes.",
        service_image: "https://media.istockphoto.com/id/1270347938/vector/professional-photographer-taking-pictures-of-young-woman.jpg?s=612x612&w=0&k=20&c=pcOemvmmX1N14AOmy5KWU9zhswCuyyPhPzg733osSOM="
      },
      {
        id: 1,
        name: "Couverture de mariages",
        description:
          "Faites confiance à notre équipe pour capturer chaque moment spécial de votre journée de mariage. De la cérémonie à la réception, nous sommes là pour documenter chaque instant de bonheur, d'émotion et d'amour. Avec une approche discrète et artistique, nous créons des souvenirs intemporels que vous chérirez pour toujours.",
          service_image: "https://img.freepik.com/vecteurs-premium/seance-photo-mariage-photographe-professionnel-faisant-photo-romantique-illustration-vectorielle_81894-12704.jpg"
      },
      {
        id: 2,
        name: "Réalisation de spots vidéo",
        description:
          "Besoin de promouvoir votre entreprise, produit ou service de manière captivante et professionnelle ? Notre équipe de réalisateurs et de producteurs de vidéos vous propose des spots publicitaires percutants qui sauront attirer l'attention de votre public cible. De la conception du scénario à la post-production, nous assurons un service complet pour donner vie à votre vision.",
          service_image: "https://static.vecteezy.com/system/resources/previews/003/596/364/non_2x/video-marketing-concept-in-modern-flat-design-blogger-with-megaphone-attracts-audience-in-video-content-gets-likes-and-comments-followers-success-online-promotion-strategy-illustration-vector.jpg"
      },
      {
        id: 3,
        name: "Clip vidéo",
        description:
          "Exprimez-vous à travers l'art de la vidéo avec nos services de réalisation de clips vidéo. Que vous soyez un artiste musical, un influenceur ou une entreprise, nous pouvons créer des clips vidéo uniques et engageants qui captivent votre audience et renforcent votre présence en ligne.",
          service_image: "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg"
      },
      {
        id: 4,
        name: "Films & Court métrage",
        description:
          "Du concept à la réalisation, nous sommes passionnés par la création de films et de courts métrages qui racontent des histoires fascinantes et inspirantes. Que ce soit pour le divertissement, la sensibilisation ou la promotion, notre équipe talentueuse de cinéastes s'engage à produire des œuvres cinématographiques de haute qualité qui marquent les esprits.",
          service_image: "https://miro.medium.com/v2/resize:fit:1200/1*NPBh2prSO3USXoRA5CwaNg.png"
      },
      {
        id: 5,
        name: "Formation dans les métiers audiovisuels",
        description:
          "Envie d'apprendre les ficelles du métier audiovisuel ? Nos formations spécialisées sont conçues pour vous fournir les connaissances et les compétences nécessaires pour réussir dans l'industrie. Des cours pratiques dispensés par des professionnels expérimentés vous permettront de maîtriser les techniques de production vidéo, de montage, de prise de vue et bien plus encore.",
          service_image: "https://img.freepik.com/free-vector/organic-flat-people-business-training_23-2148909572.jpg"
      },
    ],
  },
];

export const psdigitaldetails = [
  {
    id: 0,
    service_name: "Ps Digital",
    service_short_description: "Explorez nos services de marketing digital.",
    service_banner_image: psdmark,
    main_service_name: "Services de Marketing digital",
    main_short_description:
      "Notre agence propose une gamme complète de services de marketing digital pour aider votre entreprise à prospérer dans le monde numérique d'aujourd'hui. De la gestion des médias sociaux à la création de campagnes publicitaires percutantes, nous sommes là pour vous aider à atteindre vos objectifs marketing.",
    subServices: [
      {
        id: 0,
        icon: <FaUsers/>,
        short: "creationpages",
        name: "Création et gestion des pages réseaux sociaux",
        description:
          "Nous créons et gérons des pages professionnelles sur les réseaux sociaux pour renforcer votre présence en ligne. De la conception de contenu à l'interaction avec les abonnés, nous veillons à ce que vos plateformes sociales reflètent votre marque et atteignent votre public cible.",
      },
      {
        id: 1,
        icon: <FaCheckCircle/>,
        short: "validationcomptes",
        name: "Validation et Monétisation de comptes",
        description:
          "Nous vous aidons à obtenir la validation des comptes sur les plateformes sociales pour renforcer votre crédibilité et votre visibilité en ligne. Grâce à nos stratégies éprouvées, nous maximisons vos chances d'obtenir la reconnaissance officielle de votre marque ou de votre profil.",
      },
      {
        id: 2,
        icon: <FaBullhorn/>,
        short: "sponsoring",
        name: "Sponsoring & Boost",
        description:
          "Boostez la visibilité de vos publications et atteignez un public plus large grâce à nos services de sponsoring et de boost. Nous optimisons vos campagnes publicitaires pour maximiser votre retour sur investissement et vous aider à atteindre vos objectifs marketing.",
      },
      {
        id: 3,
        icon: <FaCode/>,
        short: "webdevelopment",
        name: "Developement Web",
        description:
        "Faites passer votre présence en ligne au niveau supérieur avec notre service de développement web sur mesure. Notre équipe de développeurs expérimentés crée des sites web dynamiques, réactifs et conviviaux, adaptés à vos besoins spécifiques et conçus pour maximiser l'engagement et la conversion de vos visiteurs.",
      },
      {
        id: 4,
        icon: <FaChartBar/>,
        short: "infographie",
        name: "Infographie & Print",
        description:
          "De la création d'infographies percutantes à la conception de supports d'impression de qualité, nous vous proposons des services d'infographie et d'impression pour renforcer votre communication visuelle. Nos graphistes talentueux transforment vos idées en designs accrocheurs qui captivent votre public.",
      },
      {
        id: 5,
        icon: <FaServer/>,
        short: "hosting",
        name: "Hebergement web",
        description:
        "Assurez-vous que votre site web fonctionne de manière optimale avec nos services d'hébergement web fiables et performants. Nous proposons des solutions d'hébergement sécurisées et évolutives pour garantir la disponibilité et la rapidité de votre site, offrant ainsi une expérience utilisateur optimale à vos visiteurs.",
      },
      {
        id: 6,
        icon: <FaSnapchat/>,
        short: "filtresnapchat",
        name: "Filtre SNAPCHAT",
        description:
          "Engagez votre public sur Snapchat avec des filtres personnalisés qui reflètent votre marque ou votre événement. Nous concevons des filtres Snapchat uniques et créatifs pour vous aider à interagir avec votre audience et à renforcer votre présence sur cette plateforme populaire.",
      },
      {
        id: 7,
        icon: <FaShapes/>,
        short: "modelisation2D3D",
        name: "Modélisation 2D & 3D",
        description:
          "Explorez de nouvelles dimensions avec notre service de modélisation 2D & 3D. Que ce soit pour des illustrations, des animations ou des projets de design, notre équipe de modélisation crée des visuels époustouflants qui donnent vie à vos idées et captivent votre public.",
      },
    ],
  },
];

export const psgmusiquedetails = [
  {
    id: 0,
    service_name: "PSG ZIK",
    service_short_description:
      "Découvrez nos services dédiés à l'industrie musicale.",
    service_banner_image: psmusik,
    main_service_name: "Service d'accompagnement Musical",
    main_short_description:
      "Notre équipe propose une gamme complète de services pour soutenir les artistes et les professionnels de l'industrie musicale. De la production à la distribution, nous offrons un accompagnement personnalisé pour vous aider à réussir dans le monde de la musique.",
    subServices: [
      {
        id: 0,
        name: "Production et management d'artistes",
        description:
          "Nous offrons une gestion complète des artistes, de la recherche de talents à leur développement et leur représentation. Avec notre expertise dans l'industrie musicale, nous aidons les artistes à atteindre leur plein potentiel et à réussir dans une industrie compétitive.",
      },
      {
        id: 1,
        name: "Communication musicale",
        description:
          "Nous proposons des services de communication musicale pour promouvoir les artistes et leurs projets. De la création de stratégies de communication à la gestion des relations publiques, nous aidons les artistes à accroître leur visibilité et leur notoriété dans l'industrie.",
      },
      {
        id: 2,
        name: "Enregistrement & Mastering",
        description:
          "Nous offrons des services d'enregistrement et de mastering de haute qualité pour garantir que les projets musicaux atteignent leur plein potentiel sonore. Avec notre équipement de pointe et notre expertise technique, nous assurons des résultats professionnels à chaque étape du processus.",
      },
      {
        id: 3,
        name: "Distribution musicale",
        description:
          "Nous proposons des services de distribution musicale pour aider les artistes à partager leur musique avec un public mondial. Grâce à nos partenariats avec les principales plateformes de streaming et de téléchargement, nous aidons les artistes à toucher un large auditoire et à maximiser leur potentiel de revenus.",
      },
      {
        id: 4,
        name: "Facilitation",
        description:
          "Nous facilitons toutes les étapes du processus créatif et de production musicale. De la planification des sessions d'enregistrement à la coordination des collaborations artistiques, nous offrons un soutien complet pour que les projets musicaux se concrétisent avec succès.",
      },
    ],
  },
];

export const afrijeuneTvDetails = [
  {
    id: 0,
    service_name: "Afrijeune TV",
    service_short_description: "Découvrez notre chaîne de télévision dédiée à la jeunesse africaine.",
    service_banner_image: afrijeune,
    main_service_name: "Service de diffusion télévisée",
    main_short_description: "Afrijeune TV propose une programmation variée axée sur les intérêts et les préoccupations de la jeunesse africaine. De l'actualité aux divertissements, nous offrons une plateforme dynamique pour mettre en lumière les talents et les histoires de la jeunesse africaine.",
    subServices: [
      // {
      //   id: 0,
      //   name: "Publicités",
      //   videos: [
      //     {
      //       lien: "https://www.youtube.com/embed/bkJFiy0ncQM",
      //       titre: "AfriJeune+ en 3 mots",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/J2v9nvUyxC8",
      //       titre: "AF Focus Générique",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/k0JBR8j1qPA",
      //       titre: "C'est quoi AFRIJEUNE + : Des explications dans ce spote",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/FCj5BYJOVq0",
      //       titre: "Entrepren'heure : Générique avec Yves MOKALA",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //   ],
      //   description: "Nous proposons des services de publicité pour promouvoir les produits et les services auprès de notre audience jeune et dynamique. Que ce soit pour une publicité télévisée traditionnelle ou des partenariats de contenu, nous offrons des solutions de marketing efficaces pour atteindre votre public cible.",
      // },
      // {
      //   id: 1,
      //   name: "Communication télévisée",
      //   videos: [
      //     {
      //       lien: "https://www.youtube.com/embed/bkJFiy0ncQM",
      //       titre: "AfriJeune+ en 3 mots",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/J2v9nvUyxC8",
      //       titre: "AF Focus Générique",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/k0JBR8j1qPA",
      //       titre: "C'est quoi AFRIJEUNE + : Des explications dans ce spote",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/FCj5BYJOVq0",
      //       titre: "Entrepren'heure : Générique avec Yves MOKALA",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //   ],
      //   description: "Nous offrons des services de communication télévisée pour aider les entreprises, les organisations et les individus à transmettre leurs messages à un large public à travers nos plateformes de diffusion. De la production de contenu à la diffusion, nous assurons une visibilité maximale pour vos initiatives.",
      // },
      {
        id: 2,
        name: "Nos émissions",
        videos: [
          // {
          //   lien: "https://www.youtube.com/embed/bkJFiy0ncQM",
          //   titre: "AfriJeune+ en 3 mots",
          // },
          // {
          //   lien: "https://www.youtube.com/embed/J2v9nvUyxC8",
          //   titre: "AF Focus Générique",
          // },
          // {
          //   lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
          //   titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
          // },
          // {
          //   lien: "https://www.youtube.com/embed/k0JBR8j1qPA",
          //   titre: "C'est quoi AFRIJEUNE + : Des explications dans ce spote",
          // },
          {
            lien: "https://www.youtube.com/embed/FCj5BYJOVq0",
            titre: "Entrepren'heure : Générique avec Yves MOKALA",
          },
          {
            lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
            titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
          },
          {
            lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
            titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
          },
          {
            lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
            titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
          },
        ],
        description: "Découvrez nos émissions originales créées spécifiquement pour répondre aux besoins et aux intérêts de la jeunesse africaine. Des talk-shows aux émissions de divertissement, nous offrons un contenu varié et engageant pour divertir, informer et inspirer notre public.",
      },
      // {
      //   id: 3,
      //   name: "Reportages",
      //   videos: [
      //     {
      //       lien: "https://www.youtube.com/embed/bkJFiy0ncQM",
      //       titre: "AfriJeune+ en 3 mots",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/J2v9nvUyxC8",
      //       titre: "AF Focus Générique",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/k0JBR8j1qPA",
      //       titre: "C'est quoi AFRIJEUNE + : Des explications dans ce spote",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/FCj5BYJOVq0",
      //       titre: "Entrepren'heure : Générique avec Yves MOKALA",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //   ],
      //   description: "Notre équipe de journalistes propose des reportages complets sur les événements et les problématiques qui touchent la jeunesse africaine. Des sujets d'actualité aux reportages spéciaux, nous nous efforçons de fournir une couverture équilibrée et approfondie pour informer notre public.",
      // },
      // {
      //   id: 4,
      //   name: "Interviews",
      //   videos: [
      //     {
      //       lien: "https://www.youtube.com/embed/bkJFiy0ncQM",
      //       titre: "AfriJeune+ en 3 mots",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/J2v9nvUyxC8",
      //       titre: "AF Focus Générique",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/k0JBR8j1qPA",
      //       titre: "C'est quoi AFRIJEUNE + : Des explications dans ce spote",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/FCj5BYJOVq0",
      //       titre: "Entrepren'heure : Générique avec Yves MOKALA",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //     {
      //       lien: "https://www.youtube.com/embed/CwVMBoEgDaQ",
      //       titre: "AF Focus: Entreprendre sans formation est-ce possible ? avec DECONNEXE",
      //     },
      //   ],
      //   description: "Nous proposons des interviews exclusives avec des personnalités influentes de la culture, du divertissement, de la politique et plus encore. À travers nos interviews, nous donnons la parole à ceux qui façonnent l'avenir de l'Afrique et inspirons notre public avec leurs histoires et leurs idées.",
      // },
    ],
  },
];



