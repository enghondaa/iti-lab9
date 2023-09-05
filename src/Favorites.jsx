import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from './store/favoritesSlice';
import FavoritesCard from './FavoritesCards';
export const Favorites = () => {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    const handleRemoveFromFavorites = (movie) => {
        dispatch(removeFromFavorites(movie));
    };

    return (
        <section className='bg-green  py-5 vh-100'>
            <div className='container '>
                <h2 className='text-center mt-4'>Favorites</h2>
                <div className="row gy-3">
                    {favorites.map((favorite, index) => <FavoritesCard vote={favorite.vote_average} handleRemoveFromFavorites={() => {
                        handleRemoveFromFavorites(favorite)
                    }} title={favorite.title} imgSrc={favorite.poster_path} id={favorite.id} key={index} />)}
                </div>
            </div>
        </section>
    );
};
