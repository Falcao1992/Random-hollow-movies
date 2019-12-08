import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({movies, value, handleOnClick}) => {
    return (
      <div className="cardBigContainer">
        {movies.map(movie => (
          <div className="cardContainer" key={movie.id}>
            <a href="#topApp"><img onClick={handleOnClick}  className="cardImg" src={movie.posterUrl} alt={movie.title} /></a>
          </div>
        ))}
      </div>
    );
    };



export default MoviesCard;
