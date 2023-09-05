import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default function FavoritesCard({title , imgSrc , id , vote , handleRemoveFromFavorites}) {
  return (
        <div className='col-md-3'>
            <div className="moveis-cards shadow position-relative text-center">
            <div className='text-decoration-none' to={`/movies/${id}`}>
                <div>
                    <img src={'https://image.tmdb.org/t/p/w500'+imgSrc} className='w-100' alt="" />
                </div>
                <h5 className='text-white text-center py-2'>{title}</h5>
                <h3 className='position-absolute badge bg-warning top-0 rounded-0 end-0 p-1 fs-4'>{vote}</h3>
            </div>
                <button className='text-white text-center py-2 btn btn-warning mb-3' onClick={()=>{
                    handleRemoveFromFavorites()
                }} >Remove from favorites</button>
            </div>
        </div>
  )
}
