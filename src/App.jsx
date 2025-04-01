import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomeScreen from "./Components/Screens/HomeScreen";
import BestProduct from "./Components/product/BestProduct";
import AboutBeekeeper from "./Components/Screens/AboutBeekeeper";
import FeedBackScreen from "./Components/Screens/FeedBackScreen";
import OurServicesScreen from "./Components/Screens/OurServicesScreen";
import ChooseUsScreen from "./Components/Screens/ChooseUsScreen";
import DeliveryScreen from "./Components/Screens/DeliveryScreen";
import TypeofBeeScreen from "./Components/Screens/TypeofBeeScreen";
import OurBlogScreen from "./Components/Screens/OurBlogScreen";
import NewsletterSignUp from "./Components/Screens/NewsletterSignUp";
import FooterScreen from "./Components/Screens/FooterScreen";

export default function App() {
  return (
    <Router>
      <NavBar />
      <HomeScreen />
      <BestProduct />
      <AboutBeekeeper />
      <FeedBackScreen />
      <OurServicesScreen />
      <ChooseUsScreen />
      <DeliveryScreen />
      <TypeofBeeScreen />
      <OurBlogScreen />
      <NewsletterSignUp />
      <FooterScreen />
    </Router>
  );
}
