import Link from "next/link";

export default function Header(headerData) {
  const header = headerData.data;

  return (
    <header className="fixed w-full bg-white top-0 border-b border-itau-border">
      <div className="container flex content-center flex-wrap text-lg ">
        <div className="logo mr-8">
          <a
            href="https://developer.itau.com.br/"
            aria-label="Logomarca itaú for developers menu"
          >
            Itaú <span class="text-itau-orange font-bold">for developers_</span>{" "}
          </a>
        </div>

        <nav className="flex flex-wrap  flex-1  text-lg ">
          <ul class="w-full flex">
            {header.map(function (data, index) {
              return (
                <li key={index} className="inline-block relative text-center w-1/6">
                  <Link href={data.url}>
                    <a className="hover:underline font-bold text-itau-grey">
                      {data.Title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
