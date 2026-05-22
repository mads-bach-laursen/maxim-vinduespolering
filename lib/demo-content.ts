export const company = {
  name: "Maxim Vinduespolering",
  legalName: "Maxim Vinduespolering I/S",
  ownerFirstName: "Thomas",
  phone: "40 57 40 94",
  phoneTel: "+4540574094",
  email: "info@maximvinduespolering.dk",
  address: "Hedevej 14, Årslev Hede",
  postal: "8960 Randers SØ",
  cvr: "37964719",
  hours: "Man-fre 8.00-17.00",
  facebook: "https://www.facebook.com/",
  fromPrice: "90 kr.",
  responseTime: "24 timer",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  image: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "vinduespolering",
    title: "Vinduespolering",
    short:
      "Rentvands-anlæg og traditionel polering. Skinnende rene vinduer hver gang – ude og inde.",
    long: "Professionel vinduespolering til private og erhverv.",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=900&q=80",
    icon: "Sparkles",
  },
  {
    slug: "solcellerengoring",
    title: "Solcellerengøring",
    short:
      "Genskab solcellernes effekt med skånsom rengøring. Op til 20% bedre ydelse efter besøget.",
    long: "Skånsom rengøring af solcelleanlæg.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    icon: "Sun",
  },
  {
    slug: "algebehandling",
    title: "Algebehandling",
    short:
      "Fjerner alger og grønbelægning på tag, facade og fliser. Skånsomt og effektivt.",
    long: "Effektiv algebehandling.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    icon: "Leaf",
  },
  {
    slug: "edderkoppeforebyggelse",
    title: "Edderkoppeforebyggelse",
    short:
      "Holder edderkopper og insekter væk fra vinduer og facade. Behandling holder typisk 6-12 mdr.",
    long: "Forebyggende behandling mod edderkopper.",
    image:
      "https://images.unsplash.com/photo-1572177812156-58036aae439c?auto=format&fit=crop&w=900&q=80",
    icon: "Bug",
  },
  {
    slug: "facaderens",
    title: "Facaderens",
    short:
      "Skånsom rens af mursten, puds og pladefacader. Får dit hus til at se nyt ud igen.",
    long: "Skånsom rens af facader.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    icon: "Building2",
  },
  {
    slug: "fliserens",
    title: "Fliserens",
    short:
      "Terrasser, indkørsler og fortove – vi fjerner snavs, mos og alger med højtryk.",
    long: "Effektiv fliserens.",
    image:
      "https://images.unsplash.com/photo-1591033594798-33227a05780d?auto=format&fit=crop&w=900&q=80",
    icon: "Square",
  },
];

export type Testimonial = {
  name: string;
  city: string;
  since: string;
  quote: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Morten Nielsen",
    city: "Silkeborg",
    since: "2021",
    quote:
      "Thomas kommer altid når han siger det. Vinduerne er skinnende rene hver gang, og prisen er fair.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Trine Margrethe Damborg",
    city: "Skanderborg",
    since: "2019",
    quote:
      "Vi har brugt Maxim i flere år og er aldrig blevet skuffet. Anbefales varmt.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Henrik Lyngsø",
    city: "Hadsten",
    since: "2023",
    quote:
      "God personlig service. Aftaler bliver overholdt, og det er nemt at have med dem at gøre.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Lise Bjerregaard",
    city: "Silkeborg",
    since: "2022",
    quote:
      "Endelig en vinduespudser der dukker op til tiden! Thomas er hyggelig at have i huset og laver et flot stykke arbejde.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=24",
  },
];

export const stats = [
  { value: "1.000+", label: "Faste kunder" },
  { value: "100%", label: "Tilfredshedsgaranti" },
  { value: "26%", label: "Servicefradrag" },
  { value: "10+", label: "Års erfaring" },
];

export const ownerStory = {
  label: "Thomas, Ejer af Maxim Vinduespolering",
  headline: "Byens mest pålidelige vinduespudser",
  body: "Jeg startede Maxim Vinduespolering for over 10 år siden, fordi jeg ville drive en virksomhed, hvor kunderne faktisk kan regne med os. Vi kommer når vi siger det, vi laver et ordentligt stykke arbejde, og vi er lette at få fat i. Det lyder simpelt, men det er sjældent i vinduespolering i dag. Hos os får du den samme person hver gang, og du får en vinduespudser der står inde for sit arbejde.",
  bullets: [
    "Stabil service – vi kommer når vi siger det",
    "Personlig kontakt med ejeren",
    "+10 års erfaring i lokalområdet",
    "Tilfredshedsgaranti på alle opgaver",
  ],
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
};

export const b2bClients = [
  "XL BYG",
  "SUPERDÆK",
  "MATAS",
  "REMA 1000",
  "JBMEDICO",
  "DEAS",
];

export type City = {
  slug: string;
  name: string;
  postal: string;
  priority?: boolean;
};

