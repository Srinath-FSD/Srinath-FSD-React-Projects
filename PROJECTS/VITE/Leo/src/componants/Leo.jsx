import React from "react";

const Leo = () => {
  const [showCast, setShowCast] = React.useState(false);

  const movie = {
    name: "Leo",
    poster:"https://img.onmanorama.com/content/dam/mm/en/entertainment/movie-reviews/images/2023/10/18/leo-poster.jpg?w=1120&h=583",
    rating: "8.5/10",
    genre: "Action / Thriller",
    
  };
  

  const cast = [
    {
      name: "Vijay",
      img: "https://tse1.mm.bing.net/th/id/OIP.ujwQ4yJGp4mXOsS8b3ehfwHaJQ?pid=Api&P=0&h=180",
      
    },
    {
      name: "Trisha",
      img: "https://tse3.mm.bing.net/th/id/OIP.6dIoZwX323q-ZjDmDfEp-wHaG5?pid=Api&P=0&h=180"
    },
    {
      name: "Sanjay Dutt",
      img: "https://tse2.mm.bing.net/th/id/OIP.Pxj_BdPYHb2cPoIgkGHOVQHaEK?pid=Api&P=0&h=180"
    },
    {
      name: "Arjun",
      img: "https://assets.thehansindia.com/h-upload/2023/08/16/1373077-arjun.webp"
    }
  ];

  return (
    <div>
      <h1>{movie.name}</h1>

      <img src={movie.poster} width="500px" />

      <p>Rating: {movie.rating}</p>
      <p>Genre: {movie.genre}</p>
      <p>Leo is a Tamil action-thriller movie directed by Lokesh Kanagaraj.
The story follows Parthiban (played by Vijay), a calm café owner living with his wife and daughter in Himachal Pradesh. His normal life turns upside down when he gets involved in a violent incident at his café.

After this, a dangerous criminal gang believes that Parthiban is actually a deadly gangster named Leo Das. They chase him and try to pull him back into the dark world of crime.

The movie shows:

Whether Parthiban is really Leo Das or not

His hidden past

How he protects his family

High-level action scenes and emotional moments

This film is a part of the Lokesh Cinematic Universe (LCU) with connections to Kaithi & Vikram.</p>

      <button onClick={() => setShowCast(!showCast)}>
        {showCast ? "Hide Cast" : "Show Cast"}
      </button>

      {showCast && (
        <div>
          <h3>Cast:</h3>

          {cast.map((actor, i) => (
            <div key={i}>
              <img src={actor.img} width="120px" />
              <p>{actor.name}</p>
              <p></p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leo;
