import "./style.scss"

export default function ListaConvenios(list) {

  const info = list["content"]

    return (
      <div className="scroll">
        <table>
            <tr>
              <td>NÚMERO</td>
              <td>UF</td>
              <td>MUNICÍPIO</td>
              <td>SITUAÇÃO</td>
              <td>TIPO DE INSTRUMENTO</td>
              <td>OBJETO</td>
              <td>ÓRGÃO SUPERIOR</td>
              <td>ÓRGÃO/ENTIDADE VINCULADA</td>
              <td>CONCEDENTE</td>
              <td>CONVENENTE</td>
              <td>DATA DE INÍCIO DA VIGÊNCIA</td>
              <td>DATA DE FIM DA VIGÊNCIA</td>
              <td>VALOR LIBERADO</td>
              <td>VALOR CELEBRADO</td>
            </tr>

            {info.map(function(item, index){
                return <tr key={ index }>
                        <td>{item.numero}</td>
                        <td>{item.uf}</td>
                        <td>{item.municipio}</td>
                        <td>{item.situacao}</td>
                        <td>{item.tipoInstrumento}</td>
                        <td>{item.objeto}</td>
                        <td>{item.orgaoSuperior}</td>
                        <td>{item.entidadeVisculada}</td>
                        <td>{item.concedente}</td>
                        <td>{item.convenente}</td>
                        <td>{item.dataInicio}</td>
                        <td>{item.dataFim}</td>
                        <td>{item.valorLiberado}</td>
                        <td>{item.valorCelebrado}</td>
                    </tr>;
            })}
        </table>
      </div>
    )
  }