import Seo from "../components/Seo";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home({ results }) {
  const router = useRouter();
  return (
    <div>
      <Seo title='Home' />
      {results?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href='#'>
              <a>{movie.title}</a>
            </Link>
          </h4>
          <div>평점 : {movie.vote_average}</div>
          <div>개봉일자 : {movie.release_date}</div>
        </div>
      ))}
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
