import { useDispatch } from 'react-redux';
import React from 'react'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCards from './MovieCards';
import { addToFavorites } from './store/favoritesSlice';

export const MovieList = ({ movies }) => {
  let [trendingMovies, setTrendingMovies] = useState([]);
  const dispatch = useDispatch();
  let apikey = 'f1aca93e54807386df3f6972a5c33b50';
  async function apiReceive(pageNumber) {
    let { data } = await Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${pageNumber}`, {
      params: {
        language: 'en-US'
      }
    })
    data = data.results
    setTrendingMovies(data)
  }
  useEffect(() => {
    apiReceive(1)
  }, [])
  const paginate = new Array(10).fill('iti').map((ele, i) => i + 1);
  function pagination(page) {
    apiReceive(page)
  }

  const handleAddToFavorites = (movie) => {
    dispatch(addToFavorites(movie));
  };

  return (
    <>
      <section className='bg-green mt-5 py-5'>
        <div className="container">
          <div className="row gy-3">
            {trendingMovies.map((trendingMovie, index) => <MovieCards vote={trendingMovie.vote_average} handleAddToFavorites={() => {
              handleAddToFavorites(trendingMovie)
            }} title={trendingMovie.title} imgSrc={trendingMovie.poster_path} id={trendingMovie.id} key={index} />)}
          </div>
          <nav aria-label="Page navigation example" className='d-flex justify-content-center pt-5'>
            <ul className="pagination">
              {paginate.map((ele) => (
                <li className="page-item" key={ele} onClick={() => pagination(ele)} ><a className="page-link">{ele}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </section>



    </>
  );
};
