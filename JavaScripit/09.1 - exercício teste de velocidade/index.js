const nomeDoVeículo1 = prompt("Nome do primeiro veículo 1*")
const velocidadeVeiculo1 = prompt("insira velocidade veículo 1*")
const nomeDoVeículo2 = prompt("Nome do primeiro veículo 2*")
const velocidadeVeiculo2 = prompt("insira velocidade veículo 2*")

if (velocidadeVeiculo1 > velocidadeVeiculo2) {
    alert(nomeDoVeículo1 + " 1 é mais rapido")
} else if (velocidadeVeiculo2 > velocidadeVeiculo1) {
    alert(nomeDoVeículo2 + " é mais rapido")
} else if (velocidadeVeiculo1 >= velocidadeVeiculo2) {
    alert("velocidade dos veículos é igual")
} else if (velocidadeVeiculo2 >= velocidadeVeiculo1) {
    alert()
}