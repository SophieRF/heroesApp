import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { setLoguot } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../hooks/redux";

export const Header = () => {
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(setLoguot());
    };
    return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand >
                <Link to={'/'} className="nav-link">
                Inicio
                </Link>
            </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to={'/search'} className="nav-link">
                        Buscar Héroe
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/dcHeroes'} className="nav-link">
                        DC Héroes
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/marvelHeroes'} className="nav-link">
                        Marvel Héroes
                        </Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end gap-2">
                <Navbar.Text>Ingresado como: Admin</Navbar.Text>
                    <Nav.Item>
                        <div className="d-flex justify-content-center align-items-center"
                        onClick={handleLogout}
                        >
                            <span
                            style={{color: "#fff", cursor: "pointer"}} 
                            className="material-symbols-outlined">
                            logout
                            </span>
                        </div>
                    </Nav.Item>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};
