import Link from "next/link";
import styles from "./styles.module.scss";

interface INavBarItem {
  href: string;
  name: string;
}

interface IProps {
  navLinks: Array<INavBarItem>;
}

export default function NavBar({ navLinks }: IProps) {
  return (
    <nav className={styles.container}>
      {navLinks.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
