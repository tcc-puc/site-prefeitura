
import "./style.scss"
import Head from 'next/head'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Services from '../../components/services'
import PatientProfile from '../../components/patientProfile'

export default function Home() {

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

            <div className="prontuario">
              <PatientProfile />

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
                    
                    <ul className="list-exams">
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Hemograma</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Colesterol</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Ureia e Creatinina</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Papanicolau</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Exames de urina</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Exames de fezes</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Glicemia</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">Transaminases</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fname" name="fname" />
                        <label for="fname">TSH e T4 livre</label>
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
                  </div>

                  <div>
                    <strong>Especialidade: Dermatologista</strong>
                    <ul>
                      <li>Data: 25/12/2020</li>
                      <li>Profisisonal: Dr. Joao dos Santos</li>
                      <li>Registro profissional: 123.123.00</li>
                      <li>Tipo de atendimento: Individual</li>
                    </ul>
                  </div>

                </fieldset>
              </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
