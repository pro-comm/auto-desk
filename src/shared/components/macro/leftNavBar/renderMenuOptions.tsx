import { Link } from "react-router-dom";
import { ChildItems, MenuItems } from ".";
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

interface RenderMenuProps extends MenuItems{
  width: number
}

const RenderMenuOptions = (props: RenderMenuProps) => {
  const [activate, setActivate] = useState("");
  const [showHideAcc, setShowHideAcc] = useState(true);
  const [catInfo, setCatInfo] = useState('')
  const location= useLocation()
  useEffect(()=>{
    setActivate(location.pathname)
  }, [])
  return (
    <li className="" key={props.label}>
      <div className="pl-4 cursor-pointer" onClick={() => setShowHideAcc(!showHideAcc)}>
        {/*props.icon()*/} {props.width > 100 && <div className="inline-block text-base font-semibold py-2">{props.label}</div> || <div className="pt-2 pb-2">{props.icon()}</div>}
      </div>
      {showHideAcc && (
        <ul className={`subCategory`}>
          {props.items?.length &&
            props.items.map((subItems: ChildItems, colIndex: number) => {
              return (
                <li
                  onClick={(e) => {
                    document.querySelectorAll('.active').forEach((elem)=>{
                      elem.classList.remove('active');
                      elem.classList.remove('active-bg');
                      elem.classList.remove('font-semibold')
                      // return elem.classList
                    })
                    //@ts-ignore
                    e.currentTarget.classList.add('active')
                     //@ts-ignore
                    e.currentTarget.classList.add('active-bg')
                     //@ts-ignore
                    e.currentTarget.classList.add('font-semibold') 
                    //@ts-ignore
                    e.currentTarget.querySelector('svg').classList.add('active')                 
                  }}
                  key={subItems.routerLink}
                  className={`hover:bg-[#eff2f9] ${
                    subItems.routerLink == activate ? "active-bg font-semibold active" : ""
                  }`}
                >
                  <div title={subItems.label} className={`${props.width < 100? 'pl-[16px] py-[14px]': 'mx-[12px] pt-[5px] pb-[10px]'}`}>
                    <Link to={subItems.routerLink}>
                      {subItems.icon(subItems.routerLink == activate)}{" "}
                      {props.width > 100 && <div className="inline-block relative top-[8px] overflow-hidden truncate w-44">{subItems.label}{" "}</div>}
                    </Link>
                  </div>
                </li>
              );
            })}
        </ul>
      )}
    </li>
  );
};
export default RenderMenuOptions;
