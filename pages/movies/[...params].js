import Seo from "../../components/Seo";

export default function Detail({ params, details }) {
  const [title] = params || [];
  return (
    <div>
      <Seo title={title}></Seo>
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
