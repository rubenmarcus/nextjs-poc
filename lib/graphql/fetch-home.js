import { queries } from "./queries";
import { returnFirstEl } from "../helpers";
import { gql_fetchAPI } from "./fetch";

// Function to Get Home Queries
async function getHomePage(section) {
  let data = queries.queryHome.default;
  console.log("aqui");
  switch (section) {
    case "welcome":
      data;
      break;
    case "start":
      data = queries.queryHome.list;
      break;
  }

  const queryData = await gql_fetchAPI(data, {
    variables: {
      where: {
        name: section,
      },
    },
  });
  return queryData?.homes;
}

// Mount Home Obj and export , GraphQL bring object as array, so need to parse [0] object

export async function fetch_Home(data) {
  const fetch = {
    welcome: await getHomePage("welcome"),
    start: await getHomePage("start"),
  };

  data.welcome = returnFirstEl(fetch.welcome);
  data.start = returnFirstEl(fetch.start);

  return data;
}
