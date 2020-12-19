import "./style.scss"

export default function Header() {
    return (
      <header>
          <div className="wrapper">
            <h1>
                <a href="/">
                    <img src="/logo_bom_destino.png" alt="Prefeitura de Bom Destino" width="280" height="55" />
                </a>
            </h1>

            <nav className="menu">
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/">Serviços</a></li>
                    <li><a href="/">Gestão</a></li>
                    <li><a href="/">Cidade</a></li>
                </ul>
            </nav>
          </div>
    </header>
    )
  }