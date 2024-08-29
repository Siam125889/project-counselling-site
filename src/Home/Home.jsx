import Banner from "../Components/Banner/Banner";
import GetInTouchSection from "../Components/GetInTouchSection/GetInTouchSection";
import WhyUsSection from "../Components/WhyUsSection/WhyUsSection";
const Home = () => {
  return (
    <div className="mt-0">
      <Banner></Banner>
      <WhyUsSection></WhyUsSection>
      <GetInTouchSection></GetInTouchSection>
    </div>
  );
};

export default Home;
