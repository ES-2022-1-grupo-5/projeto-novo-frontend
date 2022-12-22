import { AppRoutes } from '../../routes';
import './index.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href={AppRoutes.HOME} className="logo">
        <img src="/logo.png" alt="logo" />
      </a>
      <ul className="navbar-nav">
        <li>
          <a href={AppRoutes.SIGNUP} className="nav-link">
            <span className="link-text">Criar Conta</span>
          </a>
        </li>
        <li className="nav-item">
          <a href={AppRoutes.SIGNIN} className="nav-link">
            <span className="link-text">Entrar</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
