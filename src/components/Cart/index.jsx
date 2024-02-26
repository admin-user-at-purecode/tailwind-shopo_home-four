import Star from '../icons/Star'
export default function Cart({ className, type }) {
  return (
    <>
      <div
        style={{ boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)" }}
        className={`w-[300px] bg-white border-t-[3px] ${
          type === 3 ? "border-qh3-blue" : "cart-wrappwer"
        }  ${className || ""}`}
      >
        <div className="w-full h-full">
          <div className="product-items h-[310px] overflow-y-scroll">
            <ul>{
              [1,2,3,4,5].map((each)=>(
              <li key={each} className="w-full h-full flex">
                <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                  <div className="w-[65px] h-full">
                    <img
                      src={`${
                        import.meta.env.VITE_PUBLIC_URL
                      }/src/assets/images/product-img-1.jpg`}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 h-full flex flex-col justify-center ">
                    <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                      iPhone 12 Pro Max 128GB Golen colour
                    </p>

                    <p className="price">
                      <span className="offer-price text-qred font-600 text-[15px] ml-2">
                        $38
                      </span>
                    </p>
                  </div>
                </div>
                <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                  <Star />
                </span>
              </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-4 mt-[20px] mb-[12px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="product-actions px-4 mb-[30px]">
            <div className="total-equation flex justify-between items-center mb-[28px]">
              <span className="text-[15px] font-500 text-qblack">Subtotal</span>
              <span className="text-[15px] font-500 text-qred ">$365</span>
            </div>
            <div className="product-action-btn">
              
                <div className="gray-btn w-full h-[50px] mb-[10px] ">
                  <span>View Cart</span>
                </div>
                <div className="w-full h-[50px]">
                  <div className={type === 3 ? "blue-btn" : "yellow-btn"}>
                    <span className="text-sm">Checkout Now</span>
                  </div>
                </div>
              
            </div>
          </div>
          <div className="w-full px-4 mt-[20px]">
            <div className="h-[1px] bg-[#F0F1F3]"></div>
          </div>
          <div className="flex justify-center py-[15px]">
            <p className="text-[13px] font-500 text-qgray">
              Get Return within <span className="text-qblack">30 days</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
