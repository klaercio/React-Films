import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import { Card } from './style';

const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({movie}) {
    return <>
        <Card>
            <Link to={`/details/${movie.id}`}><img src={imageUrl + movie.poster_path} alt={movie.title} /></Link>
            <span>{movie.title}</span>
            <p><FaStar/>{movie.vote_average}</p>
        </Card>
    </>
}