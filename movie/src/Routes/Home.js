import React, { useState, useEffect } from "react";
import Movie from "../Components/Movie";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import TestModal from "../components/TestModal";
//import { Button } from "react-bootstrap";
//import TestModal from "../components/TestModal";

function Home() {
  const [loading, setLoading] = useState(true);
  //loading의 변화를 setloading에 저장, useState는 loading의 초기값 설정
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: true,
  };
  //console.log(movies);
  return (
    <>
      {/* <TestModal /> */}
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <Slider {...settings}>
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
//url에 영화 정보 보기위한 id parameter 추가
