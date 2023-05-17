import { NavLink, Outlet, useNavigate} from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { HeaderBox, ListBotao } from "./styles";
import { useState } from "react";

export default function Header() {
    const [film, setFilm] = useState('');

    let navigate = useNavigate();

    function handleNewPage() {
        event.preventDefault();
        film && navigate(`search/${film}`)
    }

    function handleSearchFilme() {
        let search = event.target.value;
        setFilm(search);
        search === '' ? navigate('/') : navigate(`search/${search}`);
    }
    return (
        <>
            <HeaderBox>
                <header>
                    <div className="logo">
                        <NavLink to="/"><BiCameraMovie size={60}/></NavLink>
                        <span>MoviAll</span>
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
                            <input type="text" placeholder="search for a movie" value={film} onChange={handleSearchFilme}/>
                            <button type="submit"><BiSearchAlt2/></button>
                        </form>
                    </div>
                    <div className="menuBotao"><ListBotao/></div>
                </header>
            </HeaderBox>
            <Outlet/>
        </>
    );
}