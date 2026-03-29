import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setMessageSent(false); };
    if (messageSent) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [messageSent]);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://formspree.io/f/xvgpralv', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setMessageSent(true);
        form.current.reset();
      } else {
        alert(t('Error al enviar el mensaje, por favor intenta de nuevo.'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t('Error al enviar el mensaje, por favor intenta de nuevo.'));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen cyber-grid pt-28 pb-16 px-4">
      <div className="max-w-lg mx-auto">
        <h1 className="section-title text-center mb-12">{t('Contacto')}</h1>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder={t('Tu email')}
            className="w-full bg-dark-800/50 border border-gray-700/50 focus:border-neon-cyan rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-neon-cyan"
            required
          />
          <textarea
            name="message"
            placeholder={t('Tu mensaje')}
            rows="5"
            className="w-full bg-dark-800/50 border border-gray-700/50 focus:border-neon-cyan rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:shadow-neon-cyan resize-none"
            required
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 text-xs tracking-[0.3em] uppercase border border-neon-cyan/60 text-neon-cyan rounded-lg hover:bg-neon-cyan/10 hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? '...' : t('Enviar')}
          </button>
        </form>
      </div>

      {messageSent && (
        <div
          className="fixed inset-0 bg-dark-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setMessageSent(false)}
        >
          <div
            className="bg-dark-800 border border-neon-cyan/30 rounded-lg p-8 max-w-sm w-full text-center shadow-neon-cyan"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-3xl text-neon-cyan mb-4">✓</div>
            <h2 className="text-sm font-bold text-neon-cyan tracking-widest mb-2">{t('¡Mensaje Enviado!')}</h2>
            <p className="text-xs text-gray-400 mb-6">{t('Tu mensaje ha sido enviado con éxito.')}</p>
            <button
              onClick={() => setMessageSent(false)}
              className="px-6 py-2 text-xs tracking-[0.2em] uppercase border border-gray-600 text-gray-400 rounded hover:border-neon-cyan hover:text-neon-cyan transition-all"
            >
              {t('Cerrar')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

