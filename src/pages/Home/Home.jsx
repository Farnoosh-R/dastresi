import AvailableNow from "../../components/AvailableNow/AvailableNow";
import DailyDiscount from "../../components/DailyDiscount/DailyDiscount";
import SelectedCat from "../../components/SelectedCat/SelectedCat";
import Slider from "../../components/Slider/Slider"

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
        </div>
    )
}
export default Home;