import './index.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="/logo.png" alt="logo" />
      </a>
      <ul className="navbar-nav">
        <li>
          <a href="/signup" className="nav-link">
            <span className="link-text">Criar Conta</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            <span className="link-text">Entrar</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
