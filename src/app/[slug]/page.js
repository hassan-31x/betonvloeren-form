
import { client } from '../utils/client';
import VariationMain from "./VariationMain";

export async function generateStaticParams() {
  const variations = await client.fetch(`*[_type == "variations"]`);
 
  return variations.map((variation) => ({
    slug: variation.slug.current,
  }))
}

export const revalidate = 60

export default async function Index({ params }) {
  const slug = params.slug
  const homeData = await client.fetch('*[_type == "home"][0]');
  const uiData = await client.fetch('*[_type == "uiComponents"][0]');
  const variation = await client.fetch(`*[_type == "variations" && slug.current == "${slug}"][0]`);
  const variations = await client.fetch(`*[_type == "variations"]`);

  return (
    <VariationMain homeData={homeData} uiData={uiData} variation={variation} variations={variations}/>
  );
}
