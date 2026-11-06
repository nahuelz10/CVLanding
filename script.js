const translations = {
  es: {
    navAbout:"Sobre mí",navExperience:"Experiencia",navEducation:"Educación",navContact:"Contacto",
    available:"FILMMAKER · FOTOGRAFÍA · CONTENIDO DIGITAL",heroLead:"Transformo ideas y momentos en historias visuales que conectan.",contactMe:"Contactarme",downloadCV:"Descargar CV",scroll:"DESLIZÁ PARA EXPLORAR",
    aboutLabel:"PERFIL",aboutEyebrow:"UN POCO SOBRE MÍ",aboutTitle:"Curiosidad, creatividad<br>y mirada audiovisual.",aboutText:"Soy una persona observadora, busco resolver los problemas, siempre con un pensamiento positivo y mirando hacia adelante. Me apasiona la tecnología y sus aplicaciones a la vida diaria.",
    experienceLabel:"TRAYECTORIA",experienceEyebrow:"EXPERIENCIA PROFESIONAL",experienceTitle:"Historias que tuve<br>la oportunidad de contar.",rolePress:"Coberturas / Prensa",roleCoverage:"Coberturas",muniDesc:"Inserts para su posterior edición. Stories y Reels de Instagram y TikTok.",integrarnosDesc:"Inserts y fotografías de capacitaciones.",climateDesc:"Realización de inserts y fotografías en eventos y presentación de acuerdos.",present:"Actualidad",church:"Iglesia – Ámbito Religioso",churchDesc:"Creación de contenido para redes, podcast, radio, inserts y fotografías de eventos comunitarios. Mejoramiento audiovisual.",
    educationLabel:"FORMACIÓN",educationEyebrow:"EDUCACIÓN",educationTitle:"Aprender para<br>seguir creando.",communityManager:"Capacitación Community Manager",recording:"Capacitación de Grabación y Edición",
    skillsLabel:"HERRAMIENTAS",skillsEyebrow:"HABILIDADES",skillsTitle:"Ideas + herramientas<br>+ trabajo en equipo.",teamwork:"Trabajo en equipo",problemSolving:"Resolución de problemas",creativity:"Creatividad",empathy:"Empatía",punctuality:"Puntualidad",languages:"IDIOMAS",basicEnglish:"Inglés · Básico",basicRussian:"Ruso · Básico",
    contactLabel:"HABLEMOS",contactEyebrow:"¿TENÉS UN PROYECTO EN MENTE?",contactTitle:"Hagamos algo<br><span>que valga la pena.</span>",contactText:"Estoy abierto a conversar sobre proyectos audiovisuales, fotografía y creación de contenido.",phone:"TELÉFONO",addLinkedin:"Agregar enlace de LinkedIn",linkedinHint:"El enlace de LinkedIn queda preparado para que agregues tu URL en el archivo script.js.",rights:"Todos los derechos reservados.",backTop:"VOLVER ARRIBA ↑"
  },
  en: {
    navAbout:"About",navExperience:"Experience",navEducation:"Education",navContact:"Contact",
    available:"FILMMAKING · PHOTOGRAPHY · DIGITAL CONTENT",heroLead:"I turn ideas and moments into visual stories that connect.",contactMe:"Get in touch",downloadCV:"Download resume",scroll:"SCROLL TO EXPLORE",
    aboutLabel:"PROFILE",aboutEyebrow:"A LITTLE ABOUT ME",aboutTitle:"Curiosity, creativity<br>and an audiovisual eye.",aboutText:"I am an observant person who looks for solutions, with a positive mindset and a forward-looking attitude. I am passionate about technology and its applications in everyday life.",
    experienceLabel:"JOURNEY",experienceEyebrow:"PROFESSIONAL EXPERIENCE",experienceTitle:"Stories I have had<br>the opportunity to tell.",rolePress:"Media coverage / Press",roleCoverage:"Media coverage",muniDesc:"Video inserts for post-production. Instagram and TikTok Stories and Reels.",integrarnosDesc:"Video inserts and photography for training sessions.",climateDesc:"Video inserts and event photography, including agreement presentations.",present:"Present",church:"Church – Religious Community",churchDesc:"Social media content creation, podcast, radio, video inserts and photography for community events. Audiovisual improvement.",
    educationLabel:"EDUCATION",educationEyebrow:"EDUCATION",educationTitle:"Learning to<br>keep creating.",communityManager:"Community Manager Training",recording:"Filming and Video Editing Training",
    skillsLabel:"TOOLKIT",skillsEyebrow:"SKILLS",skillsTitle:"Ideas + tools<br>+ teamwork.",teamwork:"Teamwork",problemSolving:"Problem solving",creativity:"Creativity",empathy:"Empathy",punctuality:"Punctuality",languages:"LANGUAGES",basicEnglish:"English · Basic",basicRussian:"Russian · Basic",
    contactLabel:"LET'S TALK",contactEyebrow:"HAVE A PROJECT IN MIND?",contactTitle:"Let's make something<br><span>worthwhile.</span>",contactText:"I am open to discussing audiovisual projects, photography and content creation.",phone:"PHONE",addLinkedin:"Add your LinkedIn URL",linkedinHint:"Your LinkedIn link is ready to be added in the script.js file.",rights:"All rights reserved.",backTop:"BACK TO TOP ↑"
  }
};

// Personal links: paste your LinkedIn profile URL between the quotes.
// Example: const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile/";
const LINKEDIN_URL = "";
let currentLanguage = "es";

const languageButton = document.getElementById("languageBtn");
const themeButton = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");
const nav = document.getElementById("nav");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageButton.textContent = language === "es" ? "EN" : "ES";
}
languageButton.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
function updateThemeIcon() {
  themeIcon.textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";
}
updateThemeIcon();
themeButton.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  updateThemeIcon();
});

document.getElementById("menuBtn").addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const linkedin = document.getElementById("linkedinLink");
if (LINKEDIN_URL) linkedin.href = LINKEDIN_URL;
else linkedin.addEventListener("click", event => {
  event.preventDefault();
  alert(currentLanguage === "es" ? "Agregá tu URL de LinkedIn en la constante LINKEDIN_URL de script.js." : "Add your LinkedIn URL to the LINKEDIN_URL constant in script.js.");
});
