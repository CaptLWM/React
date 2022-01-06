import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail({ title, coverImg, id, summary, genres }) {
  // const { id } = useParams();
  // const [movies, setMovies] = useState([]);
  // const getMovies = async () => {
  //   const json = await (
  //     await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //   ).json();
  //   setMovies(json.data.movie);
  //   console.log(json);
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  // movies.map((movie) => (
  //   key={movie.id}
  //     id={movie.id}
  //     coverImg={movie.medium_cover_image}
  //     title={movie.title}
  //     summary={movie.summary}
  //     genres={movie.genres}
  // )
  return (
    <div>
      <h1>{title}</h1>
      <img src={coverImg} alt={title} />
      {/* {movies.map((map)=>(
        id={movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title}
        summary={movie.summary}
        genres={movie.genres}
      ))}
       */}
      <p>{summary}</p>
      <ul>{genres && genres.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>

    //
  );
}

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   coverImg: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired, //배열이므로
// };

export default Detail;
