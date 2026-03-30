// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Inicio": "Home",
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
        "consume_desc": "Argentine cyberpunk sci-fi short film (2020). Directed by Bruno Gradaschi, produced by Alobotomía in Lanús. In a dystopian future, workers live confined to their stations, reduced to numbers in an alienating system. Chiptune soundtrack by Replicant. Selected at LA Shorts International Film Festival, California.",
        "about_bio": "Replicant is an electronic music project by Jesús Mansilla, active since 2016 from Paraná, Entre Ríos, Argentina. Its sound — dark, experimental, and deeply rooted in digital aesthetics — emerges from the intersection of repurposed video game hardware such as the Nintendo Game Boy and PSP with contemporary digital audio production tools. The project has been part of the chiptune and demoscene circuit, performing at events like Blip Blop Party and Flash Party, among others.",
        "Prensa": "Press",
        "Podcast": "Podcast",
        "Remix": "Remix",
        "Canal": "Channel",
        "prensa_1": "Recycled music — Blipblop Party chronicle",
        "prensa_2": "Sounds from deep within the digital city",
        "podcast_1": "AnacroGames Tape 16 — VGMs & local chiptune",
        "remix_1": "Viamo (Replicant Remix) — Dork Collective",
        "canal_1": "Replicant on YouTube",
        "Entrar": "Enter"
      }
    },
    es: {
      translation: {
        "Inicio": "Inicio",
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
        "consume_desc": "Cortometraje argentino de ciencia ficción cyberpunk (2020). Dirigido por Bruno Gradaschi, producido por Alobotomía en Lanús. En un futuro distópico, los trabajadores viven confinados en sus puestos, reducidos a simples números dentro de un sistema alienante. Música chiptune a cargo de Replicant. Selección oficial del LA Shorts International Film Festival, California.",
        "about_bio": "Replicant es un proyecto de música electrónica de Jesús Mansilla, activo desde 2016 con base en Paraná, Entre Ríos. Su sonido — oscuro, experimental y de marcada estética digital — nace de la intersección entre hardware de consolas de videojuegos reutilizado, como la Nintendo Game Boy y PSP, y herramientas contemporáneas de producción de audio digital. El proyecto forma parte del circuito chiptune y demoscene, habiendo participado en eventos como las Blip Blop Party, Flash Party, entre otros.",
        "Prensa": "Prensa",
        "Podcast": "Podcast",
        "Remix": "Remix",
        "Canal": "Canal",
        "prensa_1": "Música reciclada — Crónica Blipblop Party",
        "prensa_2": "Sonidos desde lo profundo de la urbe digital",
        "podcast_1": "AnacroGames Tape 16 — VGMs y chiptune local",
        "remix_1": "Viamo (Replicant Remix) — Dork Collective",
        "canal_1": "Replicant en YouTube",
        "Entrar": "Entrar"
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
