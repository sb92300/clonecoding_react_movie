import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

function App(){

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  //비동기 함수. async await
  const getMovie = async()=> {
    //es6 문법. aixos해서 얻은 값.data.data.movies와 같은 의미 
   const {data : {data : {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
   console.log({movies}.movies);
   //map 함수를 실행하려면 object가 아니라 array여야함. movie가 object 안에 movie라는 []로 나와서 .movies 했음. 추후 수정해야 할 듯.
   setMovies({movies}.movies);
   setIsLoading(false);
  }
  console.log(movies);
  //useEffect = componentDidMount + componentDidUpdate
  //useEffect를 이용하여 값을 불러오는 것은 CSR을 하기 위함이다. DOM을 불러오고 그 뒤에 값을 만들어야 하므로 
  // DOM을 만드는 render가 끝난 뒤 값을 불러오게 한다.
  // useEffect 끝에 []를 붙이면 마운트 될 때 1번만 사용된다.
   useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="App">
      {isLoading 
      ? <div className="loading">
          <span className="loader_text">
            Loading...
          </span>
        </div>

      : <div className="movies">
        <header className="web_header">BINFLEX</header>
          <div className="movie_container">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                title={movie.title} 
                summary={movie.summary} 
                year={movie.year} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                runtime={movie.runtime} 
                language={movie.language}
            />
              )
            )
          }
          </div>
          <div className="movies_footer">
              designed by : S . B Kim
          </div>
        </div>}
    </div>
  );
}

export default App;


//life-cycle method는 react가 component를 생성, 제거 하는 방법이다.
//과거에는 state를 사용하기 위해 class component를 사용하였으나 현재 hook이 나와서 hook을 사용하는 것이 훨씬 좋음.
