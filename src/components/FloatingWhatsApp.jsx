import { motion } from 'framer-motion'
import Icon from './Icons'
import { CONTACT } from '../content'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-orange py-3 pl-3 pr-5 font-bold text-ink-950 shadow-glow-lg"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/15">
        <Icon name="whatsapp" className="h-6 w-6" />
      </span>
      <span className="hidden text-sm sm:block">WhatsApp</span>
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-white/90" />
      </span>
    </motion.a>
  )
}
