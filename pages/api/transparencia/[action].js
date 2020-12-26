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
    }
]

const mockLicitacoes = [
    {
        "dataResultadoCompra": "03/10/2020",
        "dataAbertura": "Sem informação",
        "orgaoSuperiorLicitante": "MINISTERIO DA EDUCACAO",
        "EntidadeVinculada": "UNIVERSIDADE FEDERAL DE MINAS GERAIS",
        "unidadeGestora": "ESCOLA DE VETERINARIA/UFMG",
        "situacao": "Encerrado",
        "modalidade": "Dispensa de Licitação",
        "instrumentoLegal": "Sem informação",
        "numeroLicitacao": "00045/2020",
        "objeto": "Aquisição de itens para Pós Graduaçao Zootecnia profª Sandra"
    },
    {
        "dataResultadoCompra": "02/10/2020",
        "dataAbertura": "Sem informação",
        "orgaoSuperiorLicitante": "MINISTERIO DA ECONOMIA",
        "EntidadeVinculada": "MINISTERIO DA ECONOMIA",
        "unidadeGestora": "SUPERINTENDÊNCIA DE ADMINISTRAÇÃO DO MF - MG",
        "situacao": "Encerrado",
        "modalidade": "Dispensa de Licitação",
        "instrumentoLegal": "Sem informação",
        "numeroLicitacao": "00066/2020",
        "objeto": "Averbação de Tempo de Serviço e de Contribuição na Administração Pública a ser ofertado as servidoras Isadora Cunha Vasconcelos e Josiane Paganelli e Silva, lotadas na Superintendência Regional de Administração em Minas Gerais. Período de Realização: 05 a 09/10/2020"
    },
    {
        "dataResultadoCompra": "02/10/2020",
        "dataAbertura": "Sem informação",
        "orgaoSuperiorLicitante": "MINISTERIO DA EDUCACAO",
        "EntidadeVinculada": "UNIVERSIDADE FEDERAL DE ITAJUBA",
        "unidadeGestora": "UNIVERSIDADE FEDERAL DE ITAJUBA/MG",
        "situacao": "Publicado",
        "modalidade": "Inexigibilidade de Licitação",
        "instrumentoLegal": "Sem informação",
        "numeroLicitacao": "00009/2020",
        "objeto": "Aquisição de licença perpétua de softwares para o Programa de Pós-Graduação em Engenharia de Produção, conforme condições, quantidades e exigências estabelecidas no Termo de Referência."
    },
    {
        "dataResultadoCompra": "02/10/2020",
        "dataAbertura": "Sem informação",
        "orgaoSuperiorLicitante": "MINISTERIO DEFESA",
        "EntidadeVinculada": "COMANDO DO EXERCITO",
        "unidadeGestora": "28 GRUPO DE ARTILHARIA DE CAMPANHA-MEX/SC",
        "situacao": "Encerrado",
        "modalidade": "Dispensa de Licitação",
        "instrumentoLegal": "Empenho",
        "numeroLicitacao": "00282/2020",
        "objeto": "Aquisição de material de consumo em prol do 28°gac, alinhado com o objetivo estratégico nr 3 aprimorar a qualidade de vida da família militar.Qualidade No apoio de saúde - atendimento médico odontológico compatível."
    },
    {
        "dataResultadoCompra": "02/10/2020",
        "dataAbertura": "Sem informação",
        "orgaoSuperiorLicitante": "MINISTERIO DA ECONOMIA",
        "EntidadeVinculada": "SERVICO FEDERAL DE PROCESSAMENTO DE DADOS",
        "unidadeGestora": "SERPRO - REGIONAL SAO PAULO",
        "situacao": "Encerrado",
        "modalidade": "Dispensa de Licitação",
        "instrumentoLegal": "Empenho",
        "numeroLicitacao": "01627/2020",
        "objeto": "Contratação de ação educacional IMPLEMENTING AND OPERATING CISCO ENTERPRISE NETWORK CORE TECHNOLOGIES (ENCOR)"
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