export const cities: City[] = [
  { slug: "silkeborg", name: "Silkeborg", postal: "8600", priority: true },
  { slug: "skanderborg", name: "Skanderborg", postal: "8660", priority: true },
  { slug: "hammel", name: "Hammel", postal: "8450", priority: true },
  { slug: "grenaa", name: "Grenaa", postal: "8500", priority: true },
  { slug: "ebeltoft", name: "Ebeltoft", postal: "8400", priority: true },
  { slug: "ronde", name: "Rønde", postal: "8410", priority: true },
  { slug: "hornslet", name: "Hornslet", postal: "8543", priority: true },
  { slug: "hadsten", name: "Hadsten", postal: "8370", priority: true },
  { slug: "hinnerup", name: "Hinnerup", postal: "8382", priority: true },
  { slug: "bjerringbro", name: "Bjerringbro", postal: "8850", priority: true },
  { slug: "ry", name: "Ry", postal: "8680", priority: true },
  { slug: "lystrup", name: "Lystrup", postal: "8520", priority: true },
  { slug: "hjortshoj", name: "Hjortshøj", postal: "8530", priority: true },
  { slug: "skodstrup", name: "Skødstrup", postal: "8541", priority: true },
  { slug: "horning", name: "Hørning", postal: "8362", priority: true },
  { slug: "allingabro", name: "Allingåbro", postal: "8961" },
  { slug: "ans", name: "Ans", postal: "8643" },
  { slug: "auning", name: "Auning", postal: "8963" },
  { slug: "balle", name: "Balle", postal: "8444" },
  { slug: "bording", name: "Bording", postal: "7441" },
  { slug: "braedstrup", name: "Brædstrup", postal: "8740" },
  { slug: "bryrup", name: "Bryrup", postal: "8654" },
  { slug: "engesvang", name: "Engesvang", postal: "7442" },
  { slug: "flemming", name: "Flemming", postal: "8762" },
  { slug: "galten", name: "Galten", postal: "8464" },
  { slug: "glesborg", name: "Glesborg", postal: "8585" },
  { slug: "harlev-j", name: "Harlev J", postal: "8462" },
  { slug: "hasselager", name: "Hasselager", postal: "8361" },
  { slug: "hovedgaard", name: "Hovedgård", postal: "8732" },
  { slug: "ikast", name: "Ikast", postal: "7430" },
  { slug: "kjellerup", name: "Kjellerup", postal: "8620" },
  { slug: "kolind", name: "Kolind", postal: "8560" },
  { slug: "klovborg", name: "Klovborg", postal: "8765" },
  { slug: "knebel", name: "Knebel", postal: "8420" },
  { slug: "langaa", name: "Langå", postal: "8870" },
  { slug: "laasby", name: "Låsby", postal: "8670" },
  { slug: "morke", name: "Mørke", postal: "8544" },
  { slug: "nimtofte", name: "Nimtofte", postal: "8581" },
  { slug: "rask-molle", name: "Rask Mølle", postal: "8763" },
  { slug: "rodkjaersbro", name: "Rødkjærsbro", postal: "6230" },
  { slug: "ryomgaard", name: "Ryomgård", postal: "8550" },
  { slug: "sabro", name: "Sabro", postal: "8471" },
  { slug: "solbjerg", name: "Solbjerg", postal: "8361" },
  { slug: "sporup", name: "Sporup", postal: "8472" },
  { slug: "sorring", name: "Sorring", postal: "8641" },
  { slug: "them", name: "Them", postal: "8653" },
  { slug: "thorso", name: "Thorsø", postal: "8881" },
  { slug: "trustrup", name: "Trustrup", postal: "8570" },
  { slug: "uldum", name: "Uldum", postal: "7171" },
  { slug: "ulstrup", name: "Ulstrup", postal: "8880" },
  { slug: "ostbirk", name: "Østbirk", postal: "8752" },
  { slug: "orsted", name: "Ørsted", postal: "8950" },
  { slug: "orum-djurs", name: "Ørum Djurs", postal: "8586" },
];

