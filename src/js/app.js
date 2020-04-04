// Dependencies
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * Init tippy
 */
tippy('[data-tippy-content]', {
  animation: 'scale'
})

/**
 * Hot module
 */
if (module.hot) {
  module.hot.accept()
}

/**
 * Language switcher
 */
i18next.use(LanguageDetector).init(
  {
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {}
      },
      es: {
        translation: {}
      }
    }
  },
  function (err, t) {}
)

const LANGUAGE_SWITCHER = document.querySelector('#languageSwitcher')
const ENGLISH_BUTTON = document.querySelector('#english')
const SPANISH_BUTTON = document.querySelector('#spanish')

ENGLISH_BUTTON.addEventListener('click', (e) => {
  e.preventDefault()

  localStorage.setItem('i18nextLng', 'en')
  window.location.reload()
})

SPANISH_BUTTON.addEventListener('click', (e) => {
  e.preventDefault()

  localStorage.setItem('i18nextLng', 'es')
  window.location.reload()
})

if (localStorage.getItem('i18nextLng') === 'en') {
  LANGUAGE_SWITCHER.innerHTML = `<span class="w-8 h-5 mr-2 flag-icon flag-icon-us"></span> English`
} else if (
  localStorage.getItem('i18nextLng') === 'es' ||
  localStorage.getItem('i18nextLng') === 'es-ES'
) {
  LANGUAGE_SWITCHER.innerHTML = `<span class="w-8 h-5 mr-2 flag-icon flag-icon-es"></span> Español`
}
