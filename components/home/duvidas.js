import Accordion from "@/components/shared/accordion";

export default function Duvidas({ data }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <Accordion data={data.accordion} />
      </div>
    </section>
  );
}
