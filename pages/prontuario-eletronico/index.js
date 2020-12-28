
import { useState } from 'react';
import "./style.scss"
import Head from 'next/head'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Services from '../../components/services'
import Loader from '../../components/loader'
import Error from '../../components/error'
import ListaConvenios from '../../components/listaConvenios'

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [convenios, setConvenios] = useState(false);
  const [data, setData] = useState({});
  const [errorData, setErrorData] = useState({});

  const handleSubmit = (action) => {

    setLoading(true)
    setError(false)
    setConvenios(false)

    setTimeout(()=> {

      setLoading(false)

      fetch(`http://localhost:3000/api/transparencia/${action}`)
      .then(response => response.json())
      .then(res => {

        if (!res.error) {
          setData(res)

          if (action === "convenios") {
            setConvenios(true)
          } else if (action === "licitacoes") {
            setLicitacoes(true)
          }

        } else {
          setError(true)
          setErrorData(res)
        }

      }).catch(function() {
        console.log("error");
    });

    }, 2000)
  }

  return (
    <div className="container">
      <Head>
        <title>Prefeitura de Bom Destino - Prontuário Eletrônico</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Services />

      <main>
        <div className="grid">
            <h1>Prontuário Eletrônico</h1>
            <p>O Prontuário Eletrônico do Cidadão é um software onde todas as informações clínicas e administrativas do paciente ficam armazenadas, tendo como principal objetivo informatizar o fluxo de atendimento do cidadão realizado pelos profissionais de saúde das unidades de antendimento da Prefeitura de Bom Destino.</p>

            {/* 1. Fazer area de login, para acesso apenas de penos autorizadas*/}
            {/* 2. Fazer table de prontuario */}
            {/* <ul>
                <li onClick={() => handleSubmit('convenios')}>Em breve</li>
            </ul> */}

            <div className="prontuario">
              <fieldset className="patientData">
                <legend>Dados do paciente</legend>

                <FontAwesomeIcon icon={faUser} color="#4f5d75" className="icon-user" />

                <div className="field-container">
                  <label for="fname">Nome</label>
                  <input type="text" id="fname" name="fname" value="Karol Harumi" />
                </div>

                <div className="field-container">
                  <label for="fname">Idade</label>
                  <input type="text" id="fname" name="fname" value="29 anos (19/10/1991)" />
                </div>

                <div className="field-container">
                  <label for="fname">Celular</label>
                  <input type="text" id="fname" name="fname" value="(11) 96966-0123" />
                </div>

                <div className="field-container">
                  <label for="fname">CEP</label>
                  <input type="text" id="fname" name="fname" value="08230-030" />
                </div>

                <div className="field-container">
                  <label for="fname">Endereço</label>
                  <input type="text" id="fname" name="fname" value="Jardim Fagundes" />
                </div>

                <div className="field-container">
                  <label for="fname">Número</label>
                  <input type="text" id="fname" name="fname" value="123" />
                </div>

                <div className="field-container">
                  <label for="fname">Complemento</label>
                  <input type="text" id="fname" name="fname" value="Bloco 5 Apto 122" />
                </div>

                <div className="field-container">
                  <label for="fname">CPF</label>
                  <input type="text" id="fname" name="fname" value="000.000.000-00" />
                </div>

                <div className="field-container">
                  <label for="fname">Sexo</label>
                  <input type="text" id="fname" name="fname" value="M" />
                </div>

                <div className="field-container">
                  <label for="fname">Observação</label>
                  <input type="text" id="fname" name="fname" value="-" />
                </div>

                <div className="field-container">
                  <label for="fname">Alergias</label>
                  <textarea type="text" id="fname" name="fname" value="Rinite" />
                </div>

                <div className="field-container">
                  <label for="fname">Medicamentos</label>
                  <textarea type="text" id="fname" name="fname" value="Medicamento 1 e Medicamento 2" />
                </div>
              </fieldset>

              <div className="medicalRecord">
                <fieldset>
                  <legend>Anamnese</legend>

                  <div className="field-container">
                    <label for="fname">Queixa Principal</label>
                    <input type="text" id="fname" name="fname" />
                  </div>

                  <div className="field-container">
                    <label for="fname">História da doença atual</label>
                    <input type="text" id="fname" name="fname" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Alergias</label>
                    <input type="text" id="fname" name="fname" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Medicamentos</label>
                    <input type="text" id="fname" name="fname" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Doenças anteriores</label>
                    <input type="text" id="fname" name="fname" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Exame físico</legend>

                  <div className="field-container">
                    <label for="fname">Peso</label>
                    <input type="text" id="fname" name="fname" value="58 kg" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Altura</label>
                    <input type="text" id="fname" name="fname" value="164 cm" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Temperatura</label>
                    <input type="text" id="fname" name="fname" value="36" /> 
                  </div>

                  <div className="field-container">
                    <label for="fname">IMC</label>
                    <input type="text" id="fname" name="fname" value="-" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Frequência respiratória</label>
                    <input type="text" id="fname" name="fname" value="50.00 rpm" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Solicitação de exames</legend>

                  <div className="field-container">
                    <label for="fname">Exames</label>
                    
                    <ul>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Sangue</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Urina</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Fezes</label>
                      </li>
                    </ul>
                  </div>

                  <div className="field-container">
                    <label for="fname">Outros</label>
                    <textarea type="text" id="fname" name="fname" value="Exame XPTO" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Histórico de atendimentos</legend>

                  <div>
                    <strong>Especialidade: Dermatologista</strong>
                    <ul>
                      <li>Data: 25/12/2020</li>
                      <li>Profisisonal: Dr. Joao dos Santos</li>
                      <li>Registro profissional: 123.123.00</li>
                      <li>Tipo de atendimento: Individual</li>
                    </ul>

                    <hr />
                  </div>

                  <div>
                    <strong>Especialidade: Dermatologista</strong>
                    <ul>
                      <li>Data: 25/12/2020</li>
                      <li>Profisisonal: Dr. Joao dos Santos</li>
                      <li>Registro profissional: 123.123.00</li>
                      <li>Tipo de atendimento: Individual</li>
                    </ul>

                    <hr />
                  </div>

                  <div>
                    <strong>Especialidade: Dermatologista</strong>
                    <ul>
                      <li>Data: 25/12/2020</li>
                      <li>Profisisonal: Dr. Joao dos Santos</li>
                      <li>Registro profissional: 123.123.00</li>
                      <li>Tipo de atendimento: Individual</li>
                    </ul>

                    <hr />
                  </div>

                </fieldset>
              </div>
            </div>

            {loading && <Loader /> }
            {error && <Error content={errorData} /> }

            { convenios && <ListaConvenios content={data} /> }

        </div>
      </main>

      <Footer />
    </div>
  )
}
