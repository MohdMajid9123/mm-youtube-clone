import React, { useContext } from "react";
import LeftNavMenuItem from "./LeftNavMenuItem";
import { categories } from "../util/Constants";
import { Context } from "../context/ContexApi";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectCategories, setSelectCategories, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectCategories(name);
        break;
      case "home":
        return setSelectCategories(name);
        break;
      case "menu":
        return false;
      default:
        break;
    }
  };
  console.log("mobileMenu:", mobileMenu);
  return (
    //
    // translate-x-0
    <>
      <div
        className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-50 transition-all text-white translate-x-[-240px] md:translate-x-0 ${
          mobileMenu ? "translate-x-[0]" : ""
        }`}
      >
        <div className="flex flex-col px-5 ">
          {categories.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <LeftNavMenuItem
                  text={item.type === "home" ? "Home" : item.name}
                  icon={item.icon}
                  action={() => {
                    clickHandler(item.name, item.type);
                    navigate("/");
                  }}
                  className={`${
                    selectCategories === item.name ? "bg-white/[0.15]" : ""
                  }`}
                />
                {item.divider && <hr className="my-5 border-white/[0.2]" />}
              </React.Fragment>
            );
          })}
          <hr className="my-5 border-white-[0.2] " />
          <div className="text-[12px] text-white/[0.5]">
            Clone By : Md Majid
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNav;
