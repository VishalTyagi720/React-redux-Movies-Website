import React from 'react';
import { addFavourite, removeFromFavourites } from '../actions';

class MovieCard extends React.Component {

    handleFavouritesClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavouritesClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }

    render () {
        const { movie, isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className='left'>
                    <img alt='movie-poster' src={movie.Poster}></img>
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}({movie.Year})</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button className='unfavourite-btn' onClick={this.handleUnFavouritesClick}> Unfavourite </button>
                            : <button className='favourite-btn' onClick={this.handleFavouritesClick}> Favourite </button>
                        }
                    </div>
                </div>
            </div>
        );
    }
    
}


export default MovieCard;