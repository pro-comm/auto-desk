import { prepareJsonMenuConfig } from "../../../config/menuConfig";
import { useState } from "react";
import RenderMenuOptions from "./renderMenuOptions";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosSharpIcon from "@mui/icons-material/ArrowBackIosSharp";
import Logo from "../logo";
export interface ChildItems {
  label: string;
  icon: Function;
  routerLink: string;
}
export interface MenuItems {
  label: string;
  icon: Function;
  items?: Array<ChildItems>;
}
const Index = () => {
  const [width, setWidth] = useState(257);
  const [toggleArrow, setToggleArrow] = useState(false);
  return (
    <>
      <div className="relative mt-[-25px] top-[25px]">
        {!toggleArrow && (
          <div
            className="flex justify-end mr-[-20px] bg-white p-[2px] relative"
            onClick={() => {
              setToggleArrow(true);
              setWidth(90);
            }}
          >
            <ArrowForwardIosSharpIcon
              className="bg-[gray] text-white"
              style={{ width: "18px", height: "18px" }}
            />
          </div>
        )}
        {toggleArrow && (
          <div
            className="flex justify-end  mr-[-20px] bg-white p-[2px] relative"
            onClick={() => {
              setToggleArrow(false);
              setWidth(257);
            }}
          >
            <ArrowBackIosSharpIcon
              className="bg-[gray] text-white"
              style={{ width: "18px", height: "18px" }}
            />
          </div>
        )}
      </div>
      <div
        className={`h-full bg-white text-sm text-[rgba(0,0,0,0.6)] relative`}
      >
        <ul
          className="overflow-y-auto h-[100vh]"
          style={{ width: width, transition: "width 0.1s" }}
          id="category"
        >
          <Logo
            width={42}
            showText={width > 100 ? true : false}
            className="flex bg-white sticky py-2 top-0 z-50 text-2xl pl-4 items-center"
            textLabel="Datafusion"
          />
          {prepareJsonMenuConfig.length &&
            prepareJsonMenuConfig.map(
              (menuItem: MenuItems, rowIndex: number) => {
                return <RenderMenuOptions {...menuItem} width={width} />;
              }
            )}
        </ul>
      </div>
    </>
  );
};
export default Index;
