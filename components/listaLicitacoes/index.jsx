import "./style.scss"

export default function ListaLicitacoes(list) {

  const info = list["content"]

    return (
      <div className="scroll">
        <table>
            <tr>
                <td>DATA DE RESULTADO DA COMPRA</td>
                <td>DATA DE ABERTURA</td>
                <td>ÓRGÃO SUPERIOR LICITANTE</td>
                <td>ÓRGÃO / ENTIDADE VINCULADA LICITANTE</td>
                <td>UNIDADE GESTORA	SITUAÇÃO</td>
                <td>MODALIDADE DA LICITAÇÃO	INSTRUMENTO LEGAL DE CONTRATAÇÃO</td>
                <td>NÚMERO DA LICITAÇÃO</td>
                <td>OBJETO DA LICITAÇÃO</td>
            </tr>

            {info.map(function(item, index){
                return <tr key={ index }>
                        <td>{item.dataResultadoCompra}</td>
                        <td>{item.dataAbertura}</td>
                        <td>{item.orgaoSuperiorLicitante}</td>
                        <td>{item.EntidadeVinculada}</td>
                        <td>{item.unidadeGestora}</td>
                        <td>{item.instrumentoLegal}</td>
                        <td>{item.numeroLicitacao}</td>
                        <td>{item.objeto}</td>
                    </tr>;
            })}

        </table>
      </div>
    )
  }