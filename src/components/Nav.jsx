import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'
import Icon from './Icons'
import { NAV_LINKS, CONTACT, SOCIALS } from '../content'

const waLink = `https://wa.me/${CONTACT.whatsapp}`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav className="container-x relative flex h-[4.5rem] items-center justify-between">
          {/* Logo a sinistra */}
          <a href="#top" className="flex items-center gap-2.5 text-white transition-transform hover:scale-[1.03]">
            <Logo variant="mark" className="h-8 w-auto text-white" />
            <span className="text-lg font-extrabold tracking-tight">D-Tech</span>
          </a>

          {/* Menu centrato orizzontalmente in una pill "liquid glass" */}
          <ul className="glass-pill absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-full px-2 py-1.5 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social a destra in una pill glass gemella + hamburger su mobile */}
          <div className="flex items-center gap-3">
            <div
              data-social-pill
              className="glass-pill hidden items-center gap-1 rounded-full px-1.5 py-1.5 md:flex"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-orange"
                >
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <button
              aria-label="Apri menu"
              onClick={() => setOpen(true)}
              className="glass-pill flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-white" />
                <span className="block h-0.5 w-5 bg-white" />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex h-[4.5rem] items-center justify-between">
              <span className="text-lg font-extrabold text-white">D-Tech</span>
              <button
                aria-label="Chiudi menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-2xl text-white"
              >
                ×
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="container-x mt-8 flex flex-col gap-2"
            >
              {NAV_LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/10 py-4 text-3xl font-bold text-white/90"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-x mt-8">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 text-lg font-bold text-ink-950"
              >
                <Icon name="whatsapp" className="h-5 w-5" /> Scrivici su WhatsApp
              </a>
              <div className="mt-6 flex items-center gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
