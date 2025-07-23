import AvailableNow from "../../components/AvailableNow/AvailableNow";
import BestSellers from "../../components/BestSellers/BestSellers";
import Brands from "../../components/Brands/Brands";
import DailyDiscount from "../../components/DailyDiscount/DailyDiscount";
import SelectedCat from "../../components/SelectedCat/SelectedCat";
import Slider from "../../components/Slider/Slider"
import WhyDastresi from "../../components/WhyDastresi/WhyDastresi";

const Home = () => {
    return(
        <div className="home container">
            <Slider />
            <br />
            <DailyDiscount />
            <br />
            <SelectedCat />
            <br />
            <AvailableNow />
            <br />
            <WhyDastresi />
            <br />
            <BestSellers />
            <br />
            <Brands />
        </div>
    )
}
export default Home;