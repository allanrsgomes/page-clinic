function orderDataAlphabetically(data) {
    const orderedData = data.sort(
        (valueA, valueB) =>
            valueA.Estado.localeCompare(valueB.Estado) ||
            valueA.Cidade.localeCompare(valueB.Cidade) ||
            valueA.Bairro.localeCompare(valueB.Bairro),
    )

    return orderedData;
}

function filtrarDadosPanvel(data) { 
    for(i=0; i < data.length;i++){
        data[i].Bairro = data[i].Bairro.trim();
        data[i].Cidade = data[i].Cidade.trim();
        if (data[i].Cidade == "Porto Alegre" && data[i].Bairro == "Centro"){
            data[i].Bairro = "Centro Histórico";
        }
        data[i].Estado = data[i].Estado.trim();
        data[i].UF = data[i].UF.trim();
    };
}

lojas = [
    {
        "Filial": "13",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Shopping Iguatemi - Rua João Wallig, 1800 Lj. JW 13-Iguatemi ",
        "Bairro": "Passo D’areia",
        "Telefone": "51-33349353",
        "WhatsApp": "51-996915283",
        "Úteis": "10:00 às 22:00",
        "Sábados": "10:00 às 22:00",
        "Feriados": "11:00 às 20:00"
    },
    {
        "Filial": "40",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Uruguaiana",
        "Endereço": "Rua Duque de Caxias, 1625",
        "Bairro": "Centro",
        "Telefone": "55-34134020",
        "WhatsApp": "51-999930823",
        "Úteis": "07:30 às 23:00",
        "Sábados": "07:30 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "118",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Gabriel",
        "Endereço": "Rua General Mallet, 456 terreo",
        "Bairro": "Centro",
        "Telefone": "55-32322100",
        "WhatsApp": "51-997022093",
        "Úteis": "07:00 às 23:59",
        "Sábados": "07:00 às 23:59",
        "Feriados": "07:00 às 23:59"
    },
    {
        "Filial": "129",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua dos Andradas, 1320 ",
        "Bairro": "Centro Histórico",
        "Telefone": "51-3228-4660",
        "WhatsApp": "51-997749244",
        "Úteis": "07:00 às 20:00",
        "Sábados": "08:00 às 18:00",
        "Feriados": "Fechado"
    },
    {
        "Filial": "173",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Caxias do Sul",
        "Endereço": "Avenida Júlio de Castilhos, nº 2.234, loja 1",
        "Bairro": "Centro",
        "Telefone": "54-32216822",
        "WhatsApp": "51-996556208",
        "Úteis": "07:00 às 21:00",
        "Sábados": "07:00 às 21:00",
        "Feriados": "09:00 às 20:00"
    },
    {
        "Filial": "192",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Wenceslau Escobar, 2857 Lj 04",
        "Bairro": "Cristal",
        "Telefone": "51-3346-6144",
        "WhatsApp": "51-997770130",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "304",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Rio Grande",
        "Endereço": "Rua Doutor Nascimento, 389, 391 e 399",
        "Bairro": "Centro",
        "Telefone": "53-3235-7272",
        "WhatsApp": "51-998791508",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "07:00 às 23:00"
    },
    {
        "Filial": "311",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Casemiro de Abreu, 1755 e 1775",
        "Bairro": "Boa Vista",
        "Telefone": "51-3332-2375",
        "WhatsApp": "51-997126605",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "07:00 às 23:00"
    },
    {
        "Filial": "338",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Passo Fundo",
        "Endereço": "Rua Quinze de Novembro, 318",
        "Bairro": "Centro",
        "Telefone": "54-3311-3848",
        "WhatsApp": "51-995661229",
        "Úteis": "07:00 às 23:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "341",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Capão da Canoa",
        "Endereço": "Av. Paraguassú, 2786 ",
        "Bairro": "Centro",
        "Telefone": "51-3665-4151",
        "WhatsApp": "51-996262255",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:30 às 22:00",
        "Feriados": "07:30 às 22:00"
    },
    {
        "Filial": "343",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Valparaíso, 698 ",
        "Bairro": "Jardim Botânico",
        "Telefone": "51-3352-5513",
        "WhatsApp": "51-980189521",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 23:00"
    },
    {
        "Filial": "345",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Pelotas",
        "Endereço": "Rua Gonçalves Chaves, 2920 ",
        "Bairro": "Centro",
        "Telefone": "53-3227-7232",
        "WhatsApp": "51-995945873",
        "Úteis": "07:00 às 22:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "349",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Doutor Nilo Peçanha, 690",
        "Bairro": "Bela Vista",
        "Telefone": "51-3330-4658",
        "WhatsApp": "51-995008685",
        "Úteis": "07:00 às 23:30",
        "Sábados": "07:00 às 23:30",
        "Feriados": "08:00 às 23:00"
    },
    {
        "Filial": "354",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Rosa",
        "Endereço": "Avenida Expedicionário Weber, 805 ",
        "Bairro": "Centro",
        "Telefone": "55-3512-8846",
        "WhatsApp": "51-995715729",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "355",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Torres",
        "Endereço": "Rua Bento Gonçalves, 81",
        "Bairro": "Centro",
        "Telefone": "51-3664-1475",
        "WhatsApp": "51-995020316",
        "Úteis": "24h",
        "Sábados": "24h",
        "Feriados": "24h"
    },
    {
        "Filial": "356",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Ijuí",
        "Endereço": "Rua  Doutor Pestana, 20",
        "Bairro": "Centro",
        "Telefone": "55-3333-1235",
        "WhatsApp": "51-995799467",
        "Úteis": "24h",
        "Sábados": "24h",
        "Feriados": "24h"
    },
    {
        "Filial": "359",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Maria",
        "Endereço": "Avenida Nossa Senhora Medianeira, 1318 ",
        "Bairro": "Centro",
        "Telefone": "55-3221-6828",
        "WhatsApp": "51-997280969",
        "Úteis": "24h",
        "Sábados": "24h",
        "Feriados": "24h"
    },
    {
        "Filial": "362",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Esteio",
        "Endereço": "Avenida Presidente Vargas, 2358 - Lojas 1 e 2 ",
        "Bairro": "Centro",
        "Telefone": "51-3459-5191",
        "WhatsApp": "51-997184971",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "366",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Gramado",
        "Endereço": "Av. das Hortênsias, 1929 - Loja 101",
        "Bairro": "Centro",
        "Telefone": "54-32861562",
        "WhatsApp": "51-996021666",
        "Úteis": "24h",
        "Sábados": "24h",
        "Feriados": "24h"
    },
    {
        "Filial": "375",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Lajeado",
        "Endereço": "Avenida Benjamin Constant, nº 1.707",
        "Bairro": "Florestal",
        "Telefone": "51-37486491",
        "WhatsApp": "51-997285741",
        "Úteis": "07:00 às 22:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "381",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Criciúma",
        "Endereço": "Rua Marechal Deodoro, nº 177",
        "Bairro": "Centro",
        "Telefone": "48-34336884",
        "WhatsApp": "48-991581195",
        "Úteis": "07:00 às 22:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "386",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Caxias do Sul",
        "Endereço": "Rua General Malett, 56",
        "Bairro": "Rio Branco",
        "Telefone": "54-32204991",
        "WhatsApp": "51-997736171",
        "Úteis": "07:00 às 22:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "08:00 às 20:00"
    },
    {
        "Filial": "396",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "São Borja",
        "Endereço": "Rua General Marques, nº 902, Loja 1, ",
        "Bairro": "Centro",
        "Telefone": "55-34311269",
        "WhatsApp": "51-999006290",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "398",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Sapucaia do Sul",
        "Endereço": "Rua Professor Francisco Brochado da Rocha, nº 393",
        "Bairro": "Centro",
        "Telefone": "51-34744840",
        "WhatsApp": "51-995617441",
        "Úteis": "07:00 às 21:00",
        "Sábados": "07:00 às 21:00",
        "Feriados": "Fechado"
    },
    {
        "Filial": "400",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Novo Hamburgo",
        "Endereço": "Hosp. Regina - Av. Dr. Maurício Cardoso, 833 - Sl 102",
        "Bairro": "Hamburgo Velho",
        "Telefone": "51-35811277",
        "WhatsApp": "51-999568711",
        "Úteis": "08:00 às 19:30",
        "Sábados": "08:00 às 12:30",
        "Feriados": "Fechado"
    },
    {
        "Filial": "428",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Florianópolis",
        "Endereço": "Rua Coronel Pedro Demoro, 1814",
        "Bairro": "Estreito",
        "Telefone": "48-3240-3567",
        "WhatsApp": "48-991596844",
        "Úteis": "07:00 às 23:30",
        "Sábados": "07:30 às 23:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "435",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Joinville",
        "Endereço": "Rua do Principe, 177",
        "Bairro": "Centro",
        "Telefone": "47-3422-4590",
        "WhatsApp": "48-991883678",
        "Úteis": "07:00 às 21:00",
        "Sábados": "07:00 às 21:00",
        "Feriados": "Fechado"
    },
    {
        "Filial": "440",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Farmácia Universitária - Av. Ipiranga, 6681  Prédio 12B - Térreo",
        "Bairro": "Partenon",
        "Telefone": "51-3384-2257",
        "WhatsApp": "51-995539747",
        "Úteis": "07:30 às 18:00",
        "Sábados": "08:00 às 12:00",
        "Feriados": "Fechado"
    },
    {
        "Filial": "442",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Osvaldo Aranha, 1370 ",
        "Bairro": "Bom Fim",
        "Telefone": "51-3346-1802",
        "WhatsApp": "51 - 996481178",
        "Úteis": "07:30 às 21:00",
        "Sábados": "08:00 às 20:00",
        "Feriados": "09:00 às 20:00"
    },
    {
        "Filial": "455",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Vinte e Quatro de Outubro, 722 ",
        "Bairro": "Moinhos de Vento",
        "Telefone": "51-3268-6745",
        "WhatsApp": "51-980101329",
        "Úteis": "07:30 às 21:00",
        "Sábados": "07:30 às 21:00",
        "Feriados": "10:00 às 19:00"
    },
    {
        "Filial": "498",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Canoas",
        "Endereço": "Avenida Santos Ferreira, 1400",
        "Bairro": "Marechal Rondon",
        "Telefone": "51-3476-0587",
        "WhatsApp": "51-997690416",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 19:00"
    },
    {
        "Filial": "515",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Shopping Pátio Batel - Avenida do Batel, 1868 - Loja 334 e 335",
        "Bairro": "Batel",
        "Telefone": "41-3342-8570",
        "WhatsApp": "41-992631424",
        "Úteis": "10:00 às 18:00",
        "Sábados": "Fechada",
        "Feriados": "Fechado"
    },
    {
        "Filial": "532",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Rua Professor Brandão, 25",
        "Bairro": "Alto da Rua XV",
        "Telefone": "41-3262-6517",
        "WhatsApp": "41-991214557",
        "Úteis": "08:00 às 22:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "533",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Maringá",
        "Endereço": "Avenida Curitiba, 357",
        "Bairro": "Zona 4",
        "Telefone": "44-3262-7775",
        "WhatsApp": "41-991918849",
        "Úteis": "07:00 às 21:00",
        "Sábados": "08:00 às 20:00",
        "Feriados": "Fechado"
    },
    {
        "Filial": "537",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Londrina",
        "Endereço": "Rodovia Mabio Gonçalves Palhano, 758",
        "Bairro": "Gleba Fazenda Palhano",
        "Telefone": "43-3356-2293",
        "WhatsApp": "41-991231219",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "555",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Cascavel",
        "Endereço": "Rua Paraná, n° 2962",
        "Bairro": "Centro",
        "Telefone": "45-3224-8138",
        "WhatsApp": "41-991692543",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "561",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Umuarama",
        "Endereço": "Avenida Paraná, 5264",
        "Bairro": "Zona III",
        "Telefone": "44-3624-1643",
        "WhatsApp": "41-992099263",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "562",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Paranavaí",
        "Endereço": "Rua Pernambuco, 964",
        "Bairro": "Centro",
        "Telefone": "44-3422-1270",
        "WhatsApp": "41-991993745",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "570",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Avenida Iguaçu, 2536, Sala 01",
        "Bairro": "Água Verde",
        "Telefone": "41-32421435",
        "WhatsApp": "41-991816995",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:30 às 23:00",
        "Feriados": "09:00 às 22:00"
    },
    {
        "Filial": "702",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Anita Garibaldi, 2099 – Lj 02",
        "Bairro": "Mont Serrat",
        "Telefone": "51-33281410",
        "WhatsApp": "51-995049688",
        "Úteis": "07:00 às 22:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "705",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cachoeirinha",
        "Endereço": "Av. General Flores da Cunha, 4315",
        "Bairro": "Vila Bom Principio ",
        "Telefone": "51-34701719",
        "WhatsApp": "51-997460874",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 21:00"
    },
    {
        "Filial": "708",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Venâncio Aires",
        "Endereço": "Rua Osvaldo Aranha, nº 1.477",
        "Bairro": "Centro",
        "Telefone": "51-37417123",
        "WhatsApp": "51-997532973",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "712",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Cruz Alta",
        "Endereço": "Rua Barão do Rio Branco, 1484",
        "Bairro": "Centro",
        "Telefone": "55-33225397",
        "WhatsApp": "51-995387614",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "713",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Taquara",
        "Endereço": "Rua General Frota, 2580, loja 02",
        "Bairro": "Centro",
        "Telefone": "51-35415730",
        "WhatsApp": "51-998182148",
        "Úteis": "07:00 às 22:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "08:00 às 20:00"
    },
    {
        "Filial": "715",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Chapecó",
        "Endereço": "Avenida Getúlio Vargas, nº 888",
        "Bairro": "Centro",
        "Telefone": "49-33221841",
        "WhatsApp": "48-991592957",
        "Úteis": "07:00 às 23:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "10:00 às 22:00"
    },
    {
        "Filial": "720",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Brusque",
        "Endereço": "Rua Felipe Schmidt, nº 115, sala 1, ",
        "Bairro": "São Luiz",
        "Telefone": "47-33555215",
        "WhatsApp": "48-991895970",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 22:00"
    },
    {
        "Filial": "725",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Lages",
        "Endereço": "Rua Governador Jorge Lacerda, 154",
        "Bairro": "Centro",
        "Telefone": "49-3224-6527",
        "WhatsApp": "48-991600336",
        "Úteis": "07:00 às 23:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "733",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Silveiro, 181",
        "Bairro": "Menino Deus",
        "Telefone": "51-32329366",
        "WhatsApp": "51-999190442",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "735",
        "Estado": "Santa Catarina",
        "UF": "SC",
        "Cidade": "Blumenau",
        "Endereço": "Rua Almirante Barroso, nº 1.158",
        "Bairro": "Vila Nova",
        "Telefone": "47-33233278",
        "WhatsApp": "48-991828280",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 22:00"
    },
    {
        "Filial": "736",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Farroupilha",
        "Endereço": "Rua Treze de Maio, 585",
        "Bairro": "Centro",
        "Telefone": "54-32686663",
        "WhatsApp": "51-980241918",
        "Úteis": "07:00 às 22:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "08:00 às 21:00"
    },
    {
        "Filial": "738",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Santa Cruz do Sul",
        "Endereço": "Rua Vinte e Oito de Setembro, 585",
        "Bairro": "Centro",
        "Telefone": "51-37174550",
        "WhatsApp": "51-998675693",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "741",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Rua Dona Adda Mascarenhas de Moraes, nº 57, ",
        "Bairro": "Jardim Itu",
        "Telefone": "51-33445847",
        "WhatsApp": "51-997579237",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "743",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Bento Gonçalves",
        "Endereço": "Rua General Osorio ,235",
        "Bairro": "Centro",
        "WhatsApp": "51-997596980",
        "Úteis": "24h",
        "Sábados": "24h",
        "Feriados": "24h"
    },
    {
        "Filial": "748",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Avenida Goethe, 210",
        "Bairro": "Rio Branco",
        "Telefone": "51- 3333-2135",
        "WhatsApp": "51-980208314",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "07:00 às 23:00"
    },
    {
        "Filial": "753",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Alegrete",
        "Endereço": "Rua Dr Lauro Dornelles n° 1",
        "Bairro": "Centro",
        "Úteis": "07:30 às 22:00",
        "Sábados": "07:30 às 22:00",
        "Feriados": "08:00 às 22:00"
    },
    {
        "Filial": "800",
        "Estado": "São Paulo",
        "UF": "SP",
        "Cidade": "São Paulo",
        "Endereço": "Shopping Morumbi Town - Avenida Giovanni Gronchi, 5930 - Lojas 5 e 6 ",
        "Bairro": "Vila Andrade",
        "Telefone": "11-5063-4027",
        "WhatsApp": "11-961959826",
        "Úteis": "08:00 às 22:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "802",
        "Estado": "São Paulo",
        "UF": "SP",
        "Cidade": "São Paulo",
        "Endereço": "Avenida Europa, nº 352",
        "Bairro": "Jardim Europa",
        "Telefone": "11-3062-2252",
        "WhatsApp": "11-964100451",
        "Úteis": "08:00 às 22:00",
        "Sábados": "08:00 às 22:00",
        "Feriados": "10:00 às 20:00"
    },
    {
        "Filial": "552",
        "Estado": "Paraná",
        "UF": "PR",
        "Cidade": "Curitiba",
        "Endereço": "Avenida Nossa Senhora da Luz, nº 2.341",
        "Bairro": "Jardim Social",
        "Telefone": "41-3262-1447",
        "WhatsApp": "41-992869148",
        "Úteis": "07:00 às 22:00",
        "Sábados": "07:00 às 22:00",
        "Feriados": "09:00 às 21:00"
    },
    {
        "Filial": "45",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Porto Alegre",
        "Endereço": "Av. Protásio Alves, 723",
        "Bairro": "Rio Branco",
        "Telefone": "51-33317125",
        "WhatsApp": "51-996921985",
        "Úteis": "24h",
        "Sábados": "24h",
        "Feriados": "24h"
    },
    {
        "Filial": "759",
        "Estado": "Rio Grande do Sul",
        "UF": "RS",
        "Cidade": "Livramento",
        "Endereço": "Av. Presidente João Belchior Goulart, 841",
        "Bairro": "Hidráulica",
        "WhatsApp": "51-999060113",
        "Úteis": "07:00 às 23:00",
        "Sábados": "07:00 às 23:00",
        "Feriados": "09:00 às 21:00"
    }
]