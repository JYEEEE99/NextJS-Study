import styles from "@/app/page.module.css";
// tailwind -> 호불호 심하고 가독성 안좋음
// Styled Component -> Server Component SSR
// sass
// css modulse -> 간단해서 채택
// vanilla extract -> Windows와 문제
import Image from "next/image";
import jLogo from "../../../public/jLogo.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={jLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
}
