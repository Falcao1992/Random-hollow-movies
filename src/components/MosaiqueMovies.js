import React from "react";
import MoviesCard from "./MoviesCard";


const MosaiqueMovies = ({ movies, value, handleOnClick }) => {

      
    return (
      <div className='containerMosaique'>
          <MoviesCard movies={movies} value={value} handleOnClick={handleOnClick}/>
     </div>
    );
  }

export default MosaiqueMovies;
