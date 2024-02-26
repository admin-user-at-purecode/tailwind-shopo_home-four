import { useState } from "react";
import Star from "../icons/Star";

export default function Drawer({ className, open, action }) {
  const [tab, setTab] = useState("category");
  const categories= [
      {
        category:" Mobile & Laptops"
      },
      {
        category:"Gaming Entertainment"
      },
      {
        category:"Image & Video"
      },
      {
        category:"Vehicles"
      },
      {
        category:"Furnitures"
      },
      {
        category:"Sport"
      },
      {
        category:"Food & Drinks"
      },{
        category:"Fashion Accessories"
      },{
        category:"Toilet & Sanitation"
      },
      {
        category:"Makeup Corner"
      },
      {
        category:"Baby Items"
      }
    ];
    const mainMenu = [
      {
      menu: "Home",
      sub: ["Home Two", "Home Three", "Home Four"]
      },
      
      {
      menu: "Shop",
      sub: [],
      },
      {
      menu: "Pages",
      sub: ["Privacy Policy", "FAQ", "Terms and Conditions"]
      },
      {
      menu: "About",
      sub: []
      },
      {
      menu: "Blogs",
      sub: []
      },
      {
      menu: "Contact",
      sub:[]
      }
      ]

  return (
    <>
      <div
        className={`drawer-wrapper w-full  h-full relative block lg:hidden  ${
          className || ""
        }`}
      >
        {open && (
          <div
            onClick={action}
            className="w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed"
          ></div>
        )}
        <div
          className={`w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed top-0 z-50 ${
            open ? "left-0" : "-left-[280px]"
          }`}
        >
          <div className="w-full px-5 mt-5 mb-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-5 items-center">
                <div className="compaire relative">
                    <span>
                      <Star />
                    </span>
                  <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    2
                  </span>
                </div>
                <div className="favorite relative">
                              <span>
                      <Star />
                    </span>
                  
                  <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                    1
                  </span>
                </div>
              </div>
              <button onClick={action} type="button">
              <Star />
              </button>
            </div>
          </div>
          <div className="w-full mt-5 px-5">
            <div className="search-bar w-full h-[34px]  flex ">
              <div className="flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]">
                <input
                  type="text"
                  className="w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgraytwo pl-2.5 "
                  placeholder="Search Product..."
                />
              </div>
              <div className="w-[40px] h-full bg-qyellow flex justify-center items-center">
                <span>
                  <Star/>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 px-5 flex items-center space-x-3">
            <span
              onClick={() => setTab("category")}
              className={`text-base font-semibold  ${
                tab === "category" ? "text-qblack" : "text-qgray"
              }`}
            >
              Categories
            </span>
            <span className="w-[1px] h-[14px] bg-qgray"></span>
            <span
              onClick={() => setTab("menu")}
              className={`text-base font-semibold ${
                tab === "menu" ? "text-qblack" : "text-qgray "
              }`}
            >
              Main Menu
            </span>
          </div>
          {tab === "category" ? (
            <div className="category-item mt-5 w-full">
              <ul className="categories-list">
                {categories.map((each,index) => (
                  <li key={index} className="category-item">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span>
                          <Star />
                        </span>
                        <span className="text-sm font-400">
                          {each.category}
                        </span>
                      </div>
                      <div>
                        <span>
                          <Star/>
                        </span>
                      </div>
                    </div>
                </li>
                ))}
               </ul>
            </div>
          ) : (
            <div className="menu-item mt-5 w-full">
              <ul className="categories-list">
                {
                  mainMenu.map((each) =>(
                    <li key={each.menu} className="category-item">
                    <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <span className="text-sm font-400">{each.menu}</span>
                      </div>
                      <div>
                        <span>
                          <Star />
                        </span>
                      </div>
                    </div>
                  {
                    each.sub &&(
                      <ul className="submenu-list ml-5">
                        {
                          each.sub.map((data) => (
                            <li key={data} className="category-item">
                        <div className=" flex justify-between items-center px-5 h-12 bg-white hover:bg-qyellow transition-all duration-300 ease-in-out cursor-pointer">
                          <div className="flex items-center space-x-6">
                            <span className="text-sm font-400">{data}</span>
                          </div>
                          <div>
                            <span>
                              <Star />
                            </span>
                          </div>
                        </div>
                    </li>
                          ))
                          }
                        </ul>)
                   }
                </li>
                  ))
                }
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}