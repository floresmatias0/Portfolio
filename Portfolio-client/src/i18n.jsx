import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'aboutTitle':'About me',
      "aboutme": `My name is Matias I am a FullStack developer graduated of Henry. 
      learnt to much since start the carrer and this I was to to loved,
      the world of code is very long but I feel close to it in this moment.
      my confort place is the frontend but the relationship with the backend 
      is really good also, I like working in teams when a proyect is more 
      complete with data base,backend and frontend using an agile method 
      like SCRUM if you need contactme or you need my help go to the contact tab
      i will be very happy to help you!`,
      "title": "Hi",
      "titleTwo": "thanks for your visit",
      "subtitle": "choose a language",
      'buttonText': "Great, seeing page in English!",
      "inicio":"Home",
      "projects": "projects",
      "skills": "Skills",
      "certificates": "Certificates",
      "contact": "Contact",
      "skillTitle": "Technologies learned so far",
      "buttonCertificate": "view certificate",
      "titleProjects": "My projects",
      "buttonProjects": "Go Page",
      "nameForm": "name",
      "emailForm": "email",
      "subjectForm": "subject",
      "messageForm": "message",
      "sendForm": "Send"
    }
  },
  es: {
    translation: {
      'aboutTitle':'Sobre mi',
      "aboutme": `Mi nombre es Matias, soy FullStack developer graduado en Henry,
      aprendi mucho desde que comence la carrera y esto hizo que lo amara,
      el mundo del codigo es muy extenso pero me siento mas cerca en este momento,
      mi lugar de confort es el frontend pero mi relacion con el backend
      es muy buena tambien, me gusta trabajar en equipo cuando un proyecto es mas
      completo con base de datos, backend y frontend usando el motodo agil SCRUM
      si necesitas contactarme o necesitas mi ayuda ve a la pestaña contact 
      estare muy feliz de ayudarte!`,
      "title": "Hola ",
      "titleTwo": "gracias por tu visita",
      "subtitle": "elige un lenguaje",
      'buttonText': "Genial, veras la pagina en español!",
      "inicio": "Inicio",
      "projects": "proyectos",
      "skills": "Habilidades",
      "certificates": "Certificados",
      "contact": "Contacto",
      "skillTitle": "Tecnologias aprendidas hasta el momento",
      "buttonCertificate": "ver certificado",
      "titleProjects": "Mis proyectos",
      "buttonProjects": "Ir a la pagina",
      "nameForm": "nombre",
      "emailForm": "mail",
      "subjectForm": "asunto",
      "messageForm": "mensaje",
      "sendForm": "Enviar"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;