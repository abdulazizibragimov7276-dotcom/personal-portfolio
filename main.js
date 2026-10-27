

// ====================
// HOME COUNTER
// ====================

const counterNumber = document.querySelector('.counter p')
const minusButton = document.querySelector('.counter-buttons button:nth-child(1)')
const resetButton = document.querySelector('.counter-buttons button:nth-child(2)')
const plusButton = document.querySelector('.counter-buttons button:nth-child(3)')

let count = 0

if (counterNumber && minusButton && resetButton && plusButton) {
  plusButton.addEventListener('click', () => {
    count++
    counterNumber.textContent = count
  })

  minusButton.addEventListener('click', () => {
    count--
    counterNumber.textContent = count
  })

  resetButton.addEventListener('click', () => {
    count = 0
    counterNumber.textContent = count
  })
}


// ====================
// ABOUT CHARACTER COUNTER
// ====================

const messageInput = document.querySelector('.counter-box textarea')
const characterCount = document.querySelector('.counter-result span:last-child')

if (messageInput && characterCount) {
  messageInput.addEventListener('input', () => {
    characterCount.textContent = messageInput.value.length
  })
}
// ====================
// CONTACT FORM
// ====================

const nameInput = document.querySelector('#ism')
const emailInput = document.querySelector('#email')
const messageInputContact = document.querySelector('#matin')
const sendButton = document.querySelector('.conact button')

if (nameInput && emailInput && messageInputContact && sendButton) {
  sendButton.addEventListener('click', () => {
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const message = messageInputContact.value.trim()

    if (name === '' || email === '' || message === '') {
      alert('Iltimos, barcha maydonlarni to‘ldiring!')
      return
    }

    if (!email.includes('@')) {
      alert('Email manzilingizni to‘g‘ri kiriting!')
      return
    }

    alert(`Rahmat, ${name}! Xabaringiz yuborildi.`)

    nameInput.value = ''
    emailInput.value = ''
    messageInputContact.value = ''
  })
}