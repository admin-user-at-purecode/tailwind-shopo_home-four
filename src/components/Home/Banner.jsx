import Star from '../icons/Star'
export default function Banner({ className }) {

  
  return (
    <>
      <div className={`w-full ${className || ""}`}>
        <div className="container-x mx-auto">
          <div className="main-wrapper w-full">
            <div className="grid w-full sm:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 xl:h-[600px] mb-[60px]">
              {[1,2,3].map((each) =>(
              <div key={each} className="item bg-[#AEE6EC] h-full relative">
                <img src="/src/assets/images/banner-4.png" alt="thumb" />
                <div className="absolute bottom-[32px] left-0 xl:w-[306px] sm:w-full w-[306px] bg-white py-6 px-[26px] bg-opacity-[0.92]">
                  <div className="mb-[15px]">
                    <span className="px-2.5 py-[3px] bg-qblack text-white text-xs font-semibold leading-5 uppercase rounded-full">
                      bOYS STUYLE
                    </span>
                  </div>
                  <p className="xl:text-[30px] sm:text-xl text-[30px] font-semibold xl:leading-10 sm:leading-normal leading-10 mb-[15px]">
                    Best Styles for all <br />
                    Boys
                  </p>
                  <a to="#">
                    <div className="w-[100px] h-[36px] rounded bg-qh4-pink flex justify-center items-center">
                      <span>Shop Now</span>
                    </div>
                  </a>
                </div>
              </div>
              ))}
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
