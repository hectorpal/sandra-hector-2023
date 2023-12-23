const languageData = {
    en: {
        greeting: "We are getting married!",
        // other English translations
    },
    es: {
        greeting: "¡Nos casamos!",
        // other Spanish translations
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        el.textContent = languageData[lang][el.getAttribute('data-translate')];
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Place your initial language switch logic here.
    // For example, you can set the default language based on the browser's settings:
    const defaultLang = navigator.language.startsWith('es') ? 'es' : 'en';
    switchLanguage(defaultLang);
});
