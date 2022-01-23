import Seo from "../../components/Seo";

export default function Detail({ params, details, actors }) {
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
            : "정보없음"}
        </p>
        <div className='credit'>
          <h3>출연배우</h3>
          <ul>
            {actors.cast.map((actor, idx) => (
              <li key={idx}>
                <img
                  className='profile'
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                />
                <h6 className='character'>
                  역할명
                  <br />
                  {actor.character ? actor.character : "-"}
                </h6>
                <h6 className='name'>
                  배우명
                  <br />
                  {actor.name ? actor.name : "정보없음"}
                </h6>
              </li>
            ))}
          </ul>
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
        h6 {
          color: white;
          font-size: 14px;
        }
        p {
          color: white;
          font-size: 20px;
          line-height: 35px;
        }
        ul {
          white-space: nowrap;
          overflow-x: auto;
          margin-left: -40px;
        }
        li {
          display: inline-block;
          margin-right: 30px;
        }
        .name {
          margin-top: -15px;
        }
        .credit {
          margin-top: 50px;
        }
        .profile {
          max-width: 150px;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
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
  return {
    props: {
      params,
      details,
      actors,
    },
  };
}
