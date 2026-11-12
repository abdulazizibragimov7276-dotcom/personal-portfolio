// ====================
// HOME COUNTER
// ====================

const counterNumber = document.querySelector('.counter p')
const minusButton = document.querySelector('.counter-buttons button:nth-child(1)')
const resetButton = document.querySelector('.counter-buttons button:nth-child(2)')
const plusButton = document.querySelector('.counter-buttons button:nth-child(3)')

let count = 0

function updateCounter() {
  counterNumber.textContent = count
  minusButton.disabled = count <= 0
  resetButton.disabled = count === 0
}

if (counterNumber && minusButton && resetButton && plusButton) {
  plusButton.addEventListener('click', () => {
    count++
    updateCounter()
  })

  minusButton.addEventListener('click', () => {
    if (count > 0) {
      count--
      updateCounter()
    }
  })

  resetButton.addEventListener('click', () => {
    count = 0
    updateCounter()
  })

  updateCounter() // boshlang'ich disabled holati
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

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/

if (nameInput && emailInput && messageInputContact && sendButton) {
  sendButton.addEventListener('click', () => {
    const name = nameInput.value.trim()
    const email = emailInput.value.trim()
    const message = messageInputContact.value.trim()

    if (name === '' || email === '' || message === '') {
      alert('Iltimos, barcha maydonlarni to‘ldiring!')
      return
    }

    if (name.length < 2) {
      alert('Ism kamida 2 ta harfdan iborat bo‘lishi kerak!')
      return
    }

    if (!emailPattern.test(email)) {
      alert('Email manzilingizni to‘g‘ri kiriting! Masalan: ism@gmail.com')
      return
    }

    if (message.length < 10) {
      alert('Xabar kamida 10 ta belgidan iborat bo‘lishi kerak!')
      return
    }

    alert(`Rahmat, ${name}! Xabaringiz yuborildi.`)

    nameInput.value = ''
    emailInput.value = ''
    messageInputContact.value = ''
  })
}