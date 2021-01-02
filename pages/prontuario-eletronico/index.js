
import { useState, useEffect } from 'react';

import "./style.scss"
import Head from 'next/head'

import Header from '../../components/header'
import Footer from '../../components/footer'
import Services from '../../components/services'
import PerfilPaciente from '../../components/perfilPaciente'
import Loader from '../../components/loader'
import Error from '../../components/error'

export default function Home() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const [errorData, setErrorData] = useState({});

  const handleSubmit = () => {
    // TODO: trazer valor ao logar
    const query = 12345678901;

    setLoading(true)
    setError(false)

    setTimeout(()=> {
      setLoading(false)

      fetch(`http://localhost:3000/api/prontuario/${query}`)
      .then(response => response.json())
      .then(res => {

        if (!res.error) {
          setData(res)
        } else {
          setError(true)
          setErrorData(res)
        }

      }).catch(function() {
        console.log("error");
    });

    }, 1000)
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  const exams = data["exames"] !== undefined ? data["exames"] : [];
  
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

            {error && <Error content={errorData} /> }

            {loading ? <Loader /> : 
              <div className="prontuario">
                <PerfilPaciente />

                <div className="medicalRecord">
                  <fieldset>
                    <legend>Anamnese</legend>

                    <div className="field-container">
                      <label htmlFor="fqueixa">Queixa Principal</label>
                      <input type="text" id="fqueixa" name="fqueixa" disabled="disabled" defaultValue={data?.anamnese?.queixa_principal} />
                    </div>

                    <div className="field-container">
                      <label htmlFor="fhistoria">História da doença atual</label>
                      <input type="text" id="fhistoria" name="fhistoria" disabled="disabled" defaultValue={data?.anamnese?.historia_doenca_atual} />
                    </div>

                    <div className="field-container">
                      <label htmlFor="falergias">Alergias</label>
                      <input type="text" id="falergias" name="falergias" disabled="disabled" defaultValue={data?.anamnese?.alergias} />
                    </div>

                    <div className="field-container">
                      <label htmlFor="fmedicamentos">Medicamentos</label>
                      <input type="text" id="fmedicamentos" name="fmedicamentos" disabled="disabled" defaultValue={data?.anamnese?.medicamentos} />
                    </div>

                    <div className="field-container">
                      <label htmlFor="fdoencasAnteriores">Doenças anteriores</label>
                      <input type="text" id="fdoencasAnteriores" name="fdoencasAnteriores" disabled="disabled" defaultValue={data?.anamnese?.doencas_anteriores} />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Exame físico</legend>

                    <div className="field-container half-field">
                      <label htmlFor="fpeso">Peso</label>
                      <input type="text" id="fpeso" name="fpeso" defaultValue={data?.exame_fisico?.peso} disabled="disabled" />
                    </div>

                    <div className="field-container half-field">
                      <label htmlFor="faltura">Altura</label>
                      <input type="text" id="faltura" name="faltura" defaultValue={data?.exame_fisico?.altura} disabled="disabled" />
                    </div>

                    <div className="field-container half-field">
                      <label htmlFor="ftemp">Temperatura</label>
                      <input type="text" id="ftemp" name="ftemp" defaultValue={data?.exame_fisico?.temperatura} disabled="disabled" /> 
                    </div>

                    <div className="field-container half-field">
                      <label htmlFor="fimc">IMC</label>
                      <input type="text" id="fimc" name="fimc" defaultValue={data?.exame_fisico?.imc} disabled="disabled" />
                    </div>

                    <div className="field-container half-field">
                    <label htmlFor="ffrequenciaResp">Frequência respiratória</label>
                      <input type="text" id="ffrequenciaResp" name="ffrequenciaResp" defaultValue={data?.exame_fisico?.frequencia_respiratoria} disabled="disabled" />
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Solicitação de exames</legend>
                      <ul className="list-exams">
                        {exams.map(function(item, index){
                          return <li key={index}>{item.nome}</li>;
                          })}
                      </ul>
                  </fieldset>

                  <div className="container-btns">
                    <button className="btn-form">Solicitar alteração</button>
                  </div>
                </div>
              </div>
            }
        </div>
      </main>

      <Footer />
    </div>
  )
}
