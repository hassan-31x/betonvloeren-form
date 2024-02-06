const API_URL = "http://localhost:3001/graphql";
async function fetchAPI(query = "", variables) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getColors() {
  const data = await fetchAPI(
    `query getAllColors {
        posts(where: {categoryName: "colors"}) {
          edges {
            node {
              title
              image {
                image {
                  altText
                  sourceUrl
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }`
  );
  return data.posts;
}
