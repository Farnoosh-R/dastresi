import { useContext } from "react";
import { MyContext } from "../../App";
import Slider from "./Slider";

const Articles = () => {
const {articles} = useContext(MyContext);

    return(
        <div className="articles py-4">
            <h2 className="text-right mb-[50px] text-[var(--gray-2)]">آخرین مقالات</h2>
            <Slider articles={articles}/>
        </div>
    )
}
export default Articles;