interface Props {
  texts: string[];
}

export default function ItemList({ texts }: Props) {
  const text = texts.map((t, i) => (
    <li
      key={i}
      style={{
        paddingTop: '10px',
      }}
    >
      <a
        href="#"
        style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '0.9rem',
        }}
      >
        {t}
      </a>
    </li>
  ));

  return (
    <nav
      style={{
        marginTop: '40px',
        height: '35%',
      }}
    >
      <ul
        style={{
          listStyleType: 'none',
          marginBlockStart: 0,
          marginBlockEnd: 0,
          paddingInlineStart: 0,
          width: '260px',
          marginLeft: '20px',
        }}
      >
        {text}
      </ul>
    </nav>
  );
}
