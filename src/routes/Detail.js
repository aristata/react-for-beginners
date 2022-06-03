import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  
  async function getDetail(id) {
    const detail = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await detail.json();
    console.log(`movie ${id} detail > `, json);
    
    setMovie(json.data.movie);
  }
  
  useEffect(() => {
    getDetail(id)
  }, []);
  
  return (<>
    <div>
      <h1>{movie.title_long}</h1>
      <Link to={"/"}>come back Home</Link>
    </div>
    <div>
      <img src={movie.medium_cover_image} alt={movie.title}/>
      <div>
        <span>개봉년도: {movie.year}</span>
      </div>
      <div>
        <span>별점: {movie.rating} / 10</span>
      </div>
      <div>
        <span>상영 시간: {movie.runtime}</span>
      </div>
      <p>줄거리: {movie.description_full}</p>
    </div>
  </>)
}

export default Detail;
