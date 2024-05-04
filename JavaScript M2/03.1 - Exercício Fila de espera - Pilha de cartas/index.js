let filaDeEspera = []
let opcao = ""

do {
    let pacientes = ""
for (let i = 0; i < filaDeEspera.length; i++) {
    pacientes += (i + l) + "º - " + filaDeEspera[i] + "\n"
    }

    opcao = prompt (
        "Pacientes:\n" + pacientes + 
        "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )

    switch (opcao){
    case "1":
        const novoPaciente = prompt("Qual é o nome do paciente?")
        filaDeEspera.push(novoPaciente)
        break

    case "2":
       const pacienteConsultado = filaDeEspera.shift ()
       alert(pacienteConsultado + "foi removido da fila.")
       break

    case "3":
        alert("Encerrando....")
        default:
            alert("Opção invalida")
    }

} while (opcao !== "3")


