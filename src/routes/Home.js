import {useEffect, useState} from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  /* 1)
   * useState 를 사용하면 두개의 인자를 가진 배열이 생성된다
   * 첫번째 인자는 data 이다
   * 두번째 인자는 data 를 변경하는 함수 이다
   * 두번째 인자가 호출되면 첫번째 인자인 data 가 변경되고, 화면이 갱신된다
   * 이때 변경된 요소만 갱신이 이루어 진다
   * */
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  
  // /* 2)
  //  * 이 코드가 실행되면 딱 한번만 어떤 동작을 하고 싶은 경우가 있다
  //  * 이때 사용하는 것이 useEffect 이다
  //  * 정확히는 useEffect 의 두번째 인자인 deps 에 빈 배열 값을 넘겨주었을 때 딱 한번만 동작을 한다
  //  * useEffect 를 다시 정의해 보면, 두번째 인자인 deps 배열의 요소가 변경될 때, 첫번째 인자인 함수를 실행한다
  //  * */
  // useEffect(() => {
  //
  //   /* 3)
  //    * 외부 API 에서 데이터를 조회한다
  //    * 결과를 받아서 JSON 형식으로 변환을 하고
  //    * JSON 데이터에서 영화 목록을 State 에 세팅한다
  //    * 원하는 데이터를 찾기 위해 console.log(json) 를 사용하여 한번 실행 시켜보는 것은 개발에 도움이 된다
  //    * 다음 스텝으로 나아가기 위해 loading State 도 변경해 준다
  //    * */
  //   fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
  //     .then(response => response.json())
  //     .then(json => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);
  
  /* 4)
   * 요즘에는 async await 를 더 많이 사용하는 추세이다
   * 함수로 만들어서 빼보자
   * then 으로 묶어도 기능은 같지만 이렇게 사용하는 이유는 indent 가 더 보기 좋기 때문이다
   * */
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    const movies = json.data.movies;
    console.log("movies >", movies);
    setMovies(movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);
  
  /* 5)
   * map 함수를 사용해서 배열의 내용을 그리도록 만들 수 있다
   * 그리고 그 내용을 컴포넌트화 해서 분리하면 더 좋다
   * */
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
