/* Icone line-art (stroke = currentColor). Set minimale e coerente. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg',
}

const P = (props) => <path {...props} />

export const icons = {
  strategy: (p) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="0.6" fill="currentColor" /></svg>
  ),
  social: (p) => (
    <svg {...base} {...p}><path d="M4 5h16v11H8l-4 4z" /><path d="M8 9h8M8 12h5" /></svg>
  ),
  content: (p) => (
    <svg {...base} {...p}><rect x="3" y="4" width="14" height="16" rx="2" /><path d="M17 9l4-2v10l-4-2" /></svg>
  ),
  brand: (p) => (
    <svg {...base} {...p}><path d="M12 3l2.4 5 5.6.7-4.2 3.8 1.2 5.5L12 20.5 6.8 18l1.2-5.5L3.8 8.7 9.6 8z" /></svg>
  ),
  consulting: (p) => (
    <svg {...base} {...p}><path d="M4 19V5" /><path d="M4 15l5-5 4 3 6-7" /><path d="M15 6h4v4" /></svg>
  ),
  web: (p) => (
    <svg {...base} {...p}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M3 8h18M7 21h10" /></svg>
  ),
  seo: (p) => (
    <svg {...base} {...p}><circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.5-4.5" /></svg>
  ),
  ads: (p) => (
    <svg {...base} {...p}><path d="M3 10v4h4l6 4V6l-6 4z" /><path d="M17 9a4 4 0 0 1 0 6" /></svg>
  ),
  whatsapp: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2m0 18.1c-1.53 0-3.03-.41-4.34-1.19l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.09c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 1-2z" /></svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
  ),
  arrow: (p) => (
    <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  play: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}><path d="M8 5v14l11-7z" /></svg>
  ),
  instagram: (p) => (
    <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" /></svg>
  ),
  tiktok: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...p}><path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.8v2.4c-1.2.1-2.4-.2-3.5-.8v5.9c0 3-2 5.2-4.9 5.2-2.7 0-4.7-2-4.7-4.6 0-2.7 2.1-4.6 4.8-4.5.3 0 .5 0 .8.1v2.5c-.2-.1-.5-.1-.8-.1-1.2-.1-2.3.8-2.3 2 0 1.2 1 2.1 2.2 2.1 1.3 0 2.2-1 2.2-2.5V3z" /></svg>
  ),
  check: (p) => (
    <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
  ),
  chevron: (p) => (
    <svg {...base} {...p}><path d="m6 9 6 6 6-6" /></svg>
  ),
  spark: (p) => (
    <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>
  ),
}

export default function Icon({ name, className = 'w-6 h-6' }) {
  const Cmp = icons[name]
  return Cmp ? Cmp({ className }) : null
}
