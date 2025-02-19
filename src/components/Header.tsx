import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/restaurants">Restaurantes</Link></li>
          <li><Link to="/cart">Carrinho</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

