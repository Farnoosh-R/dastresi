import { useContext } from "react";
import { MyContext } from "../../App";
import { FaPercent } from "react-icons/fa";


const DailyDiscount = () => {
  const { dailyDiscountRight } = useContext(MyContext);
  const { dailyDiscountLeft } = useContext(MyContext);

  return (
    <div className="daily-discount container rounded-[15px] p-5 bg-[var(--gray-0)]">

        <div className="flex justify-between mb-4">
            <div>timer</div>
            <div className="flex">
                <h2 className="font-bold">تخفیف‌های روزانه دسترسی</h2>
                <div className="text-[var(--red)]"><FaPercent /></div>
            </div>
            
        </div>


        <div className="flex">
                  <div className="w-1/3">
        <h1>left side</h1>
      </div>
      <div className="flex gap-6 w-2/3">
        {dailyDiscountRight?.map((item) => {
            return(
                <div className="bg-white rounded-[15px] p-4 flex-1">
                    <img src={item.image} alt="" />
                    <div>{item.title}</div>
                    <div>takhfif row</div>
                    <div>{item.price}</div>
                </div>
            )
        })}
      </div>
        </div>
    </div>
  );
};
export default DailyDiscount;
