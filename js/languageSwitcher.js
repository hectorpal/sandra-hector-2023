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
    },
    de: {
        title_wedding: "Hochzeit & Empfang",
        title_direction: "Richtungsbilder",
        title_venue: "Veranstaltungsort",
        title_rsvp: "RSVP",
        section_get_married: "Wir heiraten!",
        event_date: "Das Datum ist der 18. Mai '24 und<br>wir möchten, dass du ein Teil davon bist.",
        section_event: "Veranstaltungen",
        wedding_event: "Hochzeit",
        wedding_details: "Details später.",
        reception_event: "Empfang",
        reception_details: "Details später.",
        section_getting_there: "Wie komme ich dorthin?",
        getting_there_comment: "Es ist viel einfacher als du denkst!",
        show_info: "Info anzeigen",
        section_thank_you: "Danke!",
        thank_you_content: "Wir freuen uns, dass du an unserem großen Tag bei uns bist.",
        section_rsvp: "Worauf wartest du?",
        rsvp_details: "Wir würden uns freuen, wenn du dich vor dem 15. Januar '24 anmelden könntest.<br>Erwachsene Kinder? Vielleicht zählen sie als Erwachsene.<br>Das Essen der Kinder könnte anders sein.",
        rsvp_button: "Ja, das bin ich!",
        email_placeholder: "Deine E-Mail",
        name_placeholder: "Dein Name",
        extra_adults_placeholder: "Extra Erwachsene",
        kids_placeholder: "Kinder",
        invite_code_placeholder: "Einladungscode",
        show_map: "Karte anzeigen"
    },
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
    document.querySelectorAll('#switchToEn, #switchToEs, #switchToDe').forEach(el => {
        el.classList.remove('active-lang');
    });

    let activeElementId;
    switch (lang) {
        case 'en':
            activeElementId = 'switchToEn';
            break;
        case 'es':
            activeElementId = 'switchToEs';
            break;
        case 'de':
            activeElementId = 'switchToDe';
            break;
        default:
            activeElementId = 'switchToEn';
    }
    document.getElementById(activeElementId).classList.add('active-lang');
}


document.addEventListener('DOMContentLoaded', function() {
    // For example, you can set the default language based on the browser's settings:
    // Set default language based on browser language among these three: en, es, de
    let defaultLang;
    switch (navigator.language.slice(0, 2)) {
        case 'en':
            defaultLang = 'en';
            break;
        case 'es':
            defaultLang = 'es';
            break;
        case 'de':
            defaultLang = 'de';
            break;
        default:
            defaultLang = 'en'; // default to 'en' if the language is not one of the specified
    }
    switchLanguage(defaultLang);

    // Add event listener for English language switch to all elements with id 'switchToEn'
    document.querySelectorAll('#switchToEn').forEach(el => {
        el.addEventListener('click', function() {
            switchLanguage('en');
        })
    });

    // Add event listener for Spanish language switch to all elements with id 'switchToEs'
    document.querySelectorAll('#switchToEs').forEach(el => {
        el.addEventListener('click', function() {
            switchLanguage('es');
        })
    });

    // Add event listener for German language switch to all elements with id 'switchToDe'
    document.querySelectorAll('#switchToDe').forEach(el => {
        el.addEventListener('click', function() {
            switchLanguage('de');
        })
    });

});
