/* Contenuti del sito D-Tech Studios — un solo posto da editare per i testi. */

// Immagini importate come moduli: Vite riscrive i path correttamente anche
// sotto il subpath di GitHub Pages (es. /dtech-website/).
import teamDario from './assets/team/dario-testarella.webp'
import teamDiego from './assets/team/diego-testarella.webp'
import teamFilippoM from './assets/team/filippo-mostarda.webp'
import teamFilippoR from './assets/team/filippo-rossi.webp'
import teamMauro from './assets/team/mauro-rossi.webp'
import teamNoemi from './assets/team/noemi-rossi.webp'
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
  { label: 'Servizi', href: '#servizi' },
  { label: 'Metodo', href: '#metodo' },
  { label: 'Team', href: '#team' },
  { label: 'Clienti', href: '#clienti' },
  { label: 'Contatti', href: '#contatti' },
]

export const STATS = [
  { value: 50, suffix: '+', label: 'Aziende gestite' },
  { value: 3, suffix: '+', label: 'Anni di attività' },
  { value: 88, suffix: '%', label: 'Clienti soddisfatti' },
]

export const VIEWS_COUNT = 83615309

export const SERVICES = [
  {
    icon: 'strategy',
    title: 'Digital Strategy',
    text: 'Costruiamo una strategia digitale su misura, allineata agli obiettivi aziendali e orientata ai risultati. Ogni canale ha un ruolo dentro un sistema.',
  },
  {
    icon: 'social',
    title: 'Social Media Management',
    text: 'Gestiamo i tuoi canali social a 360°: pianificazione editoriale, pubblicazione, gestione dell’immagine del brand e ottimizzazione delle performance.',
  },
  {
    icon: 'content',
    title: 'Content Creation',
    text: 'Progettiamo e realizziamo contenuti pensati per comunicare, posizionare e convertire: video, reel, post e storytelling di brand.',
  },
  {
    icon: 'brand',
    title: 'Grafica & Visual Brand',
    text: 'Costruiamo un’identità visiva forte, coerente e riconoscibile: logo design, brand identity, linee guida e materiali digitali e offline.',
  },
  {
    icon: 'consulting',
    title: 'Consulenza Strategica',
    text: 'Non partiamo dagli strumenti, ma dagli obiettivi. Analizziamo business, mercato e posizionamento per definire una direzione chiara e sostenibile.',
  },
  {
    icon: 'web',
    title: 'Siti Web & Soluzioni Digitali',
    text: 'Progettiamo e sviluppiamo siti web moderni, performanti e orientati alla conversione: siti vetrina, corporate e landing page.',
  },
  {
    icon: 'seo',
    title: 'Posizionamento SEO',
    text: 'Ottimizziamo il tuo sito per essere trovato dalle persone giuste, nel momento giusto: keyword, tecnica e contenuti sui motori di ricerca.',
  },
  {
    icon: 'ads',
    title: 'Campagne Advertising',
    text: 'Gestiamo campagne pubblicitarie su Meta Ads, Google Ads e TikTok Ads, con budget ottimizzato e monitoraggio costante dei risultati.',
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

// Founder: true → prima riga, ritratto più grande. bio = testo che appare in hover.
export const TEAM = [
  { name: 'Dario Testarella', photo: teamDario, role: 'Ruolo', bio: 'Specializzato in Digital Strategy', founder: true, linkedin: '#' },
  { name: 'Diego Testarella', photo: teamDiego, role: 'Ruolo', bio: 'Specializzato in Digital Strategy', founder: true, linkedin: '#' },
  { name: 'Filippo Mostarda', photo: teamFilippoM, role: 'Ruolo', bio: 'Specializzato in Digital Strategy', linkedin: '#' },
  { name: 'Filippo Rossi', photo: teamFilippoR, role: 'Ruolo', bio: 'Specializzato in Digital Strategy', linkedin: '#' },
  { name: 'Mauro Rossi', photo: teamMauro, role: 'Ruolo', bio: 'Specializzato in Digital Strategy', linkedin: '#' },
  { name: 'Noemi Rossi', photo: teamNoemi, role: 'Ruolo', bio: 'Specializzato in Digital Strategy', linkedin: '#' },
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
