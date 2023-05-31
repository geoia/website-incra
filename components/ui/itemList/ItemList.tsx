import styles from '../../../styles/Principal.module.css';

interface Props {
  texts: string[];
}

export default function ItemList({ texts }: Props) {
  const text = texts.map((t, i) => (
    <li key={i}>
      <a href="#">{t}</a>
    </li>
  ));

  return (
    <nav className={styles.navMenuDrawer}>
      <ul className={styles.ulMenuDrawer}>{text}</ul>
    </nav>
  );
}
