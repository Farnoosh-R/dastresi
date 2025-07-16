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
        </div>
    )
}
export default Home;