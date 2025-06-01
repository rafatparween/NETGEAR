import Image from "next/image";
import Navbar from "./Components/Navbar";
// import Contact from "./Components/Contact";
import NetgearSupport from "./Components/NetgearSupport";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import SupportSection from "./Components/SupportSection";
import Grid from "./Components/Grid";
import RoutersSupport from "./Components/RoutersSupport";
import TollFreeSupport from "./Components/TollFreeSupport";

export default function Home() {
  return (
    <>
      <Navbar/>
      <NetgearSupport/>
      <Contact/>
      <Banner/>
      <SupportSection/>
      <Grid/>
      <RoutersSupport/>
      <TollFreeSupport/>
      <Footer/>
    </>
  );
};
+12
