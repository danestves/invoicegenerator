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
        translation: {
          invoiceTitle: 'Invoice',
          invoiceNumber: 'Invoice Nº',
          invoiceDate: 'Invoice Date',
          invoiceDue: 'Due Date',
          invoiceBill: 'Bill/Ship To:',
          invoiceBillCompanyName: 'Billing company name',
          invoiceBillCompanyAddress: 'Billing company address',
          invoiceAdditionalInfo: 'Additional info',
          invoiceFrom: 'From:',
          invoiceFromCompanyName: 'Your company name',
          invoiceFromCompanyAddress: 'Your company address',
          invoiceDescription: 'Description',
          invoiceUnits: 'Units',
          invoiceUnitPrice: 'Unit Price',
          invoiceAmmount: 'Ammount',
          invoiceAddButton: 'Add Invoice Items',
          invoiceAmmountDue: 'Ammount due',
          invoiceModalTitle: 'Fill your services',
          invoiceCancelModal: 'Cancel',
          invoiceAddItemModal: 'Add Item'
        }
      },
      es: {
        translation: {
          invoiceTitle: 'Factura',
          invoiceNumber: 'Nº de Factura',
          invoiceDate: 'Fecha de Factura',
          invoiceDue: 'Fecha de Venc.',
          invoiceBill: 'Factura/Envío a:',
          invoiceBillCompanyName: 'Nombre de la empresa de facturación',
          invoiceBillCompanyAddress: 'Dirección de la empresa de facturación',
          invoiceAdditionalInfo: 'Información adicional',
          invoiceFrom: 'De:',
          invoiceFromCompanyName: 'El nombre de tu compañía',
          invoiceFromCompanyAddress: 'Dirección de su empresa',
          invoiceDescription: 'Descripción',
          invoiceUnits: 'Unidades',
          invoiceUnitPrice: 'Precio por Unidad',
          invoiceAmmount: 'Monto',
          invoiceAddButton: 'Añadir elementos de factura',
          invoiceAmmountDue: 'Monto adeudado',
          invoiceModalTitle: 'Llena tus servicios',
          invoiceCancelModal: 'Cancelar',
          invoiceAddItemModal: 'Añadir Elemento'
        }
      }
    }
  },
  function (err, t) {
    // HTML elements
    document.querySelector('[key-lang="invoiceTitle"]').innerHTML = t(
      'invoiceTitle'
    )
    document.querySelector('[key-lang="invoiceNumber"]').innerHTML = t(
      'invoiceNumber'
    )
    document.querySelector('[key-lang="invoiceDate"]').innerHTML = t(
      'invoiceDate'
    )
    document.querySelector('[key-lang="invoiceDue"]').innerHTML = t(
      'invoiceDue'
    )
    document.querySelector('[key-lang="invoiceBill"]').innerHTML = t(
      'invoiceBill'
    )
    document
      .querySelector('[key-lang="invoiceBillCompanyName"]')
      .setAttribute('placeholder', t('invoiceBillCompanyName'))
    document
      .querySelector('[key-lang="invoiceBillCompanyAddress"]')
      .setAttribute('placeholder', t('invoiceBillCompanyAddress'))
    document.querySelector('[key-lang="invoiceFrom"]').innerHTML = t(
      'invoiceFrom'
    )
    document
      .querySelector('[key-lang="invoiceFromCompanyName"]')
      .setAttribute('placeholder', t('invoiceFromCompanyName'))
    document
      .querySelector('[key-lang="invoiceFromCompanyAddress"]')
      .setAttribute('placeholder', t('invoiceFromCompanyAddress'))
    document.querySelector('[key-lang="invoiceDescription"]').innerHTML = t(
      'invoiceDescription'
    )

    document.querySelector('[key-lang="invoiceAddButton"]').innerHTML = t(
      'invoiceAddButton'
    )
    document.querySelector('[key-lang="invoiceAmmountDue"]').innerHTML = t(
      'invoiceAmmountDue'
    )
    document.querySelector('[key-lang="invoiceModalTitle"]').innerHTML = t(
      'invoiceModalTitle'
    )
    document.querySelector('[key-lang="invoiceCancelModal"]').innerHTML = t(
      'invoiceCancelModal'
    )
    document.querySelector('[key-lang="invoiceAddItemModal"]').innerHTML = t(
      'invoiceAddItemModal'
    )

    // HTML Elements For Loop
    document
      .querySelectorAll('[key-lang="invoiceAdditionalInfo"]')
      .forEach(item => {
        item.setAttribute('placeholder', t('invoiceAdditionalInfo'))
      })

    document
      .querySelectorAll('[key-lang="invoiceDescription"]')
      .forEach(item => {
        item.innerHTML = t('invoiceDescription')
      })

    document.querySelectorAll('[key-lang="invoiceUnits"]').forEach(item => {
      item.innerHTML = t('invoiceUnits')
    })

    document.querySelectorAll('[key-lang="invoiceUnitPrice"]').forEach(item => {
      item.innerHTML = t('invoiceUnitPrice')
    })

    document.querySelectorAll('[key-lang="invoiceAmmount"]').forEach(item => {
      item.innerHTML = t('invoiceAmmount')
    })
  }
)

const LANGUAGE_SWITCHER = document.querySelector('#languageSwitcher')
const ENGLISH_BUTTON = document.querySelector('#english')
const SPANISH_BUTTON = document.querySelector('#spanish')

ENGLISH_BUTTON.addEventListener('click', e => {
  e.preventDefault()

  localStorage.setItem('i18nextLng', 'en')
  window.location.reload()
})

SPANISH_BUTTON.addEventListener('click', e => {
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
