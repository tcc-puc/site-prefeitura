import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.scss"

export default function PerfilPaciente(data) {
  const info = data.content;

    return (
        <fieldset className="patient-profile">
        <legend>Dados do paciente</legend>

        <FontAwesomeIcon icon={faUser} color="#ef8354" className="icon-user" />

        <div className="field-container">
          <label htmlFor="finscricao">Número de inscrição</label>
          <input type="text" id="finscricao" name="finscricao" defaultValue={info.inscricao} disabled={true} />
        </div>
        
        <div className="field-container">
          <label htmlFor="fnome">Nome</label>
          <input type="text" id="fnome" name="fnome" defaultValue={info.nome} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fidade">Idade</label>
          <input type="text" id="fidade" name="fidade" defaultValue={info.nascimento} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fcelular">Celular</label>
          <input type="text" id="fcelular" name="fcelular" defaultValue={info.celular} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fcep">CEP</label>
          <input type="text" id="fcep" name="fcep" defaultValue={info.endereco?.cep} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fendereco">Endereço</label>
          <input type="text" id="fendereco" name="fendereco" defaultValue={info.endereco?.logradouro} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fenderecoNum">Número</label>
          <input type="text" id="fenderecoNum" name="fenderecoNum" defaultValue={info.endereco?.numero} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fenderecoComp">Complemento</label>
          <input type="text" id="fenderecoComp" name="fenderecoComp" defaultValue={info.endereco?.complemento} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fcpf">CPF</label>
          <input type="text" id="fcpf" name="fcpf" defaultValue={info.cpf} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fgenero">Gênero</label>
          <input type="text" id="fgenero" name="fgenero" defaultValue={info.genero} disabled={true} />
        </div>

        <div className="field-container">
          <label htmlFor="fobservacao">Observação</label>
          <input type="text" id="fobservacao" name="fobservacao" defaultValue={info.observacao} disabled={true} />
        </div> 
      </fieldset>
    )
  }