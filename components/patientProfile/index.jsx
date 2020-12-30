import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.scss"

export default function PatientProfile() {
    return (
        <fieldset className="patient-profile">
        <legend>Dados do paciente</legend>

        <FontAwesomeIcon icon={faUser} color="#ef8354" className="icon-user" />

        <div className="field-container">
          <label for="fid">Número de inscrição</label>
          <input type="text" id="fid" name="fid" value="000123" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fname">Nome</label>
          <input type="text" id="fname" name="fname" value="Karol Harumi" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fage">Idade</label>
          <input type="text" id="fage" name="fage" value="29 anos (19/10/1991)" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fphone">Celular</label>
          <input type="text" id="fphone" name="fphone" value="(11) 96966-0123" />
        </div>

        <div className="field-container">
          <label for="fzipcode">CEP</label>
          <input type="text" id="fzipcode" name="fzipcode" value="08230-030" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="faddress">Endereço</label>
          <input type="text" id="faddress" name="faddress" value="Jardim Fagundes" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fnumber">Número</label>
          <input type="text" id="fnumber" name="fnumber" value="123" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fcomplement">Complemento</label>
          <input type="text" id="fcomplement" name="fcomplement" value="Bloco 5 Apto 122" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fpersonalid">CPF</label>
          <input type="text" id="fpersonalid" name="fpersonalid" value="000.000.000-00" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fgender">Sexo</label>
          <input type="text" id="fgender" name="fgender" value="F" disabled="disabled" />
        </div>

        <div className="field-container">
          <label for="fobservation">Observação</label>
          <input type="text" id="fobservation" name="fobservation" value="-" />
        </div>

        <div className="field-container">
          <label for="fallergies">Alergias</label>
          <textarea type="text" id="fallergies" name="fallergies" value="Rinite" />
        </div>

        <div className="field-container">
          <label for="fmedicines">Medicamentos</label>
          <textarea type="text" id="fmedicines" name="fmedicines" value="Medicamento 1 e Medicamento 2" />
        </div>
      </fieldset>
    )
  }