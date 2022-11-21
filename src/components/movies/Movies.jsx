import Search from "../search/Search";
import {useEffect, useState} from "react";
import Movie from "../movie/Movie";
const Movies = ()=>{
    const [search, setSearch] = useState('');
    const [movies,setMovies] = useState('')
    const handleSearch = (term)=>{
        setSearch(term)
    }
    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?t=${search}&apikey=a40cbe8c`)
            .then(response=>response.json())
            .then(data=>setMovies(data))
    },[search])



    console.log(movies)
    return(
        <div>
            <Search onSearch={handleSearch}/>
            <h3>Filmai</h3>
            <Movie
            title = {movies['Title']}
            img = {movies['Poster']}
                />
        </div>
    )
}

export default Movies;