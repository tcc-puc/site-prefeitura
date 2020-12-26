const mock = [
    {
        "id": 1234,
        "inscricao": "0000180434",
        "codigoLogradouro": "039748",
        "tributo": "IPTU Territorial",
        "proprietario": {
            "nome": "Luan Fagundes",
        },
        "endereco": {
            "logradouro": "Rua mario luigi souza",
            "cep": "08230-030",
            "bairro": "Campo Alegre",
            "uf": "MG"
        },
        "localizacao": {
            "logradouro": "Rua Herreira (Cond. Res. Pathernon).",
            "bairro": "Parque dos rodoviários",
        },
        "terreno": {
            "area": "420.0",
            "caracteristicas": "1 - Nāo construído",
            "situacao": "Uma Frente",
            "limitacao": "murado",
            "pedologia": "1 - Normal",
            "topografia": "4 - Plano",
            "configuracao": "lote urbano",
        },
        "edificacao": {
            "area": "0.00",
            "caracteristicas": "",
            "situacao": "",
            "utilizacao": "",
            "revestimento": "",
            "estado": "",
            "situacaoImovel": "",
            "zonaFiscal": "2",
            "valorRenal": "24044,03",
            "aliquota": "0.01300000",
        },
        "codigoBarras": "M550,1h2V0h-2v1zM548,1h1V0h-1v1zM544,1h3V0h-3v1zM539,1h2V0h-2v1zM534,1h2V0h-2v1zM531,1h2V0h-2v1zM528,1h2V0h-2v1zM526,1h1V0h-1v1zM521,1h3V0h-3v1zM517,1h2V0h-2v1zM512,1h3V0h-3v1zM510,1h1V0h-1v1zM506,1h2V0h-2v1zM502,1h2V0h-2v1zM499,1h1V0h-1v1zM495,1h3V0h-3v1zM491,1h3V0h-3v1zM488,1h2V0h-2v1zM484,1h3V0h-3v1zM481,1h2V0h-2v1zM476,1h3V0h-3v1zM473,1h1V0h-1v1zM469,1h2V0h-2v1zM465,1h3V0h-3v1zM462,1h1V0h-1v1zM458,1h2V0h-2v1zM454,1h3V0h-3v1zM451,1h1V0h-1v1zM447,1h2V0h-2v1zM443,1h3V0h-3v1zM440,1h1V0h-1v1zM436,1h2V0h-2v1zM432,1h3V0h-3v1zM429,1h1V0h-1v1zM425,1h2V0h-2v1zM421,1h3V0h-3v1zM418,1h1V0h-1v1zM414,1h3V0h-3v1zM411,1h1V0h-1v1zM407,1h2V0h-2v1zM404,1h2V0h-2v1zM399,1h3V0h-3v1zM396,1h1V0h-1v1zM393,1h1V0h-1v1zM389,1h3V0h-3v1zM385,1h2V0h-2v1zM382,1h1V0h-1v1zM377,1h3V0h-3v1zM374,1h2V0h-2v1zM370,1h3V0h-3v1zM367,1h1V0h-1v1zM363,1h2V0h-2v1zM359,1h2V0h-2v1zM355,1h3V0h-3v1zM352,1h1V0h-1v1zM350,1h1V0h-1v1zM345,1h3V0h-3v1zM341,1h2V0h-2v1zM337,1h2V0h-2v1zM333,1h3V0h-3v1zM330,1h1V0h-1v1zM327,1h2V0h-2v1zM322,1h3V0h-3v1zM319,1h1V0h-1v1zM315,1h2V0h-2v1zM311,1h3V0h-3v1zM308,1h1V0h-1v1zM306,1h1V0h-1v1zM301,1h3V0h-3v1zM297,1h2V0h-2v1zM294,1h1V0h-1v1zM289,1h3V0h-3v1zM286,1h2V0h-2v1zM284,1h1V0h-1v1zM279,1h3V0h-3v1zM275,1h2V0h-2v1zM272,1h2V0h-2v1zM267,1h3V0h-3v1zM264,1h1V0h-1v1zM260,1h2V0h-2v1zM256,1h3V0h-3v1zM253,1h1V0h-1v1zM249,1h2V0h-2v1zM245,1h3V0h-3v1zM242,1h1V0h-1v1zM239,1h1V0h-1v1zM235,1h3V0h-3v1zM231,1h2V0h-2v1zM227,1h2V0h-2v1zM223,1h3V0h-3v1zM220,1h1V0h-1v1zM216,1h2V0h-2v1zM212,1h3V0h-3v1zM209,1h1V0h-1v1zM205,1h2V0h-2v1zM201,1h3V0h-3v1zM198,1h1V0h-1v1zM194,1h2V0h-2v1zM190,1h3V0h-3v1zM187,1h1V0h-1v1zM183,1h2V0h-2v1zM179,1h3V0h-3v1zM176,1h1V0h-1v1zM172,1h2V0h-2v1zM168,1h3V0h-3v1zM165,1h1V0h-1v1zM161,1h2V0h-2v1zM157,1h3V0h-3v1zM154,1h1V0h-1v1zM150,1h2V0h-2v1zM146,1h3V0h-3v1zM143,1h1V0h-1v1zM139,1h3V0h-3v1zM136,1h1V0h-1v1zM132,1h2V0h-2v1zM129,1h1V0h-1v1zM125,1h3V0h-3v1zM121,1h2V0h-2v1zM117,1h2V0h-2v1zM113,1h3V0h-3v1zM110,1h1V0h-1v1zM106,1h2V0h-2v1zM104,1h1V0h-1v1zM99,1h3V0h-3v1zM97,1h1V0h-1v1zM92,1h3V0h-3v1zM88,1h2V0h-2v1zM83,1h3V0h-3v1zM81,1h1V0h-1v1zM77,1h2V0h-2v1zM74,1h1V0h-1v1zM70,1h3V0h-3v1zM66,1h2V0h-2v1zM62,1h2V0h-2v1zM60,1h1V0h-1v1zM55,1h3V0h-3v1zM51,1h2V0h-2v1zM49,1h1V0h-1v1zM44,1h3V0h-3v1zM39,1h3V0h-3v1zM37,1h1V0h-1v1zM33,1h2V0h-2v1zM28,1h3V0h-3v1zM26,1h1V0h-1v1zM22,1h2V0h-2v1zM18,1h2V0h-2v1zM14,1h3V0h-3v1zM11,1h1V0h-1v1zM6,1h1V0h-1v1zM3,1h1V0h-1v1zM0,1h2V0h-2v1z"
    },
    {
        "id": 123,
        "inscricao": "0000180434",
        "codigoLogradouro": "039748",
        "tributo": "IPTU Territorial",
        "proprietario": {
            "nome": "Karol Fagundes",
        },
        "endereco": {
            "logradouro": "Rua mario luigi souza",
            "cep": "08230-030",
            "bairro": "Campo Alegre",
            "uf": "MG"
        },
        "localizacao": {
            "logradouro": "Rua Herreira (Cond. Res. Pathernon).",
            "bairro": "Parque dos rodoviários",
        },
        "terreno": {
            "area": "420.0",
            "caracteristicas": "1 - Nāo construído",
            "situacao": "Uma Frente",
            "limitacao": "murado",
            "pedologia": "1 - Normal",
            "topografia": "4 - Plano",
            "configuracao": "lote urbano",
        },
        "edificacao": {
            "area": "0.00",
            "caracteristicas": "",
            "situacao": "",
            "utilizacao": "",
            "revestimento": "",
            "estado": "",
            "situacaoImovel": "",
            "zonaFiscal": "2",
            "valorRenal": "24044,03",
            "aliquota": "0.01300000",
        },
        "codigoBarras": "M550,1h2V0h-2v1zM548,1h1V0h-1v1zM544,1h3V0h-3v1zM539,1h2V0h-2v1zM534,1h2V0h-2v1zM531,1h2V0h-2v1zM528,1h2V0h-2v1zM526,1h1V0h-1v1zM521,1h3V0h-3v1zM517,1h2V0h-2v1zM512,1h3V0h-3v1zM510,1h1V0h-1v1zM506,1h2V0h-2v1zM502,1h2V0h-2v1zM499,1h1V0h-1v1zM495,1h3V0h-3v1zM491,1h3V0h-3v1zM488,1h2V0h-2v1zM484,1h3V0h-3v1zM481,1h2V0h-2v1zM476,1h3V0h-3v1zM473,1h1V0h-1v1zM469,1h2V0h-2v1zM465,1h3V0h-3v1zM462,1h1V0h-1v1zM458,1h2V0h-2v1zM454,1h3V0h-3v1zM451,1h1V0h-1v1zM447,1h2V0h-2v1zM443,1h3V0h-3v1zM440,1h1V0h-1v1zM436,1h2V0h-2v1zM432,1h3V0h-3v1zM429,1h1V0h-1v1zM425,1h2V0h-2v1zM421,1h3V0h-3v1zM418,1h1V0h-1v1zM414,1h3V0h-3v1zM411,1h1V0h-1v1zM407,1h2V0h-2v1zM404,1h2V0h-2v1zM399,1h3V0h-3v1zM396,1h1V0h-1v1zM393,1h1V0h-1v1zM389,1h3V0h-3v1zM385,1h2V0h-2v1zM382,1h1V0h-1v1zM377,1h3V0h-3v1zM374,1h2V0h-2v1zM370,1h3V0h-3v1zM367,1h1V0h-1v1zM363,1h2V0h-2v1zM359,1h2V0h-2v1zM355,1h3V0h-3v1zM352,1h1V0h-1v1zM350,1h1V0h-1v1zM345,1h3V0h-3v1zM341,1h2V0h-2v1zM337,1h2V0h-2v1zM333,1h3V0h-3v1zM330,1h1V0h-1v1zM327,1h2V0h-2v1zM322,1h3V0h-3v1zM319,1h1V0h-1v1zM315,1h2V0h-2v1zM311,1h3V0h-3v1zM308,1h1V0h-1v1zM306,1h1V0h-1v1zM301,1h3V0h-3v1zM297,1h2V0h-2v1zM294,1h1V0h-1v1zM289,1h3V0h-3v1zM286,1h2V0h-2v1zM284,1h1V0h-1v1zM279,1h3V0h-3v1zM275,1h2V0h-2v1zM272,1h2V0h-2v1zM267,1h3V0h-3v1zM264,1h1V0h-1v1zM260,1h2V0h-2v1zM256,1h3V0h-3v1zM253,1h1V0h-1v1zM249,1h2V0h-2v1zM245,1h3V0h-3v1zM242,1h1V0h-1v1zM239,1h1V0h-1v1zM235,1h3V0h-3v1zM231,1h2V0h-2v1zM227,1h2V0h-2v1zM223,1h3V0h-3v1zM220,1h1V0h-1v1zM216,1h2V0h-2v1zM212,1h3V0h-3v1zM209,1h1V0h-1v1zM205,1h2V0h-2v1zM201,1h3V0h-3v1zM198,1h1V0h-1v1zM194,1h2V0h-2v1zM190,1h3V0h-3v1zM187,1h1V0h-1v1zM183,1h2V0h-2v1zM179,1h3V0h-3v1zM176,1h1V0h-1v1zM172,1h2V0h-2v1zM168,1h3V0h-3v1zM165,1h1V0h-1v1zM161,1h2V0h-2v1zM157,1h3V0h-3v1zM154,1h1V0h-1v1zM150,1h2V0h-2v1zM146,1h3V0h-3v1zM143,1h1V0h-1v1zM139,1h3V0h-3v1zM136,1h1V0h-1v1zM132,1h2V0h-2v1zM129,1h1V0h-1v1zM125,1h3V0h-3v1zM121,1h2V0h-2v1zM117,1h2V0h-2v1zM113,1h3V0h-3v1zM110,1h1V0h-1v1zM106,1h2V0h-2v1zM104,1h1V0h-1v1zM99,1h3V0h-3v1zM97,1h1V0h-1v1zM92,1h3V0h-3v1zM88,1h2V0h-2v1zM83,1h3V0h-3v1zM81,1h1V0h-1v1zM77,1h2V0h-2v1zM74,1h1V0h-1v1zM70,1h3V0h-3v1zM66,1h2V0h-2v1zM62,1h2V0h-2v1zM60,1h1V0h-1v1zM55,1h3V0h-3v1zM51,1h2V0h-2v1zM49,1h1V0h-1v1zM44,1h3V0h-3v1zM39,1h3V0h-3v1zM37,1h1V0h-1v1zM33,1h2V0h-2v1zM28,1h3V0h-3v1zM26,1h1V0h-1v1zM22,1h2V0h-2v1zM18,1h2V0h-2v1zM14,1h3V0h-3v1zM11,1h1V0h-1v1zM6,1h1V0h-1v1zM3,1h1V0h-1v1zM0,1h2V0h-2v1z"
    }
]

export default function handler(req, res) {

    const {
        query: { id },
      } = req

    const index = mock.findIndex(item => {
        if (item.id == id) {
            return item.id
        }
    });

    if (index > -1) {
        return res.status(200).json(mock[index])
    } else {
        return res.status(404).json({
            "error": "search-0001",
            "message": "Dados nāo encontrados, por favor tente novamente.",
            "detail": "Verifique se os dados digitados estāo corretos",
            "help": ""
        })
    }

}