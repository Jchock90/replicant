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
        "Sobre": "About",
        "Tu email": "Your email",
        "Tu mensaje": "Your message",
        "Enviar": "Send",
        "¡Mensaje Enviado!": "Message Sent!",
        "Tu mensaje ha sido enviado con éxito.": "Your message has been successfully sent.",
        "Cerrar": "Close",
        "Derechos de autor": "All rights reserved.",
        "CONSUME": "CONSUME",
        "about_bio": "Replicant is a musical project by Jesús Mansilla, born in 2016 in Paraná, Entre Ríos, Argentina. Its dark, experimental, and electronic sound comes from the use of video game consoles like the Nintendo Game Boy and PSP, combined with modern software such as Ableton Live. The project has participated in chiptune and demoscene events including the Blip Blop Party, Flash Party, among others.",
        "Prensa": "Press",
        "Podcast": "Podcast",
        "Remix": "Remix",
        "Canal": "Channel",
        "prensa_1": "Recycled music — Blipblop Party chronicle",
        "prensa_2": "Sounds from deep within the digital city",
        "podcast_1": "AnacroGames Tape 16 — VGMs & local chiptune",
        "remix_1": "Viamo (Replicant Remix) — Dork Collective",
        "canal_1": "Replicant on YouTube"
      }
    },
    es: {
      translation: {
        "Audio": "Audio",
        "Colaboraciones": "Colaboraciones",
        "Galería": "Galería",
        "Contacto": "Contacto",
        "Sobre": "Sobre",
        "Tu email": "Tu email",
        "Tu mensaje": "Tu mensaje",
        "Enviar": "Enviar",
        "¡Mensaje Enviado!": "¡Mensaje Enviado!",
        "Tu mensaje ha sido enviado con éxito.": "Tu mensaje ha sido enviado con éxito.",
        "Cerrar": "Cerrar",
        "Derechos de autor": "Todos los derechos reservados.",
        "CONSUME": "CONSUME",
        "about_bio": "Replicant es un proyecto musical de Jesús Mansilla que surgió en 2016 con base en Paraná, Entre Ríos. El sonido oscuro, experimental y electrónico que lo caracteriza proviene del uso de consolas de videojuegos como la Nintendo Game Boy y PSP, combinado con software actual como Ableton Live. Ha participado en eventos chiptune y de la demoscene como las Blip Blop Party, Flash Party, entre otros.",
        "Prensa": "Prensa",
        "Podcast": "Podcast",
        "Remix": "Remix",
        "Canal": "Canal",
        "prensa_1": "Música reciclada — Crónica Blipblop Party",
        "prensa_2": "Sonidos desde lo profundo de la urbe digital",
        "podcast_1": "AnacroGames Tape 16 — VGMs y chiptune local",
        "remix_1": "Viamo (Replicant Remix) — Dork Collective",
        "canal_1": "Replicant en YouTube"
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
