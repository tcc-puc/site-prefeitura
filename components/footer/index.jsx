import "./style.scss"

export default function Footer() {
    return (
      <>
        <footer>
          <div className="wrapper">
            <div className="content">
              <p>Rua Alfredo Chaves, 987 <br />
              Bom Destino, MG — CEP 95020-460</p>
              <p>(54) 3218-6000 — <a href="javascript:void(0)">contato@bomdestino.gov.br</a></p>
            </div>
            <div className="content">
            <p>© 2020 Prefeitura de Bom Destino <br />
              <a href="javascript:void(0)">Sobre o portal</a>
            </p>
            </div>
          </div>
        </footer>
      </>
    )
  }