import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.scss"

export default function PerfilPaciente() {
    return (
        <fieldset className="patient-profile">
        <legend>Dados do paciente</legend>

        <FontAwesomeIcon icon={faUser} color="#ef8354" className="icon-user" />

        <div className="field-container">
          <label htmlFor="finscricao">Número de inscrição</label>
          <input type="text" id="finscricao" name="finscricao" defaultValue="000123" disabled="disabled" />
        </div>
        
        <div className="field-container">
          <label htmlFor="fnome">Nome</label>
          <input type="text" id="fnome" name="fnome" defaultValue="Maria da Silva" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fidade">Idade</label>
          <input type="text" id="fidade" name="fidade" defaultValue="29 anos (19/02/1991)" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fcelular">Celular</label>
          <input type="text" id="fcelular" name="fcelular" defaultValue="(11) 96966-0123" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fcep">CEP</label>
          <input type="text" id="fcep" name="fcep" defaultValue="08230-030" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fendereco">Endereço</label>
          <input type="text" id="fendereco" name="fendereco" defaultValue="Jardim Fagundes" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fenderecoNum">Número</label>
          <input type="text" id="fenderecoNum" name="fenderecoNum" defaultValue="123" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fenderecoComp">Complemento</label>
          <input type="text" id="fenderecoComp" name="fenderecoComp" defaultValue="Bloco 5 Apto 122" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fcpf">CPF</label>
          <input type="text" id="fcpf" name="fcpf" defaultValue="000.000.000-00" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fgenero">Gênero</label>
          <input type="text" id="fgenero" name="fgenero" defaultValue="F" disabled="disabled" />
        </div>

        <div className="field-container">
          <label htmlFor="fobservacao">Observação</label>
          <input type="text" id="fobservacao" name="fobservacao" defaultValue="-" disabled="disabled" />
        </div> 
      </fieldset>
    )
  }