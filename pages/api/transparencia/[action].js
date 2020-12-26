const mockConvenios = [
    {
        "numero": "905213",
        "uf": "MG",
        "municipio": "LAVRAS",
        "situacao": "EM EXECUÇÃO",
        "tipoInstrumento": "Não se aplica",
        "objeto": "Apoio ao desenvolvimento do Projeto intitulado Pesquisa, Desenvolvimento e Inovacao aplicados a mode...",
        "orgaoSuperior": "Ministério da Educação",
        "entidadeVisculada": "Universidade Federal de Lavras",
        "concedente": "UNIVERSIDADE FEDERAL DE LAVRAS",
        "convenente": "FUNDACAO DE DESENVOLVIMENTO CIENTIFICO E CULTURAL",
        "dataInicio": "08/12/2020",
        "dataFim": "31/08/2021",
        "valorLiberado": "4.449.120,00",
        "valorCelebrado": "4.449.120,00",
    },
    {
        "numero": "904350",
        "uf": "SP",
        "municipio": "CAMPINAS",
        "situacao": "EM EXECUÇÃO",
        "tipoInstrumento": "Não se aplica",
        "objeto": "Realizar o programa Familias Fortes visando bem-estar dos membros da familia a partir do fortalecime...",
        "orgaoSuperior": "Ministério da Mulher, Família e Direitos Humanos",
        "entidadeVisculada": "Ministério da Mulher, Família e Direitos Humanos - Unidades com vínculo direto",
        "concedente": "SECRETARIA NACIONAL DA FAMILIA",
        "convenente": "SERVICO SOCIAL NOVA JERUSALEM",
        "dataInicio": "18/11/2020",
        "dataFim": "30/12/2021",
        "valorLiberado": "100.000,00",
        "valorCelebrado": "100.000,00",
    },
    {
        "numero": "903462",
        "uf": "PE",
        "municipio": "ÁGUA PRETA",
        "situacao": "EM EXECUÇÃO",
        "tipoInstrumento": "Não se aplica",
        "objeto": "Aquisicao de equipamentos para modernizacao da Biblioteca e Centro de Conhecimento da Usina de Arte,...",
        "orgaoSuperior": "Ministério do Turismo",
        "entidadeVisculada": "Fundo Nacional de Cultura",
        "concedente": "FNC - SECDEC",
        "convenente": "ASSOCIACAO SOCIOAMBIENTAL E CULTURAL JACUIPE",
        "dataInicio": "30/11/2020",
        "dataFim": "29/11/2021",
        "valorLiberado": "100.000,00",
        "valorCelebrado": "100.000,00",
    },
    {
        "numero": "903453",
        "uf": "DF",
        "municipio": "BRASÍLIA",
        "situacao": "EM EXECUÇÃO",
        "tipoInstrumento": "Não se aplica",
        "objeto": "* Cultura a distancia durante a pandemia* : Realizar 40 oficinas do eixo audiovisual, 15 palestras d...",
        "orgaoSuperior": "Ministério do Turismo",
        "entidadeVisculada": "Fundo Nacional de Cultura",
        "concedente": "FNC - SNAV",
        "convenente": "TRANSFORME - ACOES SOCIAIS E HUMANITARIAS",
        "dataInicio": "01/10/2020",
        "dataFim": "01/10/2021",
        "valorLiberado": "400.000,00",
        "valorCelebrado": "400.000,00",
    },
    {
        "numero": "903847",
        "uf": "RJ",
        "municipio": "RIO DE JANEIRO",
        "situacao": "EM EXECUÇÃO",
        "tipoInstrumento": "Não se aplica",
        "objeto": "REALIZACAO DE 02 ACOES DE FORMACAO TECNICA E CAPACITACAO EM PRODUCAO AUDIOVISUAL a serem realizadas ...",
        "orgaoSuperior": "Ministério do Turismo",
        "entidadeVisculada": "Fundo Nacional de Cultura",
        "concedente": "FNC - SNAV",
        "convenente": "INSTITUTO CULTURA EM MOVIMENTO",
        "dataInicio": "20/10/2020",
        "dataFim": "20/10/2021",
        "valorLiberado": "1.044.054,00",
        "valorCelebrado": "1.044.054,00",
    }

]

const mockLicitacoes = [
    {
        "id": 1234,
    }
]

export default function handler(req, res) {

    const {
        query: { action },
      } = req

    if (action === "licitacoes") {
        return res.status(200).json(mockLicitacoes)

    } else if (action === "convenios") {
        return res.status(200).json(mockConvenios)

    } else {
        return res.status(404).json({
            "error": "search-0002",
            "message": "Dados nāo encontrados, por favor tente novamente.",
            "detail": "Parece que houve um erro com a sua busca",
            "help": ""
        })
    }

}