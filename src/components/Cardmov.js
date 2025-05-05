import React from 'react'
import './Cardmov.css'
import { Link } from 'react-router-dom'

const Cardmov = ({film}) => {

  return (
    <div>
        <div className='col col-lg-3 col-md-4'>
   <Link to={`/detailes/${film.id}`}> <div className='card'>
        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt='image1' width={250} height={300} className='immg'/>
        {/* <div className='card-content connt '>
            
                <h5>اسم الفيلم:{film.original_title}</h5>
                <h5>تاربخ الاصدار:{film.release_date}</h5>
                <h5>عدد المقبمبن:{film.vote_count}</h5>
                <h5>التقييم:{film.vote_average}</h5>
            
        </div> */}
      </div>
      </Link>
      </div>
    </div>
  )
}

export default Cardmov
