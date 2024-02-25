import { useState } from "react";
// import DiscountBanner from "../HomeFour/DiscountBanner";

import DiscountBanner from "./Home/DiscountBanner";
import Drawer from "./Drawer";
import HeaderFour from "./Headers";
import FooterFour from "./Footers";

export default function LayoutHomeFour({ children, childrenClasses, type }) {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        <HeaderFour type={4} drawerAction={() => setDrawer(!drawer)} />
        <div className={`w-full  ${childrenClasses || "pt-[30px] pb-[60px]"}`}>
          {children && children}
        </div>
        <DiscountBanner />
        <FooterFour />
      </div>
    </>
  );
}
