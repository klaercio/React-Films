import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Details from "./Pages/Details";
import Search from './Pages/Search'
import Home from "./Pages/Home";

export default function Router() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route path="/" element={<Home/>}/>
                <Route path='details/:id' element={<Details/>}/>
                <Route path='search/:id' element={<Search/>}/>
            </Route>
        </Routes>
    );
}