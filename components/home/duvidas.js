import Accordion from "@/components/shared/accordion";
import Container from "@/components/container";
import SectionTitle from "@/components/sectiontitle";

export default function Duvidas({ data }) {
  const imgBg = process.env.ASSETS_URL + data.image_bg.url;

  return (
    <section className="duvidas">
      <Container>
        <div className="flex flex-wrap pt-10">
          <SectionTitle>{data.titulo}</SectionTitle>
          <div className="w-2/5 pr-5 self-end">
            <img src={imgBg} />
          </div>
          <div className="w-3/5 self-center mb-20 justify-center">
            <Accordion data={data.accordion} />
          </div>
        </div>
      </Container>
    </section>
  );
}
