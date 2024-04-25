const turista = prompt("E ai, turista qual é seu nome?")

let cidades = ""

let contagem = 0

let continuar = prompt("você visitou alguma cidade? (Sim/Não)")

while (continuar = "Sim"){
    let cidade = prompt("Qual é o nome da cidade visitada?")
    // cidades = cidades + ....
    cidades += " - " + cidades + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista " + turista +
    "\nQuantidades de cidades visitadas: " + contagem + 
    "\nCidades visitadas:\n" + cidades
)
