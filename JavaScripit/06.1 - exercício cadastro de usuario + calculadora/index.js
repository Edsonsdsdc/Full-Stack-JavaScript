const primerioNome = prompt("Informe o primeiro nome do recrurta:")
const sobrenome = prompt("Informe sobrenome doi recruta:")
const campoDeEstudos = prompt("Qual é o campo de estudos do recruta:")
const anoDeNascimento = prompt("Qual é o ano de nascimento do recruta?")

alert(
    "Recruta cadastrado com sucesso " + 
    "Nome completo: " + primerioNome + " " + sobrenome +
    " Campo de estudos: " +  campoDeEstudos + 
    " idade: " + (2024 - anoDeNascimento)
)