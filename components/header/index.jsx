import { faWheelchair, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.scss"

export default function Header() {
    return (
      <header>
          <div className="wrapper">
            <h1>
                <a href="/" className="logo">
                    <img src="/logo_bom_destino.png" alt="Prefeitura de Bom Destino" width="280" height="55" />
                </a>
            </h1>

            <div className="container-menu">
                <label htmlFor="fldMenu" className="menu-link">
                    <FontAwesomeIcon icon={faBars} color="#4f5d75" />
                </label>
                
                <input type="checkbox"  id="fldMenu" />

                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Cidadão</a></li>
                        <li><a href="/">Educação</a></li>
                        <li><a href="/">Saúde</a></li>
                        <li><a href="/">Ambiente</a></li>
                        <li><a href="/">Agropecuária</a></li>
                        <li><a href="/">Comércio</a></li>
                        <li><a href="/">Lazer e Turismo</a></li>
                        <li><a href="/">Fale Conosco</a></li>
                        <li>
                        <a href="#" className="acessibility-link">
                            <FontAwesomeIcon icon={faWheelchair} color="#4f5d75" />
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>

          </div>
    </header>
    )
  }