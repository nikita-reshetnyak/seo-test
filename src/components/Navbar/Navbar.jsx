import { Link } from "react-router-dom";

const Navbar =() => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" >
                    Главная
                </Link>
                {' '}
                <Link to="/list" >
                    Список
                </Link>
            </li>
        </ul>
    </nav>
  )
};
export default Navbar;