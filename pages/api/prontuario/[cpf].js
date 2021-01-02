const mock = [
    {
        "id": 0,
        "inscricao": "0000123",
        "nome": "Maria da Silva",
        "nascimento": "19/02/1991",
        "celular": "(11) 96966-0123",
        "genero": "F",
        "cpf": 12345678901,
        "observacao": "-",
        "endereco": {
            "logradouro": "Rua Mario Luigi Souza",
            "cep": "08230-030",
            "bairro": "Campo Alegre",
            "uf": "MG",
            "numero": "123",
            "complemento": "-",
        },
        "anamnese": {
            "queixa_principal": "Dores constantes de cabeça",
            "historia_doenca_atual": "N/C",
            "alergias": "N/C",
            "medicamentos": "N/C",
            "doencas_anteriores": "N/C",
        },
        "exame_fisico": {
            "peso": "58 kg",
            "altura": "164 cm",
            "temparatura": "36",
            "imc": "21.6 kg/m2",
            "frequencia_respiratoria": "50.00 bpm"
        },
        "exames": [
            {
                "nome": "Hemograma"
            },
            {
                "nome": "Colesterol"
            },
            {
                "nome": "Papanicolau"
            },
            {
                "nome": "Glicemia"
            },
            {
                "nome": "Transaminases"
            }
        ]
    },
    {
        "id": 1,
        "inscricao": "0000124",
        "nome": "João dos Santos",
        "nascimento": "21/11/1962",
        "celular": "(11) 93213-4567",
        "genero": "M",
        "cpf": 10987654321,
        "observacao": "-",
        "endereco": {
            "logradouro": "Rua Fagundes Varela",
            "cep": "08230-030",
            "bairro": "Jardim Tupan",
            "uf": "SP",
            "numero": "543",
            "complemento": "-",
        },
        "anamnese": {
            "queixa_principal": "Dores constantes de cabeça",
            "historia_doenca_atual": "N/C",
            "alergias": "N/C",
            "medicamentos": "N/C",
            "doencas_anteriores": "N/C",
        },
        "exame_fisico": {
            "peso": "85 kg",
            "altura": "178 cm",
            "temparatura": "36.2",
            "imc": "26.8 kg/m2",
            "frequencia_respiratoria": "54.00 bpm"
        },
        "exames": [
            {
                "nome": "Hemograma",
            },
            {
                "nome": "Colesterol",
            },
            {
                "nome": "Ureia e Creatinina",
            },
            {
                "nome": "Exames de urina",
            },
            {
                "nome": "Exames de fezes",
            },
            {
                "nome": "Glicemia",
            }
        ]
    },
]

export default function handler(req, res) {

    const {
        query: { cpf },
      } = req

    const index = mock.findIndex(item => {
        if (item.cpf == cpf) {
            return item.cpf
        }
    });

    if (index > -1) {
        return res.status(200).json(mock[index])
    } else {
        return res.status(404).json({
            "error": "search-0001",
            "message": "Usuário nāo encontrados, por favor tente novamente.",
            "detail": "Verifique se os dados digitados estāo corretos",
            "help": ""
        })
    }

}