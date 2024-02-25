import Cart from '../Cart'
import Star from '../icons/Star'
import SearchBox from '../SearchBox'
export default function Middlebar({ className }) {
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
                <img
                  width="152"
                  height="36"
                  src={`${
                    import.meta.env.VITE_PUBLIC_URL
                  }/src/assets/images/logo-4.svg`}
                  alt="logo"
                />
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center">
              <div className="compaire relative">
                  <span>
                    <Star />
                  </span>
                <span className="w-[18px] h-[18px] rounded-full bg-qh4-pink absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                  2
                </span>
              </div>
              <div className="favorite relative">
                  <span>
                    <Star />
                  </span>
                <span className="w-[18px] h-[18px] rounded-full bg-qh4-pink absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                  1
                </span>
              </div>
              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                    <span>
                      <Star />
                    </span>
                  <span className="w-[18px] h-[18px] rounded-full bg-qh4-pink absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] text-qblack">
                    15
                  </span>
                </div>
                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
              </div>
              <div>
                  <span>
                    <Star />
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
