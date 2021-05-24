import React, { useContext } from 'react';
import {MovieContext, MovirContext} from './MovieContext';
import Movie from './Movie';


// create components
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <div>
            <h3>Adriana</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    );
}

export default Nav;