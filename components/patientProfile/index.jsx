import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.scss"

export default function PatientProfile() {
    return (
        <fieldset className="patient-profile">
        <legend>Dados do paciente</legend>

        <FontAwesomeIcon icon={faUser} color="#ef8354" className="icon-user" />

        <div className="field-container">
          <label for="fname">Número de inscrição</label>
          <input type="text" id="fname" name="fname" value="000123" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Nome</label>
          <input type="text" id="fname" name="fname" value="Karol Harumi" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Idade</label>
          <input type="text" id="fname" name="fname" value="29 anos (19/10/1991)" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Celular</label>
          <input type="text" id="fname" name="fname" value="(11) 96966-0123" />
        </div>

        <div className="field-container">
          <label for="fname">CEP</label>
          <input type="text" id="fname" name="fname" value="08230-030" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Endereço</label>
          <input type="text" id="fname" name="fname" value="Jardim Fagundes" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Número</label>
          <input type="text" id="fname" name="fname" value="123" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Complemento</label>
          <input type="text" id="fname" name="fname" value="Bloco 5 Apto 122" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">CPF</label>
          <input type="text" id="fname" name="fname" value="000.000.000-00" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Sexo</label>
          <input type="text" id="fname" name="fname" value="F" disabled="disabled" />
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
    )
  }