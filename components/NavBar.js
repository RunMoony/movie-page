import { useRouter } from "next/router";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <div>
        <Link href='/'>
          <a className={router.pathname === "/" ? "active" : ""}>인기영화</a>
        </Link>
        <Link href='/now'>
          <a className={router.pathname === "/now" ? "active" : ""}>
            현재 상영영화
          </a>
        </Link>
        <Link href='/expected'>
          <a className={router.pathname === "/expected" ? "active" : ""}>
            개봉 예정영화
          </a>
        </Link>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          margin-left: 10px;
          margin-right: 10px;
        }
        a:hover {
          color: white;
        }
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: white;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
