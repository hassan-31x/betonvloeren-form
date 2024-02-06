import ContactMain from "./ContactMain"
import { client } from '../utils/client';

export const revalidate = 60;

export default async function Index() {
  const homeData = await client.fetch('*[_type == "home"][0]');
  const uiData = await client.fetch('*[_type == "uiComponents"][0]');
  const contactData = await client.fetch('*[_type == "contact"][0]');
  const variations = await client.fetch('*[_type == "variations"]');

  return (
    <ContactMain homeData={homeData} uiData={uiData} contactData={contactData} variations={variations}/>
  );
}
