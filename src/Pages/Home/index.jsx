import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard";
import { Container } from "../../styles/global";
import { Lista } from "./style";

const apiKey = `cd3083d8751566bac2b4e8c686449f54`;

export default function Home({name}) {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results)
        setTopMovies(data.results);
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => setTopMovies(data.results))
    }, [])

    return (
        <Container>
            <div className="conteudo">
                <div>
                    <Lista>
                        {topMovies && topMovies.map((movie) => (<MovieCard movie={movie} key={movie.id}/>))}
                    </Lista>
                </div>
            </div>
        </Container>
    );
}