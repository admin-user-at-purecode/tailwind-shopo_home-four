import LayoutHomeFour from '../LayoutHomeFour'
import ProductsAds from "../Home/ProductsAds";
import Banner from "./Banner";
import SectionStyleOneHmFour from '../SectionStyleOneHmFour'
import datas from "../../mock_data/products.json";
import CampaignCountDown from "./CampaignCountDown";
import SectionStyleThreeHmFour from "../SectionStyleThreeHmFour";
import SectionStyleFour from "../SectionStyleFour";

function Index() {
  const { products } = datas;
  return (
    <LayoutHomeFour>
      <Banner className="mb-[60px]" />
      <SectionStyleOneHmFour
        products={products.slice(16, 20)}
        sectionTitle="Trendy Design"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
     
      <CampaignCountDown lastDate="2023-10-04 4:00:00" className="mb-[60px]" />
      <SectionStyleOneHmFour
        products={products.slice(20, 24)}
        sectionTitle="Feature Design"
        seeMoreUrl="/all-products"
        className="new-products mb-[60px]"
      />
      <ProductsAds
        ads={[`${import.meta.env.VITE_PUBLIC_URL}/src/assets/images/ads-3.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleThreeHmFour
        sectionTitle="New Arrival"
        seeMoreUrl="/all-products"
        products={products.slice(16, 28)}
        className="mb-[60px]"
      />

      <ProductsAds
        sectionHeight="164"
        ads={[`${import.meta.env.VITE_PUBLIC_URL}/src/assets/images/ads-4.png`]}
        className="products-ads-section mb-[60px]"
      />
      <SectionStyleFour
        products={products.slice(16, 28)}
        sectionTitle="Popular Sales"
        seeMoreUrl="/all-products"
        className="mb-[60px]"
      />
    </LayoutHomeFour>
  );
}

export default Index;
