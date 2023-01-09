import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Details from "./Pages/Details";
import Search from './Pages/Search'
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import TopRated from "./Pages/TopRated";

export default function Router() {
    return (
        <Routes>
            <Route element={<Header/>}>
                <Route index element={<Home/>}/>
                <Route path='details/:id' element={<Details/>}/>
                <Route path='TopRated' element={<TopRated/>}/>
                <Route path='search/:name' element={<Search/>}/>
                <Route path='Popular' element={<Popular/>}/>
            </Route>
        </Routes>
    );
}