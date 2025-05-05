import React, { useEffect, useState } from 'react'
import './Detailes.css'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Detailes = () => {
    const [movie,setmovie]=useState([])

    const param=useParams();
   

    const getfilms = async ()=>{

        const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
        setmovie(res.data) 

       console.log(res.data)
       
    }
    useEffect(()=>{
        getfilms()
    },[])

  return (
    
    <div className='det'>
     <div className='container contr'>
        <div className='row firo'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width={400} height={400} className='imgdet'/>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 colcont'>
                <h5><h2>اسم الفيلم : </h2> {movie.title}</h5>
                <h5><h2>تاريخ الاصدار :</h2> {movie.release_date}</h5>
                <h5><h2>عدد المقيمين : </h2> {movie.vote_count}</h5>
                <h5><h2>التقييم: </h2>{movie.vote_average}</h5> 
         </div>
        </div>
        <div className='story'>
          <h2 className='text-center'>القصة : </h2>
          <h5>{movie.overview}</h5>
        </div>
        <div className='bton'>
          <a href={movie.homepage} className='btn btn-danger'>View Film</a>
          <Link to='/' className='btn btn-dark'>Go Back</Link>
        </div>
     </div>
    </div>
  )
}

export default Detailes
