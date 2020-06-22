import { rest_fetchAPI } from "./fetch";
import { endpoints } from "./endpoints";

export async function fetch_Layout(data) {
  data = await rest_fetchAPI(endpoints.layout);

  return data;
}
