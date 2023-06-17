import React from 'react'

function MovieCard(MovieDetail) {
    const { name, description, posterUrl } = MovieDetail
    return (
        <div>
            <img src={posterUrl} alt="posterurl" height={100} width={100} />
            <p>{name}</p>
            <p>{description}</p>
        </div>
    )
}

export default MovieCard