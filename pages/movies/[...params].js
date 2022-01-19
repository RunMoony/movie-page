import Seo from "../../components/Seo";

export default function Detail({ params, details }) {
  const [title] = params || [];
  return (
    <div>
      <Seo title={title}></Seo>
      <div className='container'>
        <div className='backgroundImage'>
          <img
            className='poster'
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          />
        </div>
        <div>
          <h3>{details.title}</h3>
          <h5>{details.original_title}</h5>
          <p> &lt;영화줄거리 &gt;</p>
          <p>{details.overview}</p>
        </div>
        <p> &lt;장르&gt;</p>
        {details.genres.map((genres) => (
          <p key={genres.id}>{genres.name}</p>
        ))}
      </div>
      <style jsx>{`
        .container {
          margin: 15px 50px 50px 50px;
        }
        /*.backgroundImage {
          top: 0;
          left: 0;
          display: block;
          //width: 100vw;
          //height: 100vh;
          background-image: url("https://image.tmdb.org/t/p/w500${details.backdrop_path}");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.5;
          z-index: -1;
        }*/
        .poster {
          display: block;
          margin: 0px auto;
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(245, 212, 212, 0.1) 0px 4px 12px;
        }
        h3 {
          font-size: 3em;
          color: orange;
          margin: 0px 0px 8px;
        }
        h5 {
          color: white;
          font-size: 2em;
          margin: 0px 0px 8px;
          font-weight: normal;
        }
        p {
          color: white;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const details = await (
    await fetch(`http://localhost:3000/api/movies/${params[1]}`)
  ).json();
  return {
    props: {
      params,
      details,
    },
  };
}
