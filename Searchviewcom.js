import React from 'react';
import { Link } from 'react-router-dom';

const Moviecard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movie/${movie.id}`;

  return (
    <div className="col-lg-2 col-md-3 offset-lg-1 col-2 my-4 bg-black">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  );
};

const Searchview = ({ keyword, searchResults }) => {
  const resultsHtml = searchResults.map((obj, i) => {
    return <Moviecard movie={obj} key={i} />;
  });

  return (
    <>
      {resultsHtml.length > 0 ? (
        <div className="container bg-black">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      ) : (
         <div className='container' >
               <div className='row'>
               <div className='text-grey f-40' style={{ fontSize: '50px', padding: '300px', textAlign: 'center' }}>no results found...</div>
            
               </div>
               
             </div>
         
     
         

      )}
    </>
  );
};

export default Searchview;
