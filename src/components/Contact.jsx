import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setMessageSent(false); };
    if (messageSent) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [messageSent]);

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://formspree.io/f/xvgpralv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
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
    }
  };

  return (
    <div className="container mx-auto px-4 pt-20 text-center">
      <h1 className="text-xl my-1 mt-20 mb-10 text-gray-300">{t('Contacto')}</h1>
      
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-xl mx-auto">
        <input
          type="email"
          name="email"
          placeholder={t('Tu email')}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-violet focus:border-violet text-black"
          required
        />
        <textarea
          name="message"
          placeholder={t('Tu mensaje')}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-violet focus:border-violet text-black"
          rows="4"
          required
        />
        <button type="submit" className="px-4 py-2 bg-violet text-white rounded shadow hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-violet focus:ring-opacity-50">
          {t('Enviar')}
        </button>
      </form>

      {messageSent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-violet mb-4">{t('¡Mensaje Enviado!')}</h2>
            <p className="text-gray-700 mb-4">{t('Tu mensaje ha sido enviado con éxito.')}</p>
            <button
              onClick={() => setMessageSent(false)}
              className="px-4 py-2 bg-violet text-white rounded shadow hover:bg-violet-dark focus:outline-none focus:ring-2 focus:ring-violet focus:ring-opacity-50"
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

