// data-translate=""
const languageData = {
    en: {
        title_wedding: "Wedding & Reception",
        title_direction: "Directions Pics",
        title_venue: "Venue",
        title_rsvp: "RSVP",
        section_get_married: "We are getting married!",
        event_date: "The date is 18<sup>th</sup> of May '24 and<br>we would like you to be a part of it.",
        section_event: "Events",
        wedding_event: "Wedding",
        wedding_details: "Details later.",
        reception_event: "Reception",
        reception_details: "Details later.",
        section_getting_there: "How do I get there?",
        getting_there_comment: "It's way easier than you think!",
        show_info: "Show Info",
        section_thank_you: "Thank you!",
        thank_you_content: "We are glad to see you join us on our big day.",
        section_rsvp: "What are you waiting for?",
        rsvp_details: "We would greatly appreciate if you could RSVP before 15th of January '24.<br>Grown up kids? Perhaps count them as adults.<br>The meal of the kids might be different.",
        rsvp_button: "Yes, that's me!",
        email_placeholder: "Your email",
        name_placeholder: "Your name",
        extra_adults_placeholder: "Extra adults",
        kids_placeholder: "Kids",
        invite_code_placeholder: "Invite code",
        show_map: "Show map"
    },
    es: {
        title_wedding: "Boda & Recepción",
        title_direction: "Fotos de Dirección",
        title_venue: "Locación",
        title_rsvp: "Confirma",
        section_get_married: "¡Nos casamos!",
        event_date: "La fecha es el 18 de Mayo del '24 y<br>nos gustaría que fueras parte de ello.",
        section_event: "Eventos",
        wedding_event: "Boda",
        wedding_details: "Detalles luego.",
        reception_event: "Recepción",
        reception_details: "Detalles luego.",
        section_getting_there: "¿Cómo llego?",
        getting_there_comment: "¡Es más fácil de lo que piensas!",
        show_info: "Mostrar Información",
        section_thank_you: "¡Gracias!",
        thank_you_content: "Nos alegra que nos acompañes en nuestro gran día.",
        section_rsvp: "¿Qué esperas?",
        rsvp_details: "Agradeceríamos que confirmes tu asistencia antes del 15 de Enero '24.<br>¿Niños grandes? Quizás contarlos como adultos.<br>La comida de los niños podría ser diferente.",
        rsvp_button: "¡Sí, ese soy yo!",
        email_placeholder: "Tu email",
        name_placeholder: "Tu nombre",
        extra_adults_placeholder: "Adultos extra",
        kids_placeholder: "Niños",
        invite_code_placeholder: "Código de invitación",
        show_map: "Mostrar mapa"
    }
};

function switchLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        // el.textContent = ...
        const key = el.getAttribute('data-translate');
        if (el.tagName.toLowerCase() === 'input') {
            el.placeholder = languageData[lang][key];
        } else {
            el.innerHTML = languageData[lang][key];
        }
    });

    // Update active state styling
    document.querySelectorAll('#switchToEn, #switchToEs').forEach(el => {
        el.classList.remove('active-lang');
    });

    const activeElementId = lang === 'en' ? 'switchToEn' : 'switchToEs';
    document.getElementById(activeElementId).classList.add('active-lang');
}


document.addEventListener('DOMContentLoaded', function() {
    // Place your initial language switch logic here.
    // For example, you can set the default language based on the browser's settings:
    const defaultLang = navigator.language.startsWith('es') ? 'es' : 'en';
    switchLanguage(defaultLang);

    // Add event listener for English language switch
    document.getElementById('switchToEn').addEventListener('click', function() {
        switchLanguage('en');
    });

    // Add event listener for Spanish language switch
    document.getElementById('switchToEs').addEventListener('click', function() {
        switchLanguage('es');
    });
});
