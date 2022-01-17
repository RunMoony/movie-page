import Seo from "../components/Seo";
import { useRouter } from "next/router";
export default function Home({ results }) {
  const router = useRouter();
  return (
    <div>
      <Seo title='Home' />
      {results?.map((movie) => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
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
