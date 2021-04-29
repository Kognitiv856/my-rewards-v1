
const translatableText = document.querySelectorAll('.translatable');
const alignmentText = document.querySelectorAll('.alignment-text');
const languageToggles = document.querySelectorAll('.toggle');

let switcher = false;





function changeLanguage(e) {

    switcher = !switcher;

    translatableText.forEach(textItem => {
        
        const returnLang = languages.find(function(langItem) {
            return langItem.id === textItem.id;
        })

        if (switcher) {
            languageToggles.forEach(toggle => toggle.textContent = 'English');
            textItem.innerHTML = returnLang.arabicText;
            addAlignment();
        } else {
            languageToggles.forEach(toggle => toggle.textContent = 'Arabic');
            textItem.innerHTML = returnLang.englishText;
            removeAlignment();
        }

    })

}


function removeAlignment() {
    alignmentText.forEach(text => text.classList.remove('align-right'));
}

function addAlignment() {
    alignmentText.forEach(text => text.classList.add('align-right'));
}



languageToggles.forEach(toggle => toggle.addEventListener('click', changeLanguage));