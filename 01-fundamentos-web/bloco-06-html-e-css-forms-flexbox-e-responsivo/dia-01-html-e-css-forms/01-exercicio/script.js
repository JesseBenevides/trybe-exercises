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

window.onload = function () {
  createStateOptions()
}
