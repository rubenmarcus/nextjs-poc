import { gql_getData } from "./graphql/api";
import { rest_getData } from "./rest/api";

import { data } from "./data-objects";

export async function getData(page) {
  return process.env.FETCH_METHOD == "GRAPHQL"
    ? gql_getData(data[page], page)
    : rest_getData(data[page], page);
}
