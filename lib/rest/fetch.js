export async function rest_fetchAPI(endpoint) {
  const url = process.env.NEXT_PUBLIC_STRAPI_API_URL + "/" + endpoint;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}
