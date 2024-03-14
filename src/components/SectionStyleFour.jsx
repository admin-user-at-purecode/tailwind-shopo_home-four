import ProductCardRowStyleTwo from "./ProductCardRowStyleTwo";
import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";
import Star from "./icons/Star";

const bannerData = [
  {
  heading : "Free shipping",
  desc : "When ordering over $100"
  },
  {
  heading : "Free Return",
  desc : "Get Return within 30 days"
  },
  {
  heading : "Secure Payment",
  desc : "100% Secure Online Payment"
  },
  {
  heading : "Best Quality",
  desc : "Original Product Guarenteed"
  }
  ] 

export default function SectionStyleFour({
  className,
  sectionTitle,
  seeMoreUrl,
  products = [],
}) {
  return (
    <div className={`section-style-one ${className || ""}`}>
      <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
        <div className="products-section w-full">
          <div className="grid lg:grid-cols-3 grid-cols-1 xl:gap-[30px] lg:gap-5">
            <div className="item-col">
              <DataIteration datas={products} startLength={0} endLength={4}>
                {({ datas }) => (
                  <ProductCardRowStyleTwo key={datas.id} datas={datas} />
                )}
              </DataIteration>
            </div>
            <div className="item-col">
              <DataIteration datas={products} startLength={4} endLength={8}>
                {({ datas }) => (
                  <ProductCardRowStyleTwo key={datas.id} datas={datas} />
                )}
              </DataIteration>
            </div>
            <div className="item-col">
              <DataIteration datas={products} startLength={8} endLength={12}>
                {({ datas }) => (
                  <ProductCardRowStyleTwo key={datas.id} datas={datas} />
                )}
              </DataIteration>
            </div>
          </div>
        </div>
        <div
              data-aos="fade-up"
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_PUBLIC_URL
                }/src/assets/images/service-bg.png)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="best-services w-full flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10"
            >
              {bannerData.map((each)=>(
              <div key={each.heading} className="item">
                <div className="flex space-x-5 items-center">
                  <div>
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                      {each.heading}
                    </p>
                    <p className="text-sm text-qgray text-white">
                     {each.desc}
                    </p>
                  </div>
                </div>
              </div>))}
            </div>
      </ViewMoreTitle>
    </div>
  );
}