export const faqs = [
  {
    q: "Hvor ofte anbefales det at få pudset vinduer?",
    a: "For private anbefaler vi 4-6 gange om året afhængigt af bygningens placering og vejret. For erhverv typisk hver 2.-4. uge. Vi sætter gerne en fast aftale op, så du aldrig skal tænke over det.",
  },
  {
    q: "Hvad koster vinduespudsning?",
    a: "Priserne starter fra 90 kr. inkl. moms. Den endelige pris afhænger af antal vinduer, etage og adgangsforhold. Vi giver altid et gratis og uforpligtende tilbud inden vi starter.",
  },
  {
    q: "Kan jeg få en fast aftale?",
    a: "Ja! De fleste af vores kunder har en fast aftale, hvor vi kommer fast hver 4., 6. eller 8. uge. Du får automatisk besked dagen før, og du behøver ikke være hjemme.",
  },
  {
    q: "Hvordan kan jeg betale?",
    a: "Du kan betale via MobilePay, bankoverførsel eller med faktura. Som privat kunde får du automatisk indberetning til servicefradrag (26%).",
  },
  {
    q: "Kan I pudse vinduer, selvom jeg ikke er hjemme?",
    a: "Ja, det gør vi for mange af vores faste kunder. Vi tager kun udvendigt med mindre andet er aftalt – og du får besked når vi er færdige.",
  },
  {
    q: "Pudser I i regn og frost?",
    a: "Vi pudser gerne i regn – det går faktisk fint med vores rentvands-anlæg. Ved hård frost (under -3°C) aflyser vi af hensyn til kvaliteten.",
  },
  {
    q: "Hvad sker der hvis I skal aflyse pga. vejret?",
    a: "Du får besked hurtigst muligt – typisk dagen før – og vi flytter besøget til først kommende ledige dag. Du betaler først når arbejdet er udført.",
  },
  {
    q: "Er I forsikret?",
    a: "Ja, vi er fuldt erhvervs- og ansvarsforsikret. Skulle der ske skade under vores arbejde, dækker vores forsikring.",
  },
  {
    q: "Tilbyder I servicefradrag-rådgivning?",
    a: "Ja, vi indberetter automatisk til Skat for private kunder, så du kan trække 26% fra på din selvangivelse. Vi sender altid faktura med korrekte oplysninger.",
  },
  {
    q: "Hvilke byer dækker I?",
    a: "Vi dækker hele Midt- og Østjylland – over 50 byer fra Silkeborg i vest til Grenaa i øst, fra Hadsten i nord til Hørning i syd. Find din by i listen nedenfor.",
  },
];

export const silkeborg = {
  slug: "silkeborg",
  name: "Silkeborg",
  postal: "8600",
  heroTitle: "Vinduespudser i Silkeborg",
  heroSubtitle:
    "Skinnende rene vinduer i hele Silkeborg – fra Lysbro og Sølystparken til Alderslyst og centrum. Få et gratis tilbud inden for 24 timer.",
  intro:
    "I Silkeborg sørger Maxim for skinnende rene vinduer i hele byen, fra Lysbro og Sølystparken til Alderslyst og centrum. Vi har faste kunder spredt over hele Silkeborg-området og dækker både private boliger og erhverv. Med rentvands-anlæg når vi op til 3. sals højde uden problemer, og vi tilpasser besøget efter din hverdag og bygningens behov.",
  whyBullets: [
    {
      title: "Lokal forankring i Silkeborg",
      body: "Vi kører faste ruter i Silkeborg hver uge og kender byens kvarterer og adgangsforhold som vores egen baghave.",
    },
    {
      title: "Hurtig respons",
      body: "I Silkeborg kan vi typisk være ude inden for 3-5 hverdage – og ofte hurtigere ved akut behov.",
    },
    {
      title: "Faste aftaler tilpasset Silkeborgs vejr",
      body: "Vi tilpasser vores faste ruter efter sæsonen og pollen-mængden ved søen, så dine vinduer altid ser bedst ud.",
    },
    {
      title: "Servicefradrag på 26%",
      body: "Som privat i Silkeborg kan du trække 26% fra på vinduespudsning via servicefradraget – vi indberetter automatisk.",
    },
  ],
  neighborSlugs: ["ry", "skanderborg", "them", "bryrup", "hammel"],
  faqs: [
    {
      q: "Hvad koster vinduespudsning i Silkeborg?",
      a: "Priserne i Silkeborg starter fra 90 kr. inkl. moms for en mindre lejlighed. For et typisk parcelhus ligger prisen mellem 350-550 kr. afhængigt af antal vinduer og adgangsforhold. Du får altid et gratis tilbud inden vi starter.",
    },
    {
      q: "Hvor hurtigt kan I komme til Silkeborg?",
      a: "Vi har faste ruter i Silkeborg hver uge, så vi kan typisk komme ud inden for 3-5 hverdage. Ved akut behov ofte hurtigere – ring og hør om vi kan klemme dig ind.",
    },
    {
      q: "Dækker I hele Silkeborg-området?",
      a: "Ja, vi dækker hele postnummer 8600 inkl. Lysbro, Sølystparken, Alderslyst, Funder, Resenbro og resten af Silkeborg-omegnen.",
    },
    {
      q: "Tilbyder I også vinduespolering til erhverv i Silkeborg?",
      a: "Ja, vi har mange erhvervskunder i Silkeborg – fra butikker i gågaden til kontorer og produktionshaller. Vi aftaler tider udenfor jeres åbningstid hvis det passer bedre.",
    },
    {
      q: "Kan I komme udenfor normal arbejdstid i Silkeborg?",
      a: "For erhvervskunder i Silkeborg kan vi sagtens aftale opgaver tidligt morgen eller sen eftermiddag. Privatkunder klarer vi typisk i dagtimerne uanset om du er hjemme.",
    },
  ],
};
