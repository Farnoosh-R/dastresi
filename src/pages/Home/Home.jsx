import DailyDiscount from "../../components/DailyDiscount/DailyDiscount";
import Slider from "../../components/Slider/Slider"

const Home = () => {
    return(
        <div className="home container">
            <Slider />
            <DailyDiscount />
        </div>
    )
}
export default Home;