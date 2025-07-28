import { useState } from "react";

const SubMenu = ({ item, depth = 0 }) => {
    const [isOpen, setIsOpen] = useState(false)

    const positionClass =
    depth === 0
      ? "top-full"   // منوی سطح اول
      : "top-[0] right-[300px] ";  // زیرمنوهای سطح بعدی


  return (
    <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {item.label}
      {item.subMenu && isOpen && (
        <ul className={`absolute ${positionClass} bg-white w-[330px] z-50 min-w-[150px]`}>
          {item.subMenu?.map((subItem, subIndex) => {
            return <li key={subIndex} className="hover:bg-[var(--gray-3)]">
                <div className="px-3"><SubMenu item={subItem} key={subIndex}  depth={depth + 1}/></div>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};
export default SubMenu;
