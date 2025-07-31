import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SubMenu = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isRootActive = location.pathname.startsWith(item.path);

  const positionClass =
    depth === 0
      ? "top-full" // منوی سطح اول
      : "top-[0] right-[300px] "; // زیرمنوهای سطح بعدی

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <NavLink
        to={item.path}
        className={`block px-3 py-2 hover:text-[var(--red)] ${isRootActive ? "text-[var(--red)] border-b-3 border-[var(--red)]" : "text-[var(--gray-2)]"}`
        }
      >
        {item.label}
      </NavLink>

      {item.subMenu && isOpen && (
        <ul
          className={`absolute ${positionClass} bg-white w-[330px] z-50 min-w-[150px]`}
        >
          {item.subMenu?.map((subItem, subIndex) => {
            return (
              <li key={subIndex} className="hover:bg-[var(--gray-3)]">
                <SubMenu item={subItem} depth={depth + 1}/>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default SubMenu;
