export default function Welcome({ data }) {
  const imgBg = process.env.ASSETS_URL + data.image_bg.url;

  return (
    <section>
      <img src={imgBg} />
      <div className="mb-8 md:mb-16">
        <p>{data.titulo}</p>
      </div>
    </section>
  );
}
