import styles from "./page.module.scss";
import Link from "next/link";

const pages = [
  { href: "/calculator", name: "calculator" },
  { href: "/navbar", name: "navbar" },
  { href: "/sorting", name: "Question 3" },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        Use the following links to navigate to the specific questions
      </h1>

      <ul className={styles.links}>
        {pages.map((page, i) => (
          <Link key={page.href} href={page.href}>
            {`${i + 1}. ${page.name}`}
          </Link>
        ))}
      </ul>
    </main>
  );
}
