import React from 'react';
import { Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import image from "../images/OIP (1).jpeg";

function CardMovie({ mov }) {
  // const url =  `https://image.tmdb.org/t/p/original/`;
  const imagePath = `https://image.tmdb.org/t/p/w500/`;
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie-details/${mov.id}`}>
        <div className="card">
          {/* <img src={image} className="card__image" alt="mo" /> */}
          <img src={imagePath + mov.poster_path} className="card__image" alt="mo" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {mov.original_title}</p>
              <p>تاريخ الاصدار:{mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_coun}</p>
              <p>التقييم:{mov.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
}

export default CardMovie;
//       
