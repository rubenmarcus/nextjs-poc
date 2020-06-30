import Container from "@/components/container";
import ButtonItau from "@/components/button";

export default function Welcome({ data }) {
  const imgBg = process.env.ASSETS_URL + data.image_bg.url;

  return (
    <section>
      <Container>
        <div className="flex flex-wrap py-10">
          <div className="w-2/4 self-center justify-center pr-10">
            <h1 className="text-6xl leading-tight font-semibold">
              {data.titulo}
            </h1>
            <p className="text-xl font-light py-10">{data.content}</p>
            <ButtonItau> {data.button_text}</ButtonItau>
          </div>
          <div className=" w-2/4 align-right pl-1">
            <img src={imgBg} />
          </div>
        </div>
      </Container>
    </section>
  );
}
