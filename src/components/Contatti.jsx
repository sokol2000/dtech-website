import { useState } from 'react'
import { Reveal, WordReveal } from './motion'
import Icon from './Icons'
import { CONTACT } from '../content'

const waLink = `https://wa.me/${CONTACT.whatsapp}`

const INFO = [
  { icon: 'mail', label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: 'phone', label: 'Telefono', value: CONTACT.phoneDisplay, href: `tel:+${CONTACT.phoneRaw}` },
  { icon: 'pin', label: 'Sede', value: CONTACT.address, href: null },
]

export default function Contatti() {
  const [form, setForm] = useState({ nome: '', email: '', messaggio: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Ciao D-Tech! Sono ${form.nome || '—'} (${form.email || 'email non indicata'}).%0A%0A${
      form.messaggio || 'Vorrei parlare di un progetto.'
    }`
    window.open(`${waLink}?text=${text}`, '_blank', 'noopener')
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-orange'

  return (
    <section id="contatti" className="relative py-12 md:py-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[80vh] -translate-x-1/2 glow-radial opacity-50" />
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="kicker justify-center">
              Contatti
            </span>
          </Reveal>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <WordReveal text="Pronto a smettere di **giocare**?" />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
              Compila il modulo: prepariamo il messaggio e lo invii direttamente su WhatsApp.
              Risposta entro 24h lavorative.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-5">
          {/* form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/60">Nome</label>
                  <input
                    className={field}
                    placeholder="Il tuo nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-white/60">Email</label>
                  <input
                    type="email"
                    className={field}
                    placeholder="La tua email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-white/60">
                  Raccontaci qual è il tuo problema n.1 oggi
                </label>
                <textarea
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="Scrivi qui…"
                  value={form.messaggio}
                  onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange py-4 text-base font-bold text-ink-950 shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Invia richiesta su WhatsApp
              </button>
            </form>
          </Reveal>

          {/* info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Reveal delay={0.1}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-orange to-orange-600 p-5 text-ink-950 transition-transform hover:scale-[1.02]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950/15">
                  <Icon name="whatsapp" className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-bold">WhatsApp</span>
                  <span className="text-sm opacity-80">Scrivici per una risposta immediata</span>
                </span>
              </a>
            </Reveal>
            {INFO.map((info, i) => {
              const inner = (
                <div className="card flex items-center gap-4 p-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <Icon name={info.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-white/40">
                      {info.label}
                    </span>
                    <span className="font-semibold text-white">{info.value}</span>
                  </span>
                </div>
              )
              return (
                <Reveal key={info.label} delay={0.15 + i * 0.08}>
                  {info.href ? (
                    <a href={info.href} className="block transition-transform hover:scale-[1.01]">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
