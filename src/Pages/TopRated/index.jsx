import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard";
import { Container } from "../../styles/global";
import { Lista } from "./style";

const apiKey = `cd3083d8751566bac2b4e8c686449f54`;
export default function TopRated() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    }, [])

    return (
        <Container>
            <div className="conteudo">
                <div>
                    <Lista>
                        {movies && movies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                    </Lista>
                </div>
            </div>
        </Container>
    );
}