import { rest_fetchAPI } from "./fetch";
import { endpoints } from "./endpoints";

export async function fetch_Home(data) {
  data.welcome = await rest_fetchAPI(endpoints.home.welcome);
  data.start = await rest_fetchAPI(endpoints.home.start);
  data.duvidas = await rest_fetchAPI(endpoints.home.duvidas);
  data.fase_testes = await rest_fetchAPI(endpoints.home.fase_testes);

  return data;
}
