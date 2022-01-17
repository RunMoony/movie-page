import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link href='/'>
          <a>인기영화</a>
        </Link>
        <Link href='/now'>
          <a>현재 상영영화</a>
        </Link>
        <Link href='/expected'>
          <a>개봉 예정영화</a>
        </Link>
      </div>
    </nav>
  );
}
