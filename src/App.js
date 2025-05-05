import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navs from './components/Navs';
import Movieslist from './components/Movieslist';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Detailes from './Detailes';



function App() {
  const [mov,setmov]=useState([])
  const getallmovies= async()=>{
    const res=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language-ar")
    setmov(res.data.results);
    // console.log(res.data.results)
  }
  useEffect(()=>{
    getallmovies()
  },[])
  const getpage=async(page)=>{
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language-ar&page=${page}`)
    setmov(res.data.results);
  }
  const search = async(word)=>{
    if(word===''){
      getallmovies()
    }
    else{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language-ar`)
      setmov(res.data.results);
    }

  }
  return (
    <div className="App">
      <Navs search={search}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movieslist getpage={getpage} mov={mov}/>}/>
        <Route path='/detailes/:id' element={<Detailes/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
