import Welcome from "./home/welcome";
import Start from "./home/start";
import Duvidas from "./home/duvidas";
import FaseTestes from "./home/fase-testes";

export default function Home({ data }) {
  return (
    <div>
      {data.welcome && <Welcome data={data.welcome} />}

      {data.start && <Start data={data.start} lists={data.start.lists} />}

      {data.duvidas && <Duvidas data={data.duvidas} />}

      {data.fase_testes && <FaseTestes data={data.fase_testes} />}
    </div>
  );
}
