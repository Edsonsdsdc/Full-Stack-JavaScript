const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-vindo(a) ao cadastro de Imóveis!\n" +
        "Total de imóveis:" + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóveis\n2. Lista de imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informa o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Quantos quartos possui o imóvel:")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel:")
            imovel.garagem = prompt("O imóvel possui garagem? sim/não:")

            const confirmacao = confirm (
             "Salvar este imóvel?\n" +
             "\nProprietário: " + imovel.proprietario +
             "\nQuarto: " + imovel.quartos +
             "\nBanheiros: " + imovel.banheiros +
             "\nTem Garagem? " + imovel.garagem

            )

            if(confirmacao){
            imoveis.push(imovel)
            }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                "Imóvel " + (i + 1) + 
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossuui garagem? " + imoveis[i].garagem
              )
        }


        case "3":
            alert("Encerramento...")
            break
        default:
            alert("Opção inválida!")

    }
} while (opcao !== "3")