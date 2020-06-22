import { fetch_Home } from "./fetch-home";
import { fetch_Layout } from "./fetch-layout";
import { fetch_Header } from "./fetch-header";

// Function to Get  Rest Data
export async function rest_getData(obj, page) {
  return await pages(obj, page);
}

// Fetch Page Conent

async function pages(obj, page) {
  let data = obj;
  console.log(obj, page, "obj");

  switch (page) {
    case "header":
      data = await fetch_Header(obj);
      break;
    case "layout":
      data = await fetch_Layout(obj);
      break;
    case "home":
      data = await fetch_Home(obj);
      break;
    case "faq":
      break;
  }

  return data;
}
