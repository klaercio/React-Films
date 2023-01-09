import { useState, useEffect, useRef } from "react";
import MovieCard from "../../Components/MovieCard";
import { Container } from "../../styles/global";
import { Lista } from "./style";
import { useParams } from "react-router-dom";

const apiKey = `cd3083d8751566bac2b4e8c686449f54`;

export default function Search() {
    const [topMovies, setTopMovies] = useState([]);
    const [page, setPage] = useState(1);
    const {name} = useParams();
    const loaderRef = useRef(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie/?api_key=${apiKey}&query=${name}`)
        .then(response => response.json())
        .then(data => setTopMovies(atual => [...atual, ...data.results]))
    }, [name])
 

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
                        {topMovies.length > 0 ? topMovies.map((movie, index) => (<MovieCard movie={movie} key={index}/>)): <h1 style={{textAlign: "center", margin: 'auto'}}>no movie found</h1>}
                    </Lista>
                    <p ref={loaderRef}>aaaaaaa</p>
                </div>
            </div>
        </Container>
    );
}