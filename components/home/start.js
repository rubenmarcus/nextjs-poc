import Container from "@/components/container";
import ReactMarkdown from "react-markdown";
import SectionTitle from "@/components/sectiontitle";

export default function Start({ data, lists }) {
  return (
    <section class="bg-itau-lightbrown start py-20">
      <Container>
        <div className="flex flex-wrap">
        <SectionTitle>{data.titulo}</SectionTitle>
          <ul className="w-full flex flex-wrap">
            {lists.map(function (data, index) {
              return (
                <li key={index} className="w-1/3 pr-20">
                  <h3 className="text-8xl text-itau-orange font-bold">{data.id}</h3>
                  <ReactMarkdown source={data.list} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
