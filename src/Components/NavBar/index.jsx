import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { Header } from "./styles";

export default function NavBar() {
    return <>
        <Header>
            <nav id="navbar">
                <h2>
                    <Link to="/"><BiCameraMovie/>MoviesLib</Link>
                </h2>
                <form>
                    <input type="text" placeholder="Busque um filme" />
                    <button type="submit"><BiSearchAlt2/></button>
                </form>
            </nav>
        </Header>
    </>
}