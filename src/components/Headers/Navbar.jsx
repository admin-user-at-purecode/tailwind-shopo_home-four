import { useEffect, useState } from "react";
import Star from "../icons/Star";

const categoriesList = [
  { id: "1", category: "Mobile & Laptops" },
  { id: "2", category: "Gaming Entertainment" },
  { id: "3", category: "Image & Video" },
  { id: "4", category: "Vehicles" },
  { id: "5", category: "Furnitures" },
  { id: "6", category: "Sport" },
  { id: "7", category: "Food & Drinks" },
  { id: "8", category: "Fashion Accessories" },
  { id: "9", category: "Toilet & Sanitation" },
  { id: "10", category: "Makeup Corner" },
  { id: "11", category: "Baby Items" },
];

export default function Navbar ({ className, type }) {
  const [categoryToggle, setToggle] = useState(false);
  const [elementsSize, setSize] = useState("0px");

  const toggleHandler = () => setToggle(!categoryToggle);

  useEffect(() => {
    if (categoryToggle) {
      const getItems = document.querySelectorAll(`.categories-list li`).length;
      setSize(categoryToggle && getItems > 0 ? `${42 * getItems}px` : `0px`);
    } else {
      setSize(`0px`);
    }
  }, [categoryToggle]);

  return (
    <div
      className={`nav-widget-wrapper w-full bg-qh4-pink h-[60px] relative z-30  ${
        className || ""
      }`}
    >
    <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center w-full justify-between">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md relative">
                <button onClick={toggleHandler} type="button" className="w-full h-full flex justify-between items-center">
                  <div className="flex space-x-3 items-center">
                    <Star />
                    <span className="text-sm font-600 text-qblacktext">All Categories</span>
                  </div>
                  <div>
                    <Star width="5.78538" height="1.28564" className="fill-current text-qblacktext" />
                  </div>
                </button>
                {categoryToggle && <div className="fixed top-0 left-0 w-full h-full -z-10" onClick={toggleHandler}></div>}
                <div className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden" style={{ height: elementsSize }}>
                  <ul className="categories-list">
                    {categoriesList.map((category) => (
                      <li className="category-item" key={category.id}>
                        <a to="">
                          
                          <div className={`flex justify-between items-center px-5 h-10 bg-white transition-all duration-300 ease-in-out cursor-pointer text-qblack ${type === 3 ? "hover:bg-qh3-blue hover:text-white" : "hover:bg-qyellow"}`}>
                            <div className="flex items-center space-x-6">
                              <Star />
                              <span className="text-xs font-400">{category.category}</span>
                            </div>
                            <div><Star /></div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            <div className="become-seller-btn">
              <a to="/become-saller">
                <div className="becomeSellerButton black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                  <div className="flex space-x-2 items-center">
                    <span className="text-sm font-600">Become a Seller</span>
                    <Star />
                  </div>
                </div>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};