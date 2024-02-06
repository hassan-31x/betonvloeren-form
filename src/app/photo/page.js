import Footer from "../base/Footer";
import Header from "../base/Header";
import { client } from "../utils/client";
import Photo from "./Photo";

export const revalidate = 60;
export default async function Index() {
  const gallery = await client.fetch('*[_type == "gallery"][0]');
  const uiData = await client.fetch('*[_type == "uiComponents"][0]');
  const homeData = await client.fetch('*[_type == "home"][0]');
  const variations = await client.fetch('*[_type == "variations"]');

  console.log(gallery);
  return (
    <>
      <Header
        type="second"
        link={"Photo"}
        logo_={homeData.logo}
        keyword={uiData.keyword}
        email={uiData.email}
        buttonColor={uiData.buttonColor}
        buttonText={uiData.buttonText}
        phone={uiData.contactNumber}
        variations={variations}
      />
      <main className="pt">
        <Photo ImageList={gallery.images} />
      </main>
      <Footer
        domain={homeData.domainName}
        logo_={homeData.logo}
        keyword={uiData.keyword}
        email={uiData.email}
        buttonColor={uiData.buttonColor}
        buttonText={uiData.buttonText}
        phone={uiData.contactNumber}
        variations={variations}
      />
    </>
  );
}
