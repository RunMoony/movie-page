import Seo from "../components/Seo";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home({ results }) {
  const router = useRouter();
  return (
    <div className='container'>
      <Seo title='Home' />
      {results?.map((movie) => (
        <div className='movie' key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>평점 : {movie.vote_average}</h4>
          <h4>개봉일자 : {movie.release_date}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie:hover h4 {
          color: white;
        }
        .movie h4 {
          color: rgba(255, 255, 255, 0.7);
          font-size: 15px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results: results,
    },
  };
}
