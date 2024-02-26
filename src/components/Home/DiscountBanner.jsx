import Star from '../icons/Star'
export default function DiscountBanner({ className }) {
  return (
    <div
      className={`discount-banner w-full h-[307px] bg-cover  relative ${
        className || ""
      }`}
      style={{
        background: `url(${
          import.meta.env.VITE_PUBLIC_URL
        }/src/assets/images/discount-banner-3.jpg) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="container-x mx-auto relative h-full">
        <div className="thumb absolute -left-[140px] -top-[87px] w-[520px] h-[394px]">
          <img
            src="/src/assets/images/discount-banner-3.1.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex justify-center items-center w-full h-full relative xl:left-[100px]">
          <div>
            <div data-aos="fade-up">
              <h1 className="sm:text-3xl text-xl font-700 text-qblack mb-2 text-center">
                Get <span className="mx-1 text-qred">20%</span> Off Discount
                Coupon
              </h1>
              <p className="text-center sm:text-[18px] text-sm font-400">
                by Subscribe our Newsletter
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="sm:w-[543px] w-[300px] h-[54px] flex mt-8"
            >
              <div className="flex-1 bg-white pl-4 flex space-x-2 items-center h-full focus-within:text-qyellow text-qblack">
                <span>
                  <Star />
                </span>
                <input
                  type="email"
                  name="email"
                  className="w-full h-full focus:outline-none text-sm placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider"
                  placeholder="EMAIL ADDRESS"
                />
              </div>
              <button
                type="button"
                className="sm:w-[158px] w-[80px]  h-full bg-qh4-pink text-sm font-600"
              >
                Get the Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
