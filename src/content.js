/* Contenuti del sito D-Tech Studios — un solo posto da editare per i testi. */

// Immagini importate come moduli: Vite riscrive i path correttamente anche
// sotto il subpath di GitHub Pages (es. /dtech-website/).
import teamDiego from './assets/team/diego.webp'
import teamNoemi from './assets/team/noemi.webp'
import teamFilippo from './assets/team/filippo.webp'
import teamDavide from './assets/team/davide.webp'
import teamMatteo from './assets/team/matteo.webp'
import logoAutoscuola from './assets/clients/autoscuola-ternana.webp'
import logoCustode from './assets/clients/il-custode-del-tempo.webp'
import logoOsaka from './assets/clients/osaka.webp'
import logoPaci from './assets/clients/paciautoquattro.webp'

export const CONTACT = {
  email: 'info@dtechstudiosrl.com',
  phoneDisplay: '+39 342 743 6643',
  phoneRaw: '393427436643',
  whatsapp: '393427436643',
  address: 'Terni, Piazza Cornelio Tacito 2',
  company: 'D-Tech Studios S.r.l.',
}

export const SOCIALS = [
  {
    name: 'Instagram',
    icon: 'instagram',
    handle: '@dtechstudios',
    href: 'https://www.instagram.com/dtechstudios/',
    desc: 'Dietro le quinte, reel e risultati reali',
  },
  {
    name: 'TikTok',
    icon: 'tiktok',
    handle: '@dtechstudios',
    href: 'https://www.tiktok.com/@dtechstudios',
    desc: 'I contenuti che diventano virali',
  },
]

export const NAV_LINKS = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Team', href: '#team' },
  { label: 'Clienti', href: '#clienti' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Contatti', href: '#contatti' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Aziende gestite' },
  { value: 3, suffix: '+', label: 'Anni di attività' },
  { value: 88, suffix: '%', label: 'Clienti soddisfatti' },
]

export const VIEWS_COUNT = 542918673

/* Servizi: 6 aree, ognuna con lista di servizi (nome — descrizione) e una
   citazione che chiude la card. Le icone stanno in src/assets/services. */
export const SERVICE_GROUPS = [
  {
    icon: 'strategia',
    title: 'Strategia e Crescita',
    items: [
      { name: 'Brand identity & advisory', desc: 'posizionamento, tone of voice, valori e coerenza del brand' },
      { name: 'Brand strategy', desc: 'analisi di mercato, target, competitor e piano di posizionamento' },
      { name: 'Naming e rebranding', desc: 'sviluppo o rinnovamento dell’identità verbale e visiva' },
      { name: 'Consulenza strategica di comunicazione', desc: 'piani editoriali e calendari integrati multicanale' },
    ],
    quote: 'L’obiettivo è conoscere e comprendere il cliente così a fondo che il prodotto o il servizio si venda da solo.',
  },
  {
    icon: 'creativity',
    title: 'Contenuti e Creatività',
    items: [
      { name: 'Content creation', desc: 'copy, foto, grafiche, caroselli e contenuti short-form' },
      { name: 'Produzione video', desc: 'reel, spot, video promozionali, backstage e motion graphics' },
      { name: 'Copywriting', desc: 'testi per sito, social, ADV e newsletter' },
      { name: 'Fotografia e produzione creativa', desc: 'shooting di prodotto, still life e ritratti di brand' },
    ],
    quote: 'I prodotti si creano in fabbrica, i brand si creano nella mente.',
  },
  {
    icon: 'communication',
    title: 'Campagne e Comunicazione',
    items: [
      { name: 'Campagne di comunicazione integrate', desc: 'ideazione e sviluppo di campagne multicanale' },
      { name: 'Ufficio stampa & PR', desc: 'comunicati e relazioni con i media' },
      { name: 'Gestione eventi', desc: 'organizzazione, comunicazione e copertura live' },
      { name: 'Employer branding', desc: 'comunicazione interna e recruiting marketing' },
    ],
    quote: 'Le persone non comprano prodotti e servizi, ma relazioni, storie e magia.',
  },
  {
    icon: 'social-media',
    title: 'Social Media',
    items: [
      { name: 'Social media management', desc: 'gestione quotidiana dei profili: Instagram, TikTok, LinkedIn, Facebook, YouTube…' },
      { name: 'Piani editoriali social', desc: 'pianificazione dei contenuti su base mensile o trimestrale' },
      { name: 'Social media advertising', desc: 'campagne a pagamento su Meta Ads, TikTok Ads e LinkedIn Ads' },
      { name: 'Influencer marketing', desc: 'selezione e gestione delle collaborazioni con i creator' },
    ],
    quote: 'Il miglior marketing è quello che non sembra marketing.',
  },
  {
    icon: 'ads',
    title: 'Advertising e Performance',
    items: [
      { name: 'Media planning & buying', desc: 'pianificazione degli investimenti in ADV digitale e tradizionale' },
      { name: 'Google Ads / SEM', desc: 'campagne search e display' },
      { name: 'SEO', desc: 'ottimizzazione del posizionamento organico' },
      { name: 'Email marketing & automation', desc: 'newsletter, funnel e CRM' },
    ],
    quote: 'Nel tempo che hai impiegato a leggere questa frase sono state inviate 20 milioni di email.',
  },
  {
    icon: 'web',
    title: 'Digital & Web',
    items: [
      { name: 'Web design e sviluppo siti', desc: 'landing page, e-commerce e siti vetrina' },
      { name: 'UX/UI design', desc: 'esperienza utente e interfacce' },
      { name: 'Analytics & reporting', desc: 'monitoraggio KPI, dashboard e ottimizzazione dati alla mano' },
    ],
    quote: 'Pensa a cosa digiterà l’utente.',
  },
]

