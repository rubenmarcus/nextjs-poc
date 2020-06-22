import { rest_fetchAPI } from "./fetch";
import { endpoints } from "./endpoints";

export async function fetch_Header(data) {
  data = await rest_fetchAPI(endpoints.header);

  return data.link;
}
