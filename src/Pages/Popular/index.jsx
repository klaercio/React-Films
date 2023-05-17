import { useState, useEffect, useRef } from "react";
import MovieCard from "../../Components/MovieCard";
import { Container } from "../../styles/global";
import { Lista } from "./style";
import ButtonToTop from "../../Components/ButtonToTop";

const apiKey = `cd3083d8751566bac2b4e8c686449f54`;

export default function Popular() {
    const [topMovies, setTopMovies] = useState([]);
    const [page, setPage] = useState(1);
    const loaderRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`)
        .then(response => response.json())
        .then(data => setTopMovies(atual => [...atual, ...data.results]))
    }, [page]);

    useEffect(() => {
        const options = {
          root: null,
          rootMargin: "20px",
          threshold: 1.0
        };
    
        const observer = new IntersectionObserver((entities) => {
          const target = entities[0];
    
          if (target.isIntersecting){
            setPage(atual => atual + 1);
          }
        }, options);
    
        if (loaderRef.current){
          observer.observe(loaderRef.current);
        }
      }, []);

    return (
        <Container>
            <div className="conteudo">
                <div>
                    <Lista>
                        {topMovies && topMovies.map((movie, index) => (<MovieCard movie={movie} key={index}/>))}
                    </Lista>
                    <p ref={loaderRef}>aaaaaaa</p>
                    <ButtonToTop/>
                </div>
            </div>
        </Container>
    );
}