export const METHOD_STEPS = [
  { n: '01', title: 'Definizione Percorso', text: 'Ascoltiamo le tue esigenze e disegniamo la rotta.' },
  { n: '02', title: 'Unique Value Proposition', text: 'Definiamo cosa ti rende diverso e perché sceglierti.' },
  { n: '03', title: 'Digital Strategy', text: 'Trasformiamo gli obiettivi in un piano d’azione.' },
  { n: '04', title: 'Content Strategy', text: 'Stabiliamo cosa comunicare, dove e con che ritmo.' },
  { n: '05', title: 'Graphic Setup', text: 'Costruiamo l’identità visiva del brand.' },
  { n: '06', title: 'Social Media Setup', text: 'Prepariamo e ottimizziamo i canali.' },
  { n: '07', title: 'Content Creation', text: 'Produciamo contenuti che posizionano e convertono.' },
  { n: '08', title: 'Social Media Management', text: 'Gestiamo, misuriamo e miglioriamo di continuo.' },
]

// founder: true → prima riga, card più grande. photo: null → Dario (il capo) non
// compare in foto: card "executive" con composizione astratta.
export const TEAM = [
  {
    name: 'Diego',
    photo: teamDiego,
    role: 'CEO & CTO',
    desc: 'Traduce la strategia in prodotti digitali solidi, costruiti per crescere.',
    founder: true,
  },
  {
    name: 'Dario',
    photo: null,
    role: 'Co-CEO & COO',
    desc: 'L’organizzazione e le relazioni che reggono ogni progetto. Dietro le quinte, dove nascono i risultati.',
    founder: true,
  },
  {
    name: 'Noemi',
    photo: teamNoemi,
    role: 'Head of Brand & Visual Design',
    desc: 'Costruisce identità visive che rendono un brand riconoscibile e coerente.',
  },
  {
    name: 'Filippo',
    photo: teamFilippo,
    role: 'Account Manager',
    desc: 'Il punto di riferimento del cliente, dal primo confronto alla consegna.',
  },
  {
    name: 'Davide',
    photo: teamDavide,
    role: 'Social Media & Lead Generation Manager',
    desc: 'Genera visibilità e richieste concrete con contenuti e campagne mirate.',
  },
  {
    name: 'Matteo',
    photo: teamMatteo,
    role: 'Head of Video Production & Editing',
    desc: 'Realizza video che catturano l’attenzione e restano impressi.',
  },
]

// logo: importato da src/assets/clients. video: da collegare più avanti.
export const CASES = [
  {
    client: 'Autoscuola Ternana',
    tag: 'Video · Social',
    logo: logoAutoscuola,
    instagram: 'https://www.instagram.com/autoscuolaternana/',
    tiktok: 'https://www.tiktok.com/@autoscuolaternana',
    video: 'caso-studio-autoscuola-ternana.mp4',
  },
  {
    client: 'Il Custode del Tempo',
    tag: 'Branding · Video',
    logo: logoCustode,
    instagram: 'https://www.instagram.com/ilcustodedeltempo/',
    tiktok: 'https://www.tiktok.com/@ilcustodedeltempo',
    video: 'caso-studio-custode-del-tempo-orologi-1.mp4',
  },
  {
    client: 'Osaka',
    tag: 'Content · ADV',
    logo: logoOsaka,
    instagram: 'https://www.instagram.com/osakaterni/',
    tiktok: 'https://www.tiktok.com/@osakaterni',
    video: 'caso-studio-sushi-terni.mp4',
  },
  {
    client: 'PaciAutoquattro',
    tag: 'Social · Video',
    logo: logoPaci,
    instagram: 'https://www.instagram.com/paciautoquattro/',
    tiktok: 'https://www.tiktok.com/@paciautoquattrospa',
    video: null,
  },
]
