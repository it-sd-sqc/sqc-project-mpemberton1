document.getElementById('toggleButton').addEventListener('click', function () {
  const body = document.body

  // toggle dark-mode
  body.classList.toggle('dark-mode')

  // referencce to button id
  const button = document.getElementById('toggleButton')

  // update button
  if (body.classList.contains('dark-mode')) {
    button.textContent = '☀️'
  } else {
    button.textContent = '🌙'
  }
})
