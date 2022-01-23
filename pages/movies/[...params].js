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
        <h3>{details.title}</h3>
        <h5>{details.original_title}</h5>
        <p> &lt;영화줄거리 &gt;</p>
        <p>{details.overview}</p>
        <p> &lt;장르&gt;</p>
        <p>
          {details.genres.map((genre) => genre.name)
            ? details.genres.map((genre) => genre.name).join(", ")
            : "작성된 장르가 없습니다."}
        </p>
        <p> &lt;제조국&gt;</p>
        <p>
          {details.production_countries.map((country) => country.name)
            ? details.production_countries
                .map((country) => country.name)
                .join(" / ")
            : "작성된 제조국이 없습니다."}
        </p>
        <div className='credit'>
          <h3>출연배우</h3>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 15px 50px 50px 50px;
        }
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
          line-height: 30px;
        }
        .credit {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const details = await (
    await fetch(`http://localhost:3000/api/movies/${params[1]}`)
  ).json();
  const actors = await (
    await fetch(`http://localhost:3000/api/movies/${params[1]}/credits`)
  ).json();
  console.log(actors.cast);
  return {
    props: {
      params,
      details,
      actors,
    },
  };
}
