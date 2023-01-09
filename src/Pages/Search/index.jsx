import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard";
import { Container } from "../../styles/global";
import { Lista } from "./style";
import { useParams } from "react-router-dom";

const apiKey = `cd3083d8751566bac2b4e8c686449f54`;

export default function Search() {
    const [topMovies, setTopMovies] = useState([]);
    const {name} = useParams();

   /*  useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${name}`)
        .then(response => response.json())
        .then(data => setTopMovies(data.results))
    }, [name])
 */

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${name}`;

        getTopRatedMovies(topRatedUrl);
    }, [name])

    return (
        <Container>
            <div className="conteudo">
                <div>
                    <Lista>
                        {topMovies.length > 0 ? topMovies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>)): <h1 style={{textAlign: "center", margin: 'auto'}}>no movie found</h1>}
                    </Lista>
                </div>
            </div>
        </Container>
    );
}