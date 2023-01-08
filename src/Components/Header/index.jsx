import { NavLink, Outlet } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';
import { HeaderBox } from "./styles";

export default function Header() {
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
                        <form onSubmit='#'>
                            <input type="text" placeholder="search for a movie" />
                            <button type="submit"><BiSearchAlt2/></button>
                        </form>
                    </div>
                </header>
            </HeaderBox>
            <Outlet/>
        </>
    );
}