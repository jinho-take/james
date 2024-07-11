const scriptURL = 'https://script.google.com/macros/s/AKfycbw-lo86-zKMrvKgDpdoXHmRGBg7aroU9VmkSF9paHounafPdxPyIkJ79AmlR4sHLBBsXQ/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})