// Cria Options com todos os Estados
function createStateOptions() {
  const stateList = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO'
  ]

  const stateForm = document.getElementById('state')

  for (state of stateList) {
    let stateOption = document.createElement('option')

    stateOption.innerText = state
    stateOption.value = state

    stateForm.appendChild(stateOption)
  }
}

function validateName() {
  let name = document.querySelector('[name=name]')

  if (name.value.length > 40 || name.value.length === 0) {
    alert('Nome inválido')
  }
}

function validateData() {
  validateName()
}

// Lida com o comportamento do botão de submit
function handleSubmit(event) {
  event.preventDefault()

  validateData()
}

window.onload = function () {
  createStateOptions()

  const submitButton = document.getElementById('submit-button')
  submitButton.addEventListener('click', handleSubmit)
}
