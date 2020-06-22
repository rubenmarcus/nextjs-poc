import { fetch_Home } from "./fetch-home";

// Function to Get GraphQL Data
export async function gql_getData(obj, page) {
  return await pages(obj, page);
}

// GraphQL Data Objects Return

async function pages(obj, page) {
  let data = obj;
  switch (page) {
    case "home":
      data = await fetch_Home(obj);
      break;
    case "faq":
      break;
  }

  return data;
}
