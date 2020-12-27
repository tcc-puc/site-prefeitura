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

            <span className="menu-link">
                <label htmlFor="fldMenu">
                    <FontAwesomeIcon icon={faBars} color="#4f5d75" />
                </label>
                
                <input type="checkbox"  id="fldMenu" />

                <nav className="menu">
                    <ul>
                        <li><a href="/">Início</a></li>
                        <li><a href="/">Serviços</a></li>
                        <li><a href="/">Gestão</a></li>
                        <li><a href="/">Cidade</a></li>
                        <li>
                        <a href="#" className="acessibility-link">
                            <FontAwesomeIcon icon={faWheelchair} color="#4f5d75" />
                        </a>
                        </li>
                    </ul>
                </nav>
            </span>

          </div>
    </header>
    )
  }