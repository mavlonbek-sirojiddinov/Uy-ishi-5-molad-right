let elBody = document.querySelector('body')
let elModal = document.querySelector('.modal-right')
let elTitle = document.querySelector('h1')
let elBtn1 = document.querySelector('.btn1')
let elBtn2 = document.querySelector('.btn2')
let elBtn3 = document.querySelector('.btn-1')

elBtn1.addEventListener('click', function(evn) {
  evn.preventDefault()
  elModal.classList.add('modal')
  elBody.classList.add('active')
  elBtn1.classList.add('btn-1')
  elTitle.style.display = 'block'
  elBtn2.style.display = 'block'
})

elBtn2.addEventListener('click', function(evn) {
  evn.preventDefault()
  elModal.classList.remove('modal')
  elBody.classList.remove('active')
  elBtn1.classList.remove('btn-1')
  elBtn2.style.display = 'none'
  elBtn1.style.display = 'block'
  elTitle.style.display = 'none'
})