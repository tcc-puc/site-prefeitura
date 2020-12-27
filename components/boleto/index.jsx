import "./style.scss"

export default function Boleto(data) {

    const info = data["content"]

    return (
      <>
        <section className="boleto scroll">
        <div className="wrapper">
            <table>
                <tr>
                    <td>
                        <img src="/logo_bom_destino.png" alt="Prefeitura de Bom Destino" width="250" height="55" />
                    </td>
                    <td>
                        <h2>Prefeitura Municipal de Bom Destino</h2>
                        <h2>Secretaria Municipal de Finanças</h2>
                    </td>
                </tr>
            </table>
          </div>
          <div className="wrapper">
            <table>
                <tr>
                    <td>
                        <b>inscrição</b>
                        <span className="label">{info.inscricao}</span>
                    </td>
                    <td>
                        <b>cód. logr.</b>
                        <span className="label">{info.codigoLogradouro}</span>
                    </td>
                    <td>
                        <b>tributo</b>
                        <span className="label">{info.tributo}</span>
                    </td>
                </tr>
            </table>
          </div>
          <div className="wrapper">
            <table>
                <tr>
                    <td>
                        <b>proprietário</b>
                        <span className="label">{info.proprietario.nome}</span>
                    </td>
                </tr>
            </table>
          </div>
          <div className="wrapper">
            <table>
                <tr>
                    <td>
                        <b>endereço para notificaçāo</b>
                        <span className="label">{info.endereco.logradouro}</span><br />
                        <span className="label">{info.endereco.cep} {info.endereco.bairro} {info.endereco.uf}</span>
                    </td>
                </tr>
            </table>
          </div>
          <div className="wrapper">
            <table>
                <tr>
                    <td>
                        <b>localização do imóvel</b>
                        <span className="label">{info.localizacao.logradouro}</span><br />
                        <span className="label">{info.localizacao.bairro}</span>
                    </td>
                </tr>
            </table>
          </div>
          <div className="wrapper">
            <table>
                <tr>
                    <td colspan="2" className="borderBottom borderRight">
                        <h2>dados do terreno</h2>
                    </td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>área do terreno</b>
                        <span className="label">{info.terreno.area}</span>
                    </td>
                    <td className="borderBottom borderRight"></td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>características</b>
                        <span className="label">{info.terreno.caracteristicas}</span>
                    </td>
                    <td className="borderBottom borderRight">
                        <b>situação</b>
                        <span className="label">{info.terreno.situacao}</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>limitação</b>
                        <span className="label">{info.terreno.limitacao}</span>
                    </td>
                    <td className="borderBottom borderRight">
                        <b>pedologia</b>
                        <span className="label">{info.terreno.pedologia}</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderRight borderBottom">
                        <b>topografia</b>
                        <span className="label">{info.terreno.topografia}</span>
                    </td>
                    <td className="borderRight borderBottom">
                        <b>configuração</b>
                        <span className="label">{info.terreno.configuracao}</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderRight borderBottom">
                        <b>&nbsp;</b>
                        <span className="label">&nbsp;</span>
                    </td>
                    <td className="borderBottom borderRight">
                        <b>&nbsp;</b>
                        <span className="label">&nbsp;</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderRight">
                        <b>&nbsp;</b>
                        <span className="label">&nbsp;</span>
                    </td>
                    <td className="borderRight">
                        <b>&nbsp;</b>
                        <span className="label">&nbsp;</span>
                    </td>
                </tr>
            </table>
            <table>
                <tr>
                    <td colspan="2" className="borderBottom">
                        <h2>dados da edificação</h2>
                    </td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>área da unidade</b>
                        <span className="label">{info.edificacao.area}</span>
                    </td>
                    <td className="borderBottom"></td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>características</b>
                        <span className="label">&nbsp;</span>
                    </td>
                    <td className="borderBottom">
                        <b>situação</b>
                        <span className="label">&nbsp;</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>utilização</b>
                        <span className="label">&nbsp;</span>
                    </td>
                    <td className="borderBottom">
                        <b>revestimento</b>
                        <span className="label">&nbsp;</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>est. da construção</b>
                        <span className="label">&nbsp;</span>
                    </td>
                    <td className="borderBottom">
                        <b>sit. imóvel</b>
                        <span className="label">&nbsp;</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderBottom borderRight">
                        <b>zona fiscal</b>
                        <span className="label">{info.edificacao.zonaFiscal}</span>
                    </td>
                    <td className="borderBottom">
                        <b>&nbsp;</b>
                        <span className="label">&nbsp;</span>
                    </td>
                </tr>
                <tr>
                    <td className="borderRight">
                        <b>valor venal</b>
                        <span className="label">{info.edificacao.valorRenal}</span>
                    </td>
                    <td>
                        <b>alíquota</b>
                        <span className="label">{info.edificacao.aliquota}</span>
                    </td>
                </tr>
            </table>
          </div>
          <div className="wrapper center">
            <svg xmlns="http://www.w3.org/2000/svg" height="130" viewBox="0 0 320 80" fill="#000000" shape-rendering="crispEdges" version="1.1"><path transform="matrix(0.5072,0,0,48.0000,20,16)" d={info.codigoBarras}/></svg>
        </div>
        </section>
      </>
    )
  }