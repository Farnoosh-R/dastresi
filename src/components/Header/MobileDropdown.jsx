import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileDropdown = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div className="flex justify-between items-center py-2">
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block text-right flex-1 ${
              isActive ? "text-blue-600 font-bold" : "text-gray-800"
            }`
          }
          end={!item.subMenu} // فقط اگر زیرمنو نداشت exact بزن
          onClick={() => setOpen(false)} // بستن منو روی کلیک لینک
        >
          {item.label}
        </NavLink>

        {item.subMenu && (
          <button
            onClick={() => setOpen(!open)}
            className="px-3 text-gray-600"
            aria-label={open ? "بستن زیرمنو" : "باز کردن زیرمنو"}
            type="button"
          >
            {open ? "▲" : "▼"}
          </button>
        )}
      </div>

      {item.subMenu && open && (
        <div className="pr-4">
          {item.subMenu.map((child, idx) => (
            <MobileDropdown key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
