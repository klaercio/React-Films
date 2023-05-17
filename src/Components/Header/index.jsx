import { NavLink, Outlet, useNavigate} from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { HeaderBox, ListBotao, CloseList} from "./styles";
import { useState } from "react";
import ButtonToTop from "../ButtonToTop";
import classNames from "classnames";

export default function Header() {
    const [film, setFilm] = useState('');
    const [showMenu, setShowMenu] = useState(false);

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

    function opemMenu(visivel) {
        setShowMenu(visivel);
    }

    const altura = window.screen.height;

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
                    <div className="menuBotao">{showMenu === true? <CloseList onClick={() => opemMenu(false)}/>: <ListBotao onClick={() => opemMenu(true)}/>}</div>
                    <div className={classNames({
                        ["menuMobile"]: true,
                        ["mostrarMenu"]: showMenu,
                    })} altura={altura}>
                        <nav>
                            <ul>
                                <li><NavLink to='/' onClick={() => setShowMenu(false)}>HOME</NavLink></li>
                                <li><NavLink to='/TopRated' onClick={() => setShowMenu(false)}>TOP RATED</NavLink></li>
                                <li><NavLink to='/Popular' onClick={() => setShowMenu(false)}>POPULAR</NavLink></li>
                            </ul>
                        </nav>
                        <form onSubmit={() => handleNewPage()}>
                            <input type="text" placeholder="search for a movie" value={film} onChange={handleSearchFilme}/>
                            <button type="submit" onClick={() => setShowMenu(false)}><BiSearchAlt2/></button>
                        </form>
                    </div>
                </header>
            </HeaderBox>
            <Outlet/>
        </>
    );
}