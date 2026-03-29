// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Audio": "Audio",
        "Colaboraciones": "Collaborations",
        "Galería": "Gallery",
        "Contacto": "Contact",
        "Tu email": "Your email",
        "Tu mensaje": "Your message",
        "Enviar": "Send",
        "¡Mensaje Enviado!": "Message Sent!",
        "Tu mensaje ha sido enviado con éxito.": "Your message has been successfully sent.",
        "Cerrar": "Close",
        "Derechos de autor": "All rights reserved.",
        "CONSUME": "CONSUME",
      }
    },
    es: {
      translation: {
        "Audio": "Audio",
        "Colaboraciones": "Colaboraciones",
        "Galería": "Galería",
        "Contacto": "Contacto",
        "Tu email": "Tu email",
        "Tu mensaje": "Tu mensaje",
        "Enviar": "Enviar",
        "¡Mensaje Enviado!": "¡Mensaje Enviado!",
        "Tu mensaje ha sido enviado con éxito.": "Tu mensaje ha sido enviado con éxito.",
        "Cerrar": "Cerrar",
        "Derechos de autor": "Todos los derechos reservados.",
        "CONSUME": "CONSUME",
      }
    }
  },
  lng: "es", // Idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
