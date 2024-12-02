const passwordForm = document.getElementById('passwordForm')
const passwordsList = document.getElementById('passwords')

passwordForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const site = document.getElementById('site').value
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value

  const listItem = document.createElement('li')
  listItem.textContent = `Website: ${site}, Username: ${username}, Password: ${password}`
  passwordsList.appendChild(listItem)

  // Clear the form
  passwordForm.reset()
})
