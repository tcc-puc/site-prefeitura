
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
                    <input type="text" id="fname" name="fname" disabled="disabled" value="Dores constantes de cabeça" />
                  </div>

                  <div className="field-container">
                    <label for="fname">História da doença atual</label>
                    <input type="text" id="fname" name="fname" disabled="disabled" value="N/A" />
                  </div>

                  <div className="field-container">
                    <label for="fallergies">Alergias</label>
                    <input type="text" id="fallergies" name="fallergies" disabled="disabled" value="-" />
                  </div>

                  <div className="field-container">
                    <label for="fmedicines">Medicamentos</label>
                    <input type="text" id="fmedicines" name="fmedicines" disabled="disabled" value="-" />
                  </div>

                  <div className="field-container">
                    <label for="fname">Doenças anteriores</label>
                    <input type="text" id="fname" name="fname" disabled="disabled" value="-" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Exame físico</legend>

                  <div className="field-container half-field">
                    <label for="fweight">Peso</label>
                    <input type="text" id="fweight" name="fweight" value="58 kg" disabled="disabled" />
                  </div>

                  <div className="field-container half-field">
                    <label for="fheight">Altura</label>
                    <input type="text" id="fheight" name="fheight" value="164 cm" disabled="disabled" />
                  </div>

                  <div className="field-container half-field">
                    <label for="ffever">Temperatura</label>
                    <input type="text" id="ffever" name="ffever" value="36" disabled="disabled" /> 
                  </div>

                  <div className="field-container half-field">
                    <label for="fimc">IMC</label>
                    <input type="text" id="fimc" name="fimc" value="-" disabled="disabled" />
                  </div>

                  <div className="field-container half-field">
                    <label for="frespiratory">Frequência respiratória</label>
                    <input type="text" id="frespiratory" name="frespiratory" value="50.00 rpm" disabled="disabled" />
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Solicitação de exames</legend>

                  <div className="field-container">
                    <label for="fexam01">Exames</label>
                    
                    <ul className="list-exams">
                      <li>
                        <input type="checkbox" id="fexam01" name="fexam01" checked="checked" disabled="disabled" />
                        <label for="fexam01">Hemograma</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam02" name="fexam02" checked="checked" disabled="disabled" />
                        <label for="fexam02">Colesterol</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam03" name="fexam03" disabled="disabled" />
                        <label for="fexam03">Ureia e Creatinina</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam04" name="fexam04" disabled="disabled" />
                        <label for="fexam04">Papanicolau</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam05" name="fexam05" checked="checked" disabled="disabled" />
                        <label for="fexam05">Exames de urina</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam06" name="fexam06" disabled="disabled" />
                        <label for="fexam06">Exames de fezes</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam07" name="fexam07" checked="checked" disabled="disabled" />
                        <label for="fexam07">Glicemia</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam08" name="fexam08" disabled="disabled" />
                        <label for="fexam08">Transaminases</label>
                      </li>
                      <li>
                        <input type="checkbox" id="fexam09" name="fexam09" disabled="disabled" />
                        <label for="fexam09">TSH e T4 livre</label>
                      </li>
                    </ul>
                  </div>
                </fieldset>

                <div className="container-btns">
                  <button className="btn-form">Solicitar alteração</button>
                </div>
              </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
