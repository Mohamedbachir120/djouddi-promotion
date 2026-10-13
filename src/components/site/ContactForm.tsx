import { useState, type FormEvent } from 'react';
import { company, residences } from '../../data/site';
import { Arrow } from './primitives';

/*
 * The site has no backend, so a submitted message is handed to the visitor's
 * mail app as a pre-filled email to the company address. Nothing is sent or
 * stored by the page itself.
 */
const openMail = (subject: string, lines: (string | false | undefined)[]) => {
  const body = lines.filter(Boolean).join('\n');
  window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

type Errors = Partial<Record<'name' | 'contact' | 'message', string>>;

export function ContactForm({ residenceId = '' }: { residenceId?: string }) {
  const [residence, setResidence] = useState(residenceId);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const next: Errors = {};
    if (!name) next.name = 'Indiquez votre nom.';
    if (!email && !phone) next.contact = 'Indiquez un email ou un numéro de téléphone.';
    if (!message) next.message = 'Écrivez votre message.';
    setErrors(next);
    if (Object.keys(next).length) return;

    const site = residences.find((r) => r.id === residence);
    openMail(site ? `Demande d'information – ${site.name}` : "Demande d'information", [
      message,
      '',
      `Nom : ${name}`,
      email && `Email : ${email}`,
      phone && `Téléphone : ${phone}`,
      site && `Résidence : ${site.name}`,
    ]);
    setSent(true);
  };

  return (
    <form className="dp-form" onSubmit={onSubmit} noValidate>
      <div className="dp-field">
        <label htmlFor="cf-name">Nom *</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Votre nom"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'cf-name-err' : undefined}
        />
        {errors.name && (
          <span id="cf-name-err" className="dp-field__error">
            {errors.name}
          </span>
        )}
      </div>
      <div className="dp-form__row">
        <div className="dp-field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="votre.email@exemple.com"
            aria-invalid={!!errors.contact}
            aria-describedby={errors.contact ? 'cf-contact-err' : undefined}
          />
        </div>
        <div className="dp-field">
          <label htmlFor="cf-phone">Téléphone</label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="05XX XX XX XX"
            aria-invalid={!!errors.contact}
            aria-describedby={errors.contact ? 'cf-contact-err' : undefined}
          />
        </div>
      </div>
      {errors.contact && (
        <span id="cf-contact-err" className="dp-field__error" style={{ marginTop: -16 }}>
          {errors.contact}
        </span>
      )}
      <div className="dp-field">
        <label htmlFor="cf-residence">Résidence</label>
        <select id="cf-residence" name="residence" value={residence} onChange={(e) => setResidence(e.target.value)}>
          <option value="">Toutes nos résidences</option>
          {residences.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name}
            </option>
          ))}
        </select>
      </div>
      <div className="dp-field">
        <label htmlFor="cf-message">Message *</label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder="Votre message, ou le créneau souhaité pour une visite…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'cf-message-err' : undefined}
        />
        {errors.message && (
          <span id="cf-message-err" className="dp-field__error">
            {errors.message}
          </span>
        )}
      </div>
      <div>
        <button type="submit" className="dp-btn dp-btn--primary">
          Envoyer
          <Arrow />
        </button>
      </div>
      <p className="dp-form__note" role="status" aria-live="polite">
        {sent ? (
          <span className="dp-form__status" style={{ display: 'block' }}>
            Votre messagerie s'ouvre avec le message prêt à être envoyé à {company.email}. Si rien ne s'ouvre,
            écrivez-nous directement à cette adresse ou appelez le {company.phones[0]}.
          </span>
        ) : (
          <>L'envoi ouvre votre messagerie avec votre message pré-rempli, adressé à {company.email}.</>
        )}
      </p>
    </form>
  );
}

/** Compact footer variant: email + message, same mail hand-off. */
export function QuickContactForm() {
  const [error, setError] = useState('');
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!message) {
      setError('Écrivez votre message.');
      return;
    }
    setError('');
    openMail('Contact rapide', [message, '', email && `Email : ${email}`]);
  };
  return (
    <form className="dp-form dp-on-dark" style={{ gap: 20 }} onSubmit={onSubmit} noValidate>
      <div className="dp-field">
        <label htmlFor="qc-email">Votre email</label>
        <input id="qc-email" name="email" type="email" autoComplete="email" placeholder="votre.email@exemple.com" />
      </div>
      <div className="dp-field">
        <label htmlFor="qc-message">Votre message</label>
        <textarea
          id="qc-message"
          name="message"
          rows={2}
          style={{ minHeight: 72 }}
          placeholder="Bonjour…"
          aria-invalid={!!error}
        />
        {error && <span className="dp-field__error">{error}</span>}
      </div>
      <div>
        <button type="submit" className="dp-btn dp-btn--primary dp-btn--sm">
          Envoyer
          <Arrow size={16} />
        </button>
      </div>
    </form>
  );
}
