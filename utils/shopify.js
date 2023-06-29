const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2023-04/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getAllProducts() {
  const query = `
  {
    
    products(first: 25) {
      edges {
        node {
          id
          title
          handle
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
    shop {
      name
    }
  }
`;

  const response = await ShopifyData(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}
