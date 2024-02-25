import Star from "../icons/Star";
import logo from '../../assets/images/logo-4.svg'

export default function Footer({ type }) {
  const footerCategory = [
    {
    menu : "Feature",
    sub : ["About Us" , "Teams & Condition", "Best Products"]
    },
    {
    menu: "General as",
    sub: ["Blog", "Tracking Order", "Become Seller"  ]
    },
    {
    menu: "Helpful",
    sub: ["Flash Sale" , "FAQ", "Support" ]
    }
    ]

  return (
    <footer className="footer-section-wrapper bg-white print:hidden">
      <div className="container-x block mx-auto pt-[56px]">
        <div className="w-full flex flex-col items-center mb-[30px]">
          <div className="mb-[40px]">
            {type === 3 ? (
                <img
                  width="152"
                  height="36"
                  src={logo}
                  alt="logo"
                />
            ) : (
                <img
                  width="152"
                  height="36"
                  src={logo}
                  alt="logo"
                />
            )}
          </div>
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div className="lg:flex justify-between mb-[30px]">
          <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
            <h1 className="text-[18px] font-600 text-[#2F2F2F] mb-5">About Us</h1>
            <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
              We know there are a lot of threa developers our but we pride into
              a firm in the industry.
            </p>
          </div>
          <div className="flex-1 lg:flex">
              {
                footerCategory.map((each) => (
                  <div key={each.menu} className="lg:w-1/3 w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18px] font-600 text-[#2F2F2F]">{each.menu}</h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-2 ">
                  {
                    each.sub.map((navs) => (
                      <li key={navs}>
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        {navs}
                      </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
                ))
              }
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center">
          <div className="flex lg:space-x-5 justify-between items-center mb-3">
            <div className="flex space-x-5 items-center">
              <a href="#">
                <Star className="fill-current text-qgray hover:text-qblack" />
              </a>
              <a href="#">
                <Star className="fill-current text-qgray hover:text-qblack" />
              </a>
              <a href="#">
                <Star className="fill-current text-qgray hover:text-qblack" />
              </a>
            </div>
            <span className="sm:text-base text-[10px] text-qgray font-400">
              ©2022
              <a
                href="https://quomodosoft.com/"
                target="_blank"
                rel="noreferrer"
                className="font-500 text-qblack mx-1"
              >
                Quomodosoft
              </a>
              All rights reserved
            </span>
          </div>
          <div className="">
              <img
                width="318"
                height="28"
                src={`${
                  import.meta.env.VITE_PUBLIC_URL
                }/src/assets/images/payment-getways.png`}
                alt="payment-getways"
              />
          </div>
        </div>
      </div>
    </footer>
  );
}