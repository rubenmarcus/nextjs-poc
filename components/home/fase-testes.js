import ReactMarkdown from "react-markdown";
import Container from "@/components/container";
import ButtonItau from "@/components/button";
import SectionTitle from "@/components/sectiontitle";

export default function FaseTestes({ data }) {
  const imgBg = process.env.ASSETS_URL + data.image_bg.url;

  return (
    <section className="bg-itau-lightblue">
      <Container>
        <div className="flex flex-wrap pt-10">
          <div className="w-2/4 pr-5">
            <img src={imgBg} />
          </div>
          <div className="w-2/4 self-center justify-center pl-10">
            <h2 className="text-6xl leading-tight text-white font-medium">
              {data.titulo}
            </h2>
            <p className="text-xl font-light text-white py-10">
              <ReactMarkdown source={data.content} /></p>
            <ButtonItau> {data.button_text}</ButtonItau>
          </div>
        </div>
      </Container>
    </section>
  );
}
