import Link from "next/link";

export default function Header(headerData) {
  const header = headerData.data;

  return (
    <header>
      <nav className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <div className="logo">
          <a
            href="https://developer.itau.com.br/"
            aria-label="Logomarca itaú for developers menu"
          >
            Itaú <span>for developers_</span>{" "}
          </a>
        </div>

        <ul>
          {header.map(function (data, index) {
            return (
              <li key={index}>
                <Link href={data.url}>
                  <a className="hover:underline">{data.Title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
