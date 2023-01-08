import { NavLink, Outlet, useNavigate} from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { HeaderBox } from "./styles";
import { useState } from "react";

export default function Header() {
    const [film, setFilm] = useState('');

    let navigate = useNavigate();

    function handleNewPage(e) {
        event.preventDefault();
        navigate(`search/${film}`)
    }
    return (
        <>
            <HeaderBox>
                <header>
                    <div className="logo">
                        <NavLink to="/"><BiCameraMovie size={60}/></NavLink>
                        <p>MoviesLib</p>
                    </div>
                    <div className="navegacao">
                        <nav>
                            <ul>
                                <li><NavLink to='/'>HOME</NavLink></li>
                                <li><NavLink to='/TopRated'>TOP RATED</NavLink></li>
                                <li><NavLink to='/Popular'>POPULAR</NavLink></li>
                            </ul>
                        </nav>
                        <form onSubmit={() => handleNewPage()}>
                            <input type="text" placeholder="search for a movie" value={film} onChange={() => setFilm(event.target.value)}/>
                            <button type="submit"><BiSearchAlt2/></button>
                        </form>
                    </div>
                </header>
            </HeaderBox>
            <Outlet/>
        </>
    );
}