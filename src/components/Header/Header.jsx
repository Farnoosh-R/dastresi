import HeaderLogo from "./HeaderLogo";
import { menuItems } from "./menuItems";
import SubMenu from "./SubMenu";
const Header = () => {
  return (
    <div className="header fixed text-[14px] z-50 container px-[150px] mx-uto bg-white py-5" dir="rtl">
        <HeaderLogo />
        <br />
      <div className="flex items-center gap-10">
        <div className="flex cursor-pointer gap-10 relative leading-12">
          {menuItems?.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Header